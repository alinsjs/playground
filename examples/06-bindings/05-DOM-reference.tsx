let ref: HTMLElement;
<button $$App 
    $dom:ref
    onclick={console.log(`Say ${ref!.textContent}`)}
>Hello!</button>