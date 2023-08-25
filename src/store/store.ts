/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-16 16:24:25
 * @Description: Coding something
 */
import { createStore } from 'alins-store';
import { parseWebAlins } from 'alins-compiler-web';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';// Then register the languages you need

import 'highlight.js/styles/vs2015.css';
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
        const codeEditorWidth = window.innerWidth * 0.5;
        hljs.registerLanguage('javascript', javascript);
        const exampleIndex = location.hash ? parseInt(location.hash.substring(1)) : 0;

        return {
            // 编辑器拖拽条
            codeEditorWidth,
            codeEditorLeft: 0,
            dragActive: false,

            syntaxError: false,
            editorCode: '',
            outputCode: '',
            runCode: '',
            resultNaviIndex: 0,
            exampleIndex,
            exampleName: Examples[exampleIndex].name,
            exampleTitle: Examples[exampleIndex].title,
            exampleCode: Examples[exampleIndex].code,
            codeChange: false,
            info: '',
            timer: null as any,

            console: {
                list: [] as string[],
                // console 拖拽条
                height: window.innerHeight * 0.3,
                prevHeight: 0,
                dragActive: false,
            }
        };
    },
    actions: {

        toggleConsole(){
            const cs = this.console;
            if(cs.prevHeight){
                cs.height = cs.prevHeight;
                cs.prevHeight = 0;
            }else{
                cs.prevHeight = cs.height;
                cs.height = 0;
            }
        },

        clearConsole(){
            this.console.list = [];
        },

        log(args: any[]){
            this.console.list.push(args.map(arg=>arg.toString()).join(' '))
        },

        showInfo(info: string, time = 2000){
            clearTimeout(this.timer);
            this.info = info;
            this.timer = setTimeout(()=>{
                this.info = '';
            }, time);
        },
        switchExample (index: number) {
            if (index === this.exampleIndex) return;
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

            this.runCode = result.replace('import { _$$ } from "alins";', 'const _$$$$ = window.Alins._$$$$;');
            this.syntaxError = false;


            this.codeChange = true;

            if (this.resultNaviIndex === 0) {
                this.runCodeResult();
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
            // @ts-ignore
            document.getElementById('App').innerHTML = '';

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
            const blob = new Blob([ createAlinsHTML(this.exampleName, this.exampleCode) ], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.click();
            this.showInfo(`Example "${this.exampleName}" Downloaded!`)
        }
    },
    getters: {
        codeWidthPx () {
            return `${this.codeEditorWidth}px`;
        },
        consoleHeightPX () {
            return `${this.console.height}px`;
        },
        resultPanelHeightCss(){
            return `${window.innerHeight - 83 - this.console.height}px`;
        }
    }
});

// const status = useStatus();
// status.download();

// useStatus().download;
// useStatus().codeWidthPx;

function createAlinsHTML (name: string, code: string) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}</title>
    <script src="https://cdn.jsdelivr.net/npm/alins-compiler-web"></script>
</head>
<body>
    <!--
        This demo is only used for development and debugging. 
        For official use, please refer to https://alinsjs.github.io/docs/
    -->
    <div id="App"></div>
    <script type="text/alins">
${code}
    </script>
</body>
</html>`;
}