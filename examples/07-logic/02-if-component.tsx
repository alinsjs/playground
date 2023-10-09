function Component () {
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
function Attribute () {
    let count: number = 0;
    const add = () => {count++};
    return <>
        <div $if={count > 3}>Now count > 3</div>
        <button $elseif={count > 2} onclick:add>continue[count>2]</button>
        <button $else onclick:add>count={count}</button>
    </>;
}
function MixUse () {
    let count: number = 0;
    const add = () => {count++};
    return <>
        <div $if={count > 3}>Now count > 3</div>
        <ElseIf data={count > 2}>
            <button onclick:add>continue[count>2]</button>
        </ElseIf>
        <button $else onclick:add>count={count}</button>
    </>;
}
<div $mount='#App'>
    <Component/>
    <Attribute/>
    <MixUse/>
</div>;
