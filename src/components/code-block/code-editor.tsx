/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 07:43:05
 * @Description: Coding something
 */
import { IEditor, initMonaco } from './monaco';

export function Editor () {
    let editor: IEditor;
    const dom = <div
        style={{
            width: '100%',
            height: '100%',
        }}
        $mounted={(dom) => {
            editor = initMonaco(dom);
            window.editor = editor;
            console.log(editor);
        }}
    ></div>;
    return dom;
}