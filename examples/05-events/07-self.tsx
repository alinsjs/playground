function click (from: string) {
    console.log(`Click from ${from}!`);
}
<div $mount='#App'>
    <div onclick={click('parent')}>
        Normal:
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick:self={click('parent')}>
        With Self:
        <button onclick={click('child')}>Click Me!</button>
    </div>
</div>;
