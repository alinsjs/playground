/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-18 08:48:10
 * @Description: Coding something
 */
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
