/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 01:17:26
 * @Description: Coding something
 */
import './counter';
import './todo';

import { parseWebAlins } from 'alins-compiler-web';

console.log(parseWebAlins(`let count = 1;

<button
    $parent={document.body}
    onclick={() => {count++;}}
>click:{count}</button>;`));