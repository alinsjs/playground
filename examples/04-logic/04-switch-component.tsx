function Main () {
    let count = 0;
    const add = () => {count++;};
    return <Switch data:count>
        <Case data={[1,2]}>
            <button onclick:add>Count is 1 or 2:{count}</button>
        </Case>
        <Case data={3}>
            <button onclick:add>Count is 3[count=3]</button>
        </Case>
        <Case data={4}>
            <button onclick:add>Now Count = 4</button>
        </Case>
        <Default>
            <button onclick:add>Other Count:{count}</button>
        </Default>
    </Switch>;
}
<Main $$App/>;