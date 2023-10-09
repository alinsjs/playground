function click () {
    console.log('Prevent checkbox checked!');
}
<div $mount='#App'>
    Normal: <input type='checkbox'/><br/>
    Prevent And Log: <input onclick:prevent={click} type='checkbox'/><br/>
    Only Prevent: <input onclick:prevent type='checkbox'/>
</div>;