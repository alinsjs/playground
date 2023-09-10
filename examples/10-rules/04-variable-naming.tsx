let _name = 1;
_name ++;
// Variables starting with _ are compiled as static data even if the value changes

let $name = 2;
// Variables starting with $ are compiled into reactive data even if the value does not change

const $$shallowReactive = {a:1};
// Variables starting with $$ are compiled into shallow reactive data

<div $$App>Click output to view the compilation product</div>