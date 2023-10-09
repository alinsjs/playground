let a1Flag = false;
let a2Count = 0;

function toggleClass(e){
    a1Flag = !a1Flag;
    a2Count ++;
    console.log(e.target.className)
}

<div $mount='#App'>
    <button class='a'
        class:a1={a1Flag}
        class:a2={a2Count % 2 === 0}
        onclick={toggleClass}>
        Toggle Class
    </button>
</div>;