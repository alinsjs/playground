let count = 0;
function add () {
    count++;
}
<div $mount='#App'>
    <button onclick={count++}>count={count}</button>
    <button onclick={() => count++}>count={count}</button>
    <button onclick={add}>count={count}</button>
    <button onclick={add()}>count={count}</button>
    <button onclick:add>count={count}</button>
</div>;
// onclick:add is short for onclick={add}