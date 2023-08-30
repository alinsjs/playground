let src: string = 'https://shiyix.cn/images/alins.png';
const altName: string = 'Alins';

<div $mount='#App'>
    <img src={src} alt={`${altName} logo`} title={altName}/>
    <button onclick={src = ''}>Clear Src</button>
</div>