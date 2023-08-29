function click(){
    console.log('Prevent checkbox checked!');
}
<div $$App>
    Normal: <input type='checkbox'/><br/>
    Prevent And Alert: <input onclick:prevent={click} type='checkbox'/><br/>
    Only Prevent: <input onclick:prevent type='checkbox'/>
</div>