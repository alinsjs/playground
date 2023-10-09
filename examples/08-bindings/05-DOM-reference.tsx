let ref: HTMLElement;
<button $mount='#App' 
    $ref:ref
    onclick={console.log(`Say ${ref!.textContent}`)}
>Hello!</button>