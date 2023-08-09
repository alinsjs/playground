/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 01:22:50
 * @Description: Coding something
 */
let count: number = 1;

<button
    $parent={document.body}
    onclick={() => {count++;}}
>click:{count}</button>;
