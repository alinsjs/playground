let classList = [];
let index = 0;

function addClass(e){
    classList.push(`a${index++}`);
    console.log(e.target.className);
}

<div $$App>
    <button 
        class={`a ${classList.join(' ')}`} 
        onclick={addClass}
    >Add Class</button>
</div>;