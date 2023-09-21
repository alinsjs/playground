function mockFetch () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: 'Bob', age: 10 });
        }, 2000);
    });
}

async function Component () {
    const data = await mockFetch();
    return <div>name={data.name}; age={data.age}</div>;
}

<Component $$App/>;