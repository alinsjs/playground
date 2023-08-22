function Main () {
    let count = 0;
    return <>
        <If data={count>2}>
            <div>Now count > 2</div>
        </If>
        <Else>
            <button onclick={count++}>count={count}</button>
        </Else>
    </>;
}
<Main $$App/>;