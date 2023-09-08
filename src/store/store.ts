/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-16 16:24:25
 * @Description: Coding something
 */
import { createStore } from 'alins';
import { parseWebAlins } from 'alins-compiler-web';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';// Then register the languages you need

import 'highlight.js/styles/vs2015.css';
import 'src/function/custom-code';
import { compressCode, copy, countCodeSize, createAlinsHTML, getUrlParam } from 'src/utils';
import Examples from './examples';

let downloadLink: any;

function resultError (e: any, stack = true) {
    console.warn(e);
    const app = document.getElementById('App');
    if (!app) return;
    const str = stack ? e.stack : e.toString();
    app.innerHTML = `<pre style='color:#f44;font-family: var(--font);'>${str.replace(/</g, '&lt;')}</pre>`;
};

function loadingResult () {
    const app = document.getElementById('App');
    if (!app) return;
    app.innerHTML = `<div class='code-loading'>
        <i class=" ei-spinner-snake ei-spin"></i>
    </div>`;
}

export const useStatus = createStore({
    state: () => {

        const sidebarWidth = getUrlParam('side') === '0' ? 0 : 200;

        const codeEditorWidth = (window.innerWidth - sidebarWidth) * 0.5;
        hljs.registerLanguage('javascript', javascript);
        const exampleIndex = location.hash ? parseInt(location.hash.substring(1)) : 0;
        const example = Examples[exampleIndex];

        return {
            // 编辑器拖拽条
            codeEditorWidth,
            codeEditorLeft: 0,
            dragActive: false,

            syntaxError: false,
            editorCode: example.code,
            outputCode: '',
            runCode: '',
            resultNaviIndex: 0,
            exampleIndex,
            exampleName: example.name,
            exampleTitle: example.title,
            exampleCode: example.code,
            codeChange: false,
            info: '',
            timer: null as any,

            console: {
                list: [] as string[],
                // console 拖拽条
                height: window.innerHeight * 0.3,
                prevHeight: 0,
                dragActive: false,
            },

            sidebarWidth,
        };
    },
    actions: {

        toggleConsole () {
            const cs = this.console;
            if (cs.prevHeight) {
                cs.height = cs.prevHeight;
                cs.prevHeight = 0;
            } else {
                cs.prevHeight = cs.height;
                cs.height = 0;
            }
        },

        clearConsole () {
            this.console.list = [];
            // console.clear();
        },

        log (args: any[]) {
            this.console.list.push(args.map(arg => arg.toString()).join(' '));
        },

        showInfo (info: string, time = 2000) {
            clearTimeout(this.timer);
            this.info = info;
            this.timer = setTimeout(() => {
                this.info = '';
            }, time);
        },
        switchExample (index: number) {
            if (index === this.exampleIndex) return;
            this.clearConsole();
            this.resultNaviIndex = 0;
            loadingResult();
            this.exampleIndex = index;
            this.exampleName = Examples[index].name;
            this.exampleCode =  Examples[index].code;
            this.exampleTitle =  Examples[index].title;
            location.hash = `${index}`;
        },
        setCode (v: string) {
            let result = '';
            try {
                this.editorCode = v;
                result = parseWebAlins(v, { useImport: true, ts: true, filename: 'demo.tsx' });
            } catch (e: any) {
                this.outputCode = e.toString().replace(/</g, '&lt;');
                this.syntaxError = true;
                resultError(e);
                return;
            }

            const highlightedCode = hljs.highlight(
                result,
                { language: 'javascript' }
            );
            this.outputCode = highlightedCode.value;
            this.runCode = result.replace(/import *\{(.*?)\} *from *['"]alins['"]/g, 'const {$1} = window.Alins');
            this.syntaxError = false;

            this.codeChange = true;

            if (this.resultNaviIndex === 0) {
                this.runCodeResult(false);
            }
        },
        onDragSize (x: number) {
            this.codeEditorWidth = x - this.codeEditorLeft;
        },
        onDragConsoleSize (y: number) {
            this.console.height = window.innerHeight - y;
        },
        runCodeResult (force = false) {
            if (!this.codeChange && !force) return;
            if (force) this.resultNaviIndex = 0;
            document.getElementById('App')!.innerHTML = '';

            try {
                this.clearConsole();
                new Function(this.runCode)();
            } catch (e) {
                console.error(e);
                resultError(e);
                return false;
            }
            this.codeChange = false;
            return true;
        },
        download () {
            // store
            if (!downloadLink) {
                downloadLink = document.createElement('a');
                downloadLink.setAttribute('style', 'position: fixed;top: -100px');
                document.body.appendChild(downloadLink);
            }
            downloadLink.setAttribute('download', `${this.exampleName.replace(/ /g, '-')}.alins.html`);
            const blob = new Blob([ createAlinsHTML(this.exampleName, this.editorCode) ], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.click();
            this.showInfo(`Example "${this.exampleName}" Downloaded!`);
        },
        copyLink () {
            copy(`${location.origin}?name=${this.exampleName}&code=${compressCode(this.editorCode)}`);
        }
    },
    getters: {
        codeWidthPx () {
            return `${this.codeEditorWidth}px`;
        },
        consoleHeightPX () {
            return `${this.console.height}px`;
        },
        resultPanelHeightCss () {
            return `${window.innerHeight - 83 - this.console.height}px`;
        },
        codeSize () {
            return countCodeSize(this.editorCode);
        },
        outputSize () {
            return countCodeSize(this.runCode);
        }
    }
});

// const status = useStatus();
// status.download();

// useStatus().download;
// useStatus().codeWidthPx;
