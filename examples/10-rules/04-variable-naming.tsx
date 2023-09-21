let _name = 1;
_name ++;
// Variables starting with _ are compiled as static data even if the value changes

_: name = 1;
name ++;

const $name = 2;
// Variables starting with $ are compiled into reactive data even if the value does not change

const $$shallowReactive = { a: 1 };
// Variables starting with $$ are compiled into shallow reactive data

$: name2 = 2;

<div $$App>Click output to view the compilation product</div>;