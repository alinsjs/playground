function click(from: string){
    // The pure decorator is used to keep event expressions from being compiled
    return ()=>{
        alert(`Click from ${from}!`);
    }
}
<div $$App>
    <div>
        Normal [Won't Work]: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div>
        With Pure: 
        <button onclick:pure={click('child')}>Click Me!</button>
    </div>
</div>