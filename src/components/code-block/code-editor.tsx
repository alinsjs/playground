/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 07:43:05
 * @Description: Coding something
 */
import { useStatus } from 'src/store/store';
import { debounce } from 'src/utils';
import { Editor } from './monaco';

export function EditorBox () {
    let _editor: Editor;
    const dom = <div
        style={{
            width: '100%',
            height: '100%',
        }}
        $mounted={(dom) => {
            const parseCode = (v: string) => {
                useStatus().setCode(v);
            };
            _editor = new Editor({
                dom,
                onchange: debounce(parseCode),
            });
            parseCode(_editor.code());
        }}
    ></div>;

    return dom;
}