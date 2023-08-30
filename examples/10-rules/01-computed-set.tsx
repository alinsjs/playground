let a = 1;

let b = a + 1; set: v => a = v + 1;

<div $$App>
    <button onclick={b++}>Modify B</button>
    <div>a={a}; b={b}</div>
</div>