let ref: HTMLElement;
<button $$App 
    $dom:ref
    onclick={alert(`Say ${ref!.textContent}`)}
>Hello!</button>