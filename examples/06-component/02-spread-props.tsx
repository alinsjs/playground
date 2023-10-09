const data = {
    name: 'Alins',
    age: 0,
};

function Component ({ name, age }) {
    return <div>{name}: age={age}</div>;
}

<div $mount='#App'>
    <Component {...data}/>
    <button onclick={data.age++}>Modify</button>
</div>;