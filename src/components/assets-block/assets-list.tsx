/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 07:42:32
 * @Description: Coding something
 */
const examples = [ {
    name: 'test',
    code: 'console.log("Hello")'
} ];

function switchExample (code: string) {
    console.log(code);
}

export function ExamplesList () {
    return <For data={examples}>
        <div onclick={() => switchExample($item.code)}>{$item.name}</div>
    </For>;
}