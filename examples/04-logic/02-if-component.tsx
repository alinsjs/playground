function Main () {
    let count: number = 0;
    const add = () => {count++};
    return <>
        <If data={count > 3}>
            <div>Now count > 3</div>
        </If>
        <ElseIf data={count > 2}>
            <button onclick:add>continue[count>2]</button>
        </ElseIf>
        <Else>
            <button onclick:add>count={count}</button>
        </Else>
    </>;
}
<Main $$App/>;