function click(from: string){
    alert(`Click from ${from}!`);
}
<div $$App>
    <div onclick={click('parent')}>
        Normal: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick:self={click('parent')}>
        With Self: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
</div>
