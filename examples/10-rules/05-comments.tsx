let name1 = 1; // @static
name1 ++;
// static coment mark a variable as static data even if the value changes

let a = 1, b = 1, c = 1; // @static(a)
a++; b++; c++;

const name2 = 2; // @reactive
// reactive comment mark a variable as reactive data even if the value does not change

const d = 1, e = 1, f = 1; // @reactive(d)

const shallowReactive = { a: 1 }; // @shallow
// shallow comment mark a variable as shallow reactive data

<div $mount='#App'>Click output to view the compilation product</div>;