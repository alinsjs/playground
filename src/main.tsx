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
import { ConsoleBlock } from './components/console-block/console-block';
import { copy } from './utils';

const status = useStatus();

// @ts-ignore
window._status = status;

<div
    $mount={document.body}
    class='main-container'>
    <div class='title-container'>
        <span class='title-item'>
            <img style='height: 30px' src="https://shiyix.cn/images/alins.png" alt="" />
            <span style='color: var(--theme-color)'>Alins Playground</span>
        </span>
        <span class='title-item info'>{status.info}</span>
        <span class='title-item right'>
            <span onclick={window.open('https://alinsjs.github.io/docs/')}>
                <i class="ei-file-text-o"></i>
                Docs
            </span>
            <span onclick={window.open('https://github.com/alinsjs/alins')}>
                <i class="ei-github"></i>
                GitHub
            </span>
        </span>
    </div>
    <div class='body-container'>
        <div class='body-assets-container'
            style={`width: ${status.sidebarWidth}px;min-width: ${status.sidebarWidth}px;`}
            $mounted={(dom) => {
                // @ts-ignore
                dom.scrollTop = document.querySelector('.example-item.active')!.offsetTop - 100;
            }}>
            <ExamplesList/>
        </div>
        <div
            class='body-code-container'
            style={{ width: status.codeWidthPx }}
            $mounted={(dom) => {
                status.codeEditorLeft = dom.getBoundingClientRect().left;
            }}
        >
            <div class='editor-title'>
                <span class='text-ellipsis'>
                    <span style='color:#999'>{status.exampleTitle}: </span>
                    {status.exampleName}
                </span>
                <span class='editor-btns'>
                    <i onclick={() => {
                        copy(status.exampleCode);
                        status.showInfo('Copy succeeded!');
                    }} title='Copy Code' class="ei-copy"></i>
                    <i onclick={status.download} title='Download' class="ei-download-alt"></i>
                    <i onclick={() => {
                        if (status.runCodeResult(true)) {
                            status.showInfo('Refresh succeeded!');
                        }
                    }} title='Refresh Result' class="ei-refresh"></i>
                </span>
            </div>
            <EditorBox />
        </div>
        <DragBar />
        <div class='body-result-container'>
            <ResultBlock />
            <div class='console-title'>
                <div class='console-btns'>
                    <i class="ei-terminal" onclick={status.toggleConsole}></i>
                    <i class="ei-trash" onclick={status.clearConsole}></i>
                </div>
            </div>
            <DragBar type='console'/>
            <ConsoleBlock />
        </div>
    </div>
    {/* <div class='status-container'>status</div> */}
</div>;