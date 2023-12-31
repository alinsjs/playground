function Component () {
    const list = [ { name: 'Bob', age: 10 }, { name: 'Alice', age: 11 } ];
    let age = 10;
    return <>
        <button onclick={
            list.unshift({ name: 'Tom', age: age++ })
        }>Add Person</button>
        <For data:list>
            <div>{$index + 1}: name={$item.name}; age={$item.age};</div>
        </For>
    </>;
    // You can specify the name of the $item and $index through the name attribute: item='person' index='i'
}
function Attribute () {
    const list = [ { name: 'Bob', age: 10 }, { name: 'Alice', age: 11 } ];
    let age = 10;
    return <>
        <button onclick={
            list.unshift({ name: 'Tom', age: age++ })
        }>Add Person</button>
        <div $for={list}>{$index + 1}: name={$item.name}; age={$item.age};</div>
    </>;
    // You can specify the name of the $item and $index through the name attribute: $item='person' $index='i'
}

<div $mount='#App'>
    <Component/>
    <Attribute/>
</div>;