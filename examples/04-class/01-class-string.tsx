/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-30 06:28:03
 * @Description: Coding something
 */
const classList = [];
let index = 0;

function addClass (e) {
    classList.push(`a${index++}`);
    console.log(e.target.className);
}

<div $mount='#App'>
    <button
        class={`a ${classList.join(' ')}`}
        onclick={addClass}
    >Add Class</button>
</div>;