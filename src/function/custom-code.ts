/*
 * @Author: chenzhongsheng
 * @Date: 2023-09-01 21:55:34
 * @Description: Coding something
 */
import { decompressCode, getUrlParam } from 'src/utils';
import Examples from '../store/examples';

function initCustomCode () {
    const code = getUrlParam('code');

    if (!code) {
        Examples.push({
            name: 'Free Code',
            code: 'console.log("Hello Alins!")',
            'title': 'Custom',
            'head': 'Custom'
        });
        return;
    }

    const name = getUrlParam('name', 'Custom Code');

    Examples.unshift({
        name,
        'code': decompressCode(code),
        'title': 'Custom',
        'head': 'Custom'
    });
}

initCustomCode();