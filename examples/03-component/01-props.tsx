let count = 0;

<div $$App>
    <Component $count/>
    <button onclick={count++}>Increse</button>
</div>;

function Component ({ count }) {
    return <div>count={count}</div>;
}