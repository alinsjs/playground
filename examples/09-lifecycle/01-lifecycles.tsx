let ref: HTMLElement;
function created(dom){
    console.log(`created: parent=${dom.parentElement?.tagName}`)
}
function appended(dom){
    const parent = dom.parentElement;
    console.log(`appended: parent=${parent.tagName}; 
        mount parent=${parent.parentElement?.tagName}`)
}
function mounted(dom){
    const parent = dom.parentElement;
    console.log(`mounted: parent=${parent.tagName}; 
        mount parent=${parent.parentElement?.tagName}`)
}
function removed(dom){
    console.log(`removed: parent=${dom.parentElement}`)
}

<div $$App>
    <div
        $ref:ref
        $created:created
        $appended:appended
        $mounted:mounted
        $removed:removed
    >Hello World!</div>
    <button onclick={ref.remove()}>Remove DOM</button>
</div>;