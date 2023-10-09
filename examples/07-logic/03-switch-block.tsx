function Main () {
    let count = 0;
    const add = () => {count++;};
    switch (count) {
        case 1:
        case 2:
            return <button onclick:add>Count is 1 or 2:{count}</button>;
        case 3: return <button onclick:add>Count is 3[count=3]</button>;
        case 4: return <button onclick:add>Now Count = 4</button>;
    }
    return <button onclick:add>Other Count:{count}</button>;
}
<Main $mount='#App'/>;