let ref: HTMLElement;
function mounted (dom) {
    const parent = dom.parentElement;
    console.log(`mounted: parent=${parent.tagName}; 
        mount parent=${parent.parentElement?.tagName}`);
    return (dom) => {
        console.log(`removed: parent=${dom.parentElement}`);
    };
}

<div $mount='#App'>
    <div $ref:ref $mounted:mounted>Hello World!</div>
    <button onclick={ref.remove()}>Remove DOM</button>
</div>;