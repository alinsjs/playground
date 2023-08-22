function Main () {
    let count = 0;
    if(count > 2){
        return <div>Now count > 2</div>;
    }
    return <button onclick={count++}>count={count}</button>
}
<Main $$App/>;