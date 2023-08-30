const classObject = {
    a: true,
    a1: false,
    a2: true
}

function toggleClass(e){
    classObject.a1 = !classObject.a1;
    classObject.a2 = !classObject.a2;
    console.log(e.target.className)
}

<div $$App>
    <button class={classObject}
        onclick={toggleClass}>
        Toggle Class
    </button>
</div>;