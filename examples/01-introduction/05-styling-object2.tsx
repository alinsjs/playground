/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-21 22:43:18
 * @Description: Coding something
 */
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