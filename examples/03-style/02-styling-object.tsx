let redNumber = 100;
let fontSize = 14;

<div $$App>
    <button onclick={() => {
        redNumber += 10;
        fontSize ++;
    }}>Modify Style</button>
    <div style={{
        color: `rgb(${redNumber}, 100, 100)`,
        fontSize,
        fontWeight: `bold`,
    }}>Alins is COOL!</div>
</div>;