let redNumber = 100;
let fontSize = 14;

<div $$App>
    <button onclick={() => {
        redNumber += 10;
        fontSize ++;
    }}>Modify Style</button>
    <div style={`
        color: rgb(${redNumber}, 100, 100); 
        font-size: ${fontSize}px;
        font-weight: bold;
    `}>Alins is COOL!</div>
</div>;
