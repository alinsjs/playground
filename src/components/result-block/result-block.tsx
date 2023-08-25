/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 21:22:40
 * @Description: Coding <something></something>
 */

import { useStatus } from 'src/store/store';

export function ResultBlock () {

    const status = useStatus();

    const isActive = (i: number) => status.resultNaviIndex === i;

    status.$watch('resultNaviIndex', v => {
        if (v === 0) {
            setTimeout(() => {
                status.runCodeResult();
            });
        }
    });
    return <div>
        <div class='result-header'>
            <span class={`${isActive(0) ? 'active' : ''}`}
                onclick={status.resultNaviIndex = 0}>Result</span>
            <span class={`${isActive(1) ? 'active' : ''}`}
                onclick={status.resultNaviIndex = 1}>Output</span>
        </div>
        <If data={isActive(0)}>
            <div id='App' style={{height: status.resultPanelHeightCss}}></div>
        </If>
        <ElseIf data={isActive(1)}>
            <div class='highlight-container' 
                class:has-console={status.console.show}
                style={{
                    color: status.syntaxError ? '#f44' : 'inherit',
                    height: status.resultPanelHeightCss
                }} 
                $html={status.outputCode}></div>
        </ElseIf>
    </div>;
}