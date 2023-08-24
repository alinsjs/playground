function click(){
    alert('Clicked, try again!');
}
<div $$App>
    <div>
        Normal: 
        <button onclick={click}>Click Me!</button>
    </div>
    <div>
        Only Once: 
        <button onclick:once={click}>Click Me!</button>
    </div>
</div>