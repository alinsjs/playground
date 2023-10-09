// Variables decorated with a label '_:' are compiled as static data even if the value changes
_: count = 1;
count ++;

// Variables decorated with a label '$:' are compiled into reactive data
$: count2 = 2;

// Variables decorated with a label 'shallow:' or '$$:' are compiled into shallow reactive data
shallow: data = { a: 1 };
$$: data2 = { a: 1 };

<div $mount='#App'>Click output to view the compilation product</div>;