/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 01:22:50
 * @Description: Coding something
 */


import { parseWebAlins } from 'alins-compiler-web';

parseWebAlins(``);

let count: number = 1;

<button
    $mount={document.body}
    onclick={() => {count++;}}
>click:{count}</button>;

