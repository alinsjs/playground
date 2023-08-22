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
import { ResultBlock } from './components/result-block/result-block';
import { useStatus } from './store/store';
import { DragBar } from './components/widgets/drag-bar';
import './styles/index.less';

const status = useStatus();

window._status = status;

<div
    $parent={document.body}
    class='main-container'>
    <div class='title-container'>
        <span class='title-item'>
            <img style='height: 30px' src="https://shiyix.cn/images/alins.png" alt="" />
            <span style='color: var(--theme-color)'>Alins Playground</span>
        </span>
        <span class='title-item right'>
            <span onclick={status.download()}>
                <i class="ei-download-alt"></i>
                Download
            </span>
            <span onclick={() => window.open('https://alinsjs.github.io/docs/')}>
                <i class="ei-file-text-o"></i>
                Docs
            </span>
            <span onclick={() => window.open('https://github.com/alinsjs/alins')}>
                <i class="ei-github"></i>
                GitHub
            </span>
        </span>
    </div>
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
            <div class='editor-title'>{status.exampleName}</div>
            <EditorBox />
        </div>
        <DragBar/>
        <div class='body-result-container'>
            <ResultBlock />
        </div>
    </div>
    {/* <div class='status-container'>status</div> */}
</div>;