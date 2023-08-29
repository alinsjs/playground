let ref: HTMLElement;
<button $$App 
    $ref:ref
    onclick={console.log(`Say ${ref!.textContent}`)}
>Hello!</button>