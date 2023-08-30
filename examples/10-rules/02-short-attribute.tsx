let msg = 'Hello';

function modifyMsg(e){
    msg += '!';
    console.log(e.target.outerHTML);
}

<button 
    $$App
    $msg 
    msg2:msg 
    onclick:modifyMsg>
        Modify Msg
</button>;
/* 
    $$App is short for $mount='#App'
    $msg is short for msg={msg}
    msg2:msg is short for msg2={msg}
*/