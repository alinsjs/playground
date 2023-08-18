/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 01:17:26
 * @Description: Coding something
 */
// import './counter';
// import './todo';

// import { parseWebAlins } from 'alins-compiler-web';
// import {initMonaco} from './monaco';
import { ExamplesList } from './components/assets-block/assets-list';
import { EditorBox } from './components/code-block/code-editor';
import './styles/index.less';
import { ResultBlock } from './components/result-block/result-block';
import { useStatus } from './store/store'; // @reactive
import { DragBar } from './components/widgets/drag-bar';

const status = useStatus(); // @static

window._status = status;


<div
    $parent={document.body}
    class='main-container'>
    <div class='title-container'>title</div>
    <div class='body-container'>
        <div class='body-assets-container'>
            <ExamplesList/>
        </div>
        <div
            class='body-code-container'
            style={{ width: status.codeWidthPx }}
            $mounted={(dom) => {
                status.codeEditorLeft = dom.getBoundingClientRect().left;
            }}
        >
            <EditorBox />
        </div>
        <DragBar/>
        <div class='body-result-container'>
            <ResultBlock />
        </div>
    </div>
    <div class='status-container'>status</div>
</div>;