let count = 0;
function add () {
    count++;
}
<div $$App>
    <button onclick={count++}>count={count}</button>
    <button onclick={()=>count++}>count={count}</button>
    <button onclick={add}>count={count}</button>
    <button onclick={add()}>count={count}</button>
    <button onclick:add>count={count}</button>
</div>;