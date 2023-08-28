/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 21:22:40
 * @Description: Coding <something></something>
 */

import { useStatus } from 'src/store/store';

export function ConsoleBlock () {

    const status = useStatus();

    const origin = console.log;

    // let _inLog = false;
    console.log = (...args) => {
        // todo 无限引用的问题
        // _inLog = true;
        // status.log(args);
        origin.apply(console, args);
    }

    return <div class='console-block' 
        style={{height: status.consoleHeightPX}}>
        <If data={status.console.list.length === 0}>
            <div>Console is empty.</div>
        </If>
        <Else>
            <For data={status.console.list}>
                <div class='console-item'>{$item}</div>
            </For>
        </Else>
    </div>;
}