let a = 1, b = 2, c = '';

<div $$App>
    <div>
        <input type='number' value={a} min='0' max='10'/>
        <input type='range' value={a} min='0' max='10'/>
    </div>
    <div>
        <input type='number' value={b} min='0' max='10'/>
        <input type='range' value={b} min='0' max='10'/>
    </div>
    <div>
        <input type='number' value:number={c} min='0' max='10'/>
        <input type='range' value:number={c} min='0' max='10'/>
    </div>
    <div> a + b + c = {a + b + c}</div>
</div>