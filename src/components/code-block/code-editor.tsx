/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 07:43:05
 * @Description: Coding something
 */
import { Editor } from './monaco';

export function EditorBox () {
    let editor: Editor;
    const dom = <div
        style={{
            width: '100%',
            height: '100%',
        }}
        $mounted={(dom) => {
            editor = new Editor(dom);
            window.editor = editor;
            console.log(editor);
        }}
    ></div>;

    return dom;
}