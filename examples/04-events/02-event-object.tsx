let x = 0, y = 0;
function onclick (e) {
    x = e.clientX;
    y = e.clientY;
}
<div $$App>
    <button onclick={(e)=>{
        x = e.clientX;
        y = e.clientY;
    }}>Button 1</button>
    <button onclick={onclick}>Button 2</button>
    <div>ClientX={x}; ClientY={y}</div>
</div>;