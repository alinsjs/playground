function Component () {
    let count = 0;
    const add = () => {count++;};
    return <Switch data:count>
        <Case data={[ 1, 2 ]}>
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
function Attribute () {
    let count = 0;
    const add = () => {count++;};
    return <span $switch={count}>
        <button $case={[ 1, 2 ]} onclick:add>Count is 1 or 2:{count}</button>
        <button $case={3} onclick:add>Count is 3[count=3]</button>
        <button $case={4} onclick:add>Now Count = 4</button>
        <button $default onclick:add>Other Count:{count}</button>
    </span>;
}
function MixUse () {
    let count = 0;
    const add = () => {count++;};
    return <span $switch={count}>
        <Case data={[ 1, 2 ]}>
            <button onclick:add>Count is 1 or 2:{count}</button>
        </Case>
        <button $case={3} onclick:add>Count is 3[count=3]</button>
        <Case data={4}>
            <button onclick:add>Now Count = 4</button>
        </Case>
        <button $default onclick:add>Other Count:{count}</button>
    </span>;
}

<div $mount='#App'>
    <Component/>
    <Attribute/>
    <MixUse/>
</div>;
