function mockFetch () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: 'Bob', age: 10 });
        }, 2000);
    });
}

function Component () {
    // You can specify the name of the $data through the name attribute: name='persion'
    return <Async data={mockFetch()}>
        <div>name={$data.name}; age={$data.age}</div>
    </Async>;
}
function Attribute () {
    // You can specify the name of the $data through the name attribute: $name='persion'
    return <div $async={mockFetch()}>name={$data.name}; age={$data.age}</div>;
}

<div $$App>
    <Component/>
    <Attribute/>
</div>;
