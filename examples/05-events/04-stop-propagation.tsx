function click (from: string) {
    console.log(`Click from ${from}!`);
}
<div $mount='#App'>
    <div onclick={click('parent')}>
        Normal:
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick={click('parent')}>
        StopPropagation With Log:
        <button onclick:stop={click('child')}>Click Me!</button>
    </div>
    <div onclick={click('parent')}>
        Only StopPropagation:
        <button onclick:stop>Click Me!</button>
    </div>
</div>;