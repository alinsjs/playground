function Main () {
    let count: number = 0;
    const add = () => {count++};
    if (count > 3) {
        return <div>Now count > 3</div>;
    } else if (count > 2){
        return <button onclick:add>continue[count>2]</button>;
    }
    return <button onclick:add>count={count}</button>
}
<Main $mount='#App'/>;