/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 21:22:40
 * @Description: Coding <something></something>
 */

import { useStatus } from 'src/store/store';

export function ResultBlock () {

    const status = useStatus();

    let naviIndex: number = 0;

    const isActive = (i: number) => naviIndex === i;

    const b = !isActive(1);

    window.cc = () => naviIndex = 0;


    return <>
        <div class='result-header'>
            <span class={{ active: () => isActive(0) }}>Result</span>
            <span class={{ active: () => isActive(1) }}>Output</span>
        </div>
        <div class='highlight-container' $html={status.showCode}></div>
    </>;
}