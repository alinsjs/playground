function mockFetch(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({name: 'Bob', age: 10})
        }, 2000)
    });
}

function Componnt(){
    // You can specify the name of the $data through the name attribute: name='persion'
    return <Async data={mockFetch()}>
        <div>name={$data.name}; age={$data.age}</div>
    </Async>
}

<Componnt $$App/>;