let count = 1;

let countAdd2 = count + 2;

let countAdd3 = countAdd2 + 1;

function countMultiply2 () {
    return count * 2
}

<div $$App>
    <button onclick={count++}>
        click:{count}
    </button>
    <div>count + 2 = {countAdd2}</div>
    <div>count + 3 = {countAdd3}</div>
    <div>count * 2 = {countMultiply2}</div>
    <div>count * 2 = {countMultiply2()}</div>
</div>