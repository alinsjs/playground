/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 01:17:26
 * @Description: Coding something
 */
import { ExamplesList } from './components/assets-block/assets-list';
import { EditorBox } from './components/code-block/code-editor';
import { ResultBlock } from './components/result-block/result-block';
import { useStatus } from './store/store';
import { DragBar } from './components/widgets/drag-bar';
import './styles/index.less';
import { ConsoleBlock } from './components/console-block/console-block';
import { IS_DEV, copy } from './utils';
import { version } from 'alins';

const status = useStatus();

// @ts-ignore
window._status = status;

<div
    $mount={document.body}
    class='main-container'>
    <div class='title-container'>
        <span class='title-item main' onclick={window.open('https://github.com/alinsjs/playground/')}>
            <i class="mobile-mode sidebar-btn" 
                class:ei-chevron-left={status.showSideBar}
                class:ei-chevron-right={!status.showSideBar}
                onclick:stop={status.toggleSidebar}></i>
            <img style='height: 30px' src="https://shiyix.cn/images/alins.png" alt="" />
            <span class='pc-mode' style='color: var(--theme-color)'>Alins Playground [v{version}]</span>
            <span class='mobile-mode' style='color: var(--theme-color)'>Alins Playground</span>
        </span>
        <span class='title-item info'>{status.info}</span>
        <span class='title-item right'>
            <span onclick={window.open('https://alinsjs.github.io/docs/')}>
                <i class="ei-file-text-o"></i>
                <span class='pc-mode'>Docs</span>
            </span>
            <span onclick={window.open('https://github.com/alinsjs/alins')}>
                <i class="ei-github"></i>
                <span class='pc-mode'>GitHub</span>
            </span>
            <span class="mobile-mode">
                <i class="sidebar-btn" 
                    class:ei-chevron-left={!status.showResultBox}
                    class:ei-chevron-right={status.showResultBox}
                    onclick:stop={status.toggleResultBox}></i>
            </span>
        </span>
    </div>
    <div class='body-container'>
        <div class='body-assets-container'
            style={status.isMiniScreen ? '' : `width: ${status.sidebarWidth}px;min-width: ${status.sidebarWidth}px;`}
            style:transform={`translateX(${(status.isMiniScreen && !status.showSideBar) ? '-100%': '0'})`}
            $mounted={(dom) => {
                // @ts-ignore
                dom.scrollTop = document.querySelector('.example-item.active')!.offsetTop - 100;
            }}>
            <ExamplesList/>
        </div>
        <div
            class='body-code-container'
            style={{ width: status.codeWidthPx }}
        >
            <div class='editor-title'>
                <span class='text-ellipsis'>
                    <span style='color:#999'>{status.example.title}: </span>
                    {status.example.name}
                </span>
                <span class='editor-btns'>
                    <i onclick={() => {
                        status.copyLink();
                        status.showInfo('Copy Link succeeded!');
                    }} title='Copy Link' class="ei-link"></i>
                    <i onclick={() => {
                        copy(status.editorCode);
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
            <span class='code-size'>{status.codeSize}</span>
        </div>
        <DragBar />
        <div class='body-result-container' 
            class:open={status.showResultBox}
        >
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

if (window.parent !== window) {
    window.addEventListener('DOMContentLoaded', () => {
        const data = { type: 'playground_loaded' };
        if (IS_DEV) {
            window.parent.postMessage(data, 'http://localhost:5174');
        } else {
            window.parent.postMessage(data);
        }
    });
}