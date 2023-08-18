import { Examples } from 'src/store/examples';
import { useStatus } from 'src/store/store';

/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 07:42:32
 * @Description: Coding something
 *
 */


export function ExamplesList () {

    const status = useStatus();

    return <For data={Examples}>
        <div
            class={`example-item ${status.exampleIndex === $index ? 'active' : ''}`}
            onclick={status.switchExample($index)}
        >
            {$item.name}
        </div>
    </For>;
}