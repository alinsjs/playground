const person = {
    name: 'alins',
    age: 1,
};

function modifyInfo () {
    person.name += '!';
    person.age ++;
}

// You can also use document.getElementById('App').appendChild(<button></button>) instead
<div $mount='#App'>
    <div>name={person.name}; age={person.age}</div>
    <button onclick:modifyInfo>Modify Info</button>
</div>;
// onclick:modifyInfo is short for onclick={modifyInfo}