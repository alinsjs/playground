function click(from: string){
    console.log(`Click from ${from}!`);
}
<div $$App>
    <div onclick={click('parent')}>
        Normal: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick={click('parent')}>
        StopPropagation With Alert: 
        <button onclick:stop={click('child')}>Click Me!</button>
    </div>
    <div onclick={click('parent')}>
        Only StopPropagation: 
        <button onclick:stop>Click Me!</button>
    </div>
</div>