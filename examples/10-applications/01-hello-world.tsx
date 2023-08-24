/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-23 09:11:19
 * @Description: Coding something
 */
let count = 1;
const add = ()=>{
    count++
}
<div $$App>
    <button onclick={count++}></button>
    <button onclick={()=>count++}></button>
    <button onclick={add}></button>
    <button onclick={add()}></button>
</div>;
// $$App is short for $parennt='#App'
// Or use `document.getElementById('App').appendChild(<div/>)`