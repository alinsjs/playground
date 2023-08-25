/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-24 21:40:34
 * @Description: Coding something
 */
let selected = 'Apple';

let fruitList = ['Apple', 'Banana', 'Orange'];

<div $$App>
    <select value={selected}>
        <For data={fruitList}>
            <option>{$item}</option>
        </For>
    </select>
    <div>Selected Fruit: {selected}</div>
</div>