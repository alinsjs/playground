let selected = 'Apple';

let fruitList = ['Apple', 'Banana', 'Orange'];

<div $mount='#App'>
    <select value={selected}>
        <For data={fruitList}>
            <option>{$item}</option>
        </For>
    </select>
    <div>Selected Fruit: {selected}</div>
</div>