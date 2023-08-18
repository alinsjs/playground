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
import { Examples } from './examples';

function resultError (e: any, stack = true) {
    const app = document.getElementById('App');
    if (!app) return;
    const str = stack ? e.stack : e.toString();
    app.innerHTML = `<pre style='color:#f44'>${str.replace(/</g, '&lt;')}</pre>`;
};

export const useStatus = createStore({
    state: () => {
        const codeEditorWidth = window.innerWidth * 0.5;
        hljs.registerLanguage('javascript', javascript);
        const exampleIndex = location.hash ? parseInt(location.hash.substring(1)) : 0;
        return {
            codeEditorWidth,
            codeEditorLeft: 0,
            syntaxError: false,
            editorCode: '',
            outputCode: '',
            runCode: '',
            dragActive: false,
            resultNaviIndex: 0,
            exampleIndex,
            exampleName: Examples[exampleIndex].name,
            exampleCode: Examples[exampleIndex].code,
        };
    },
    actions: {
        switchExample (index: number) {
            this.exampleIndex = index;
            this.exampleName = Examples[index].name;
            this.exampleCode =  Examples[index].code;
            location.hash = `${index}`;
        },
        setCode (v: string) {
            let result = '';
            try {
                result = parseWebAlins(v, { useImport: true });
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

            if (this.resultNaviIndex === 0) {
                this.runCodeResult();
            }

            // this.$watch('resultNaviIndex', v => {
            //     if (v === 0) {
            //         this.runCodeResult();
            //     }
            // });

        },
        onDragSize (x: number) {
            this.codeEditorWidth = x - this.codeEditorLeft;
        },
        runCodeResult () {
            // @ts-ignore
            document.getElementById('App').innerHTML = '';
            try {
                new Function(this.runCode)();
            } catch (e) {
                console.error(e);
                resultError(e);
            }
        }
    },
    getters: {
        codeWidthPx () {
            return `${this.codeEditorWidth}px`;
        }
    }
});