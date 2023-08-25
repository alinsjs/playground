/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 21:22:40
 * @Description: Coding <something></something>
 */

import { useStatus } from 'src/store/store';

export function ConsoleBlock () {

    const $status = useStatus();

    let list = [];
    
    const origin = console.log;

    console.log = (...args) => {
        $status.log(args);
        list.push(args.join(''))
        origin.apply(console, args);
    }

    return <div class='console-block' 
            style={{height: $status.consoleHeightPX}}
            $show={$status.console.show}>
        <div class='console-title'></div>
        <For data={$status.console.list}>
            <div class='console-item'>{$item}</div>
        </For>
    </div>;
}