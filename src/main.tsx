/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 01:17:26
 * @Description: Coding something
 */
// import './counter';
// import './todo';

// import { parseWebAlins } from 'alins-compiler-web';
// import {initMonaco} from './monaco';
import { ExamplesList } from './components/assets-block/assets-list';
import { Editor } from './components/code-block/code-editor';
import './styles/index.less';

// initMonaco();

// console.log(parseWebAlins(`let count = 1;

// <button
//     $parent={document.body}
//     onclick={() => {count++;}}
// >click:{count}</button>;`));


<div
    $parent={document.body}
    class='main-container'>
    <div class='title-container'>title</div>
    <div class='body-container'>
        <div class='body-assets-container'>
            <ExamplesList/>
        </div>
        <div class='body-code-container'>
            <Editor />
        </div>
        <div class='body-result-container'>

        </div>
    </div>
    <div class='status-container'>status</div>
</div>;
