const style = {
    color: '#f44',
    fontSize: '20px',
    fontWeight: 'bold',
};

<div $$App>
    <button onclick={() => {
        style.color = '#4f4';
        style.fontSize = '30px';
    }}>Modify Style</button>
    <div $style>Alins is COOL!</div>
</div>;