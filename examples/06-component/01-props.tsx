let count = 0;

<div $mount='#App'>
    <Component $count/>
    <button onclick={count++}>Increse</button>
</div>;

function Component ({ count }) {
    return <div>count={count}</div>;
}