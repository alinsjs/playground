function Component () {
    const list = [ { name: 'Bob', age: 10 }, { name: 'Alice', age: 11 } ];
    let age = 10;
    return <>
        <button onclick={
            list.unshift({ name: 'Tom', age: age++ })
        }>Add Person</button>
        {list.map((item, index) => (
            <div>{index + 1}: name={item.name}; age={item.age};</div>
        ))}
    </>;
}

<Component $mount='#App'/>;