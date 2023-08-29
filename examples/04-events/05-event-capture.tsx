function click(from: string){
    console.log(`Click from ${from}!`);
}
<div $$App>
    <div onclick={click('parent')}>
        Normal: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick:capture={click('parent')}>
        With Capture: 
        <button onclick:capture={click('child')}>Click Me!</button>
    </div>
</div>