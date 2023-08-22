const persion = {
    name: 'alins',
    age: 1,
};

function modifyInfo () {
    persion.name += '!';
    persion.age ++;
}

<div $$App>
    <div>name={persion.name}; age={persion.age}</div>
    <button onclick:modifyInfo>Modify Info</button>
</div>;
// onclick:modifyInfo is short for onclick={modifyInfo}