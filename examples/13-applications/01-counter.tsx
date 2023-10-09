let count = 1;
<div $mount='#App'>
    <input type="number" value={count} />
    <button onclick={count++}>
        click:{count}
    </button>
    <div>count * 2 = {count * 2}</div>
</div>