/*
 * @Author: chenzhongsheng
 * @Date: 2023-09-01 21:55:34
 * @Description: Coding something
 */
import { decompressCode, getUrlParam } from 'src/utils';

export function initCustomCode () {
    const code = getUrlParam('code');

    if (!code) return null;

    const name = getUrlParam('name', 'Custom Code');

    return {
        name,
        'code': decompressCode(code),
        'title': 'Custom',
        'head': 'Custom'
    };
}