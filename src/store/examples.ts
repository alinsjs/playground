/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-18 21:52:44
 * @Description: Coding something
 */

export const Examples = [
    {
        name: 'Hello World',
        code: `const msg = 'World';
<div $parent='#App'>Hello {msg}!</div>;`
    },
    {
        name: 'Counter',
        code: `let count = 1;
<button
    $parent='#App'
    onclick={count++}
>click:{count}</button>;`
    },
    {
        name: 'test',
        code: 'console.log("Hello")'
    }
];