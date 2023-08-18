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

export const useStatus = createStore({
    state: () => {
        const codeEditorWidth = window.innerWidth * 0.5;
        hljs.registerLanguage('javascript', javascript);
        return {
            codeEditorWidth,
            codeEditorLeft: 0,
            syntaxError: false,
            showCode: '',
            runCode: '',
        };
    },
    actions: {
        setCode (v) {
            let result = '';
            try {
                result = parseWebAlins(v, { useImport: true });
            } catch (e: any) {
                this.showCode = e.toString();
                this.syntaxError = true;
                return;
            }
            try {
                const highlightedCode = hljs.highlight(
                    result,
                    { language: 'javascript' }
                );
                this.showCode = highlightedCode.value;
            } catch (e: any) {
                this.showCode = e.toString();
                this.syntaxError = true;
                return;
            }

            this.runCode = result.replace('import { _$$ } from "alins";', 'const _$$ = window.Alins._$$;');
            this.syntaxError = false;
        },
        onDragSize (x: number) {
            this.codeEditorWidth = x - this.codeEditorLeft;
        }
    },
    getters: {
        codeWidthPx: () => `${useStatus().codeEditorWidth}px`
    }
});