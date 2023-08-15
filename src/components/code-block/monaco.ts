/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-14 21:31:45
 * @Description: Coding something
 */

import * as monaco from 'monaco-editor';
// import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
// @ts-ignore
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
// @ts-ignore
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// @ts-ignore
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
// @ts-ignore
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
// @ts-ignore
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

export type IEditor = monaco.editor.IStandaloneCodeEditor;

// @ts-ignore
self.MonacoEnvironment = {
    getWorker (_, label) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker();
        }
        return new editorWorker();
    }
};
monaco.editor.defineTheme('vsc-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'keyword1', foreground: '569cd6' },
        { token: 'keyword2', foreground: 'c586c0' },
        { token: 'keyword3', foreground: '3ac9b0' },
        { token: 'identifier', foreground: '9cdcfe' },
        { token: 'function', foreground: 'dcdcaa' }
    ],
    colors: {}
});
monaco.editor.defineTheme('vsc-light', {
    base: 'vs',
    inherit: true,
    rules: [
        { token: 'keyword1', foreground: '0000ff' },
        { token: 'keyword2', foreground: 'af00db' },
        { token: 'keyword3', foreground: '267f99' },
        { token: 'identifier', foreground: '001090' },
        { token: 'function', foreground: 'b27878' }
    ],
    colors: {}
});

export class Editor {
    dom: HTMLElement;

    eidtor: IEditor;

    constructor (dom: HTMLElement) {
        this.dom = dom;
        this.eidtor = monaco.editor.create(dom, {
            value: 'function hello() {\n\talert(\'Hello world!\');\n}',
            language: 'javascript',
            theme: 'vsc-dark',
            fontSize: 14,
        });
    }
}