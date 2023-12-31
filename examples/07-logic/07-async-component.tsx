function mockFetch () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: 'Bob', age: 10 });
        }, 2000);
    });
}

function Component () {
    // You can specify the name of the $data through the name attribute: name='person'
    return <Async data={mockFetch()}>
        <div>name={$data.name}; age={$data.age}</div>
    </Async>;
}
function Attribute () {
    // You can specify the name of the $data through the name attribute: $name='person'
    return <div $async={mockFetch()}>name={$data.name}; age={$data.age}</div>;
}

<div $mount='#App'>
    <Component/>
    <Attribute/>
</div>;
