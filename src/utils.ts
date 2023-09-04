/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-18 08:48:10
 * @Description: Coding something
 */

import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';

export function debounce<T extends any[], Return> (fn: (...args: T)=>Return, time = 1000) {
    let t: any = null;
    return function (...args: T) {
        if (t != null) {
            clearTimeout(t);
        }
        t = setTimeout(() => {
            fn.apply(null, args);
        }, time);
    };
}

export function compressCode (code: string) {
    return compressToEncodedURIComponent(code);
}
export function decompressCode (code: string) {
    return decompressFromEncodedURIComponent(code);
}


export function copy (str: string) {
    let input = document.getElementById('_copy_input_') as any;
    if (!input) {
        input = document.createElement('textarea');
        input.setAttribute('type', 'text');
        input.setAttribute(
            'style',
            'height:10px;position:fixed;top:-100px;opacity:0;'
        );
        input.setAttribute('id', '_copy_input_');
        document.body.appendChild(input);
    }
    input.value = str;
    input.select();

    try {
        if (document.execCommand('Copy')) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
};


export function getUrlParam (name: string, defVal?: string) {
    return parseUrlParam(window.location.search, name, defVal);
}

export function parseUrlParam (search: string, name: string, defVal?: string) {
    if (typeof name !== 'undefined') {
        if (search !== '') {
            const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            const r = search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);
            }
        }
        return (typeof defVal !== 'undefined') ? defVal : null;
    }
    if (search === '') { return {}; }
    const arr = search.substr(1).split('&');
    const param: any = {};
    arr.forEach(item => {
        const pArr = item.split('=');
        param[pArr[0]] = pArr[1];
    });
    return param;
}