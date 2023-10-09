function click () {
    console.log('Clicked, try again!');
}
<div $mount='#App'>
    <div>
        Normal:
        <button onclick={click}>Click Me!</button>
    </div>
    <div>
        Only Once:
        <button onclick:once={click}>Click Me!</button>
    </div>
</div>;