// @shallow
let person = {
    name: 'alins',
    age: 1,
};

// Or use `shallow: person = {}`
// https://alinsjs.github.io/docs/guide/rule.html

function modifyInfo () {
    person = {
        name: person.name + '!',
        age: person.age + 1
    };
}
function modifyInfo2 () {
    person.name += '!';
    person.age ++;
}
<div $mount='#App'>
    <div>name={person.name}; age={person.age}</div>
    <button onclick:modifyInfo>Modify Info[Work]</button>
    <button onclick:modifyInfo2>Modify Info[Not Work]</button>
</div>;