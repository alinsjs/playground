function Component () {
    let show: boolean = false;
    return <>
        <button onclick={show = !show}>Toggle Show</button>
        <Show data:show>
            <div>Show Element 1</div>
        </Show>
        <div $show:show>Show Element 2</div>
    </>;
}

<Component $$App/>;