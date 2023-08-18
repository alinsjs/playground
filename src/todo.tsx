/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 01:35:35
 * @Description: Coding something
 */
import { Item } from './todo-item';

function List () {
    const list = [ 'todo1' ];
    const value = '';
    return <div>
        <div>
            <input type="text" value={value}/>
            <button onclick={() => { list.push(value); }}>add</button>
        </div>
        <For data={list}>
            <Item item={$item} index={$index}>
                <button onclick={() => {list.splice($index, 1);}}>delete</button>
            </Item>
        </For>
    </div>;
}
<List $parent={document.body}/>;