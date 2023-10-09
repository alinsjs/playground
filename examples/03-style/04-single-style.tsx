let redNumber = 100;
let fontSize = 14;

<div $mount='#App'>
    <button onclick={() => {
        redNumber += 10;
        fontSize ++;
    }}>Modify Style</button>
    <div style='font-weight: bold'
        style:color={`rgb(${redNumber}, 100, 100)`}
        style:fontSize={`${fontSize}px`}
    >Alins is COOL!</div>
</div>;
// add style and class 章节