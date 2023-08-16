/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-16 12:27:17
 * @Description: Coding something
 */

import { react, watch, observe } from 'alins-reactive';
window._observe = observe;
window._watch = watch;
export interface IStoreOptions<T> {
    id?: string;
    state: ()=>T;
    actions?: Record<string, (this: T, ...args: any[])=>any>;
    getters?: Record<string, (this: T)=>any>;
}

export interface IStore<T=any> {

}

let storeId = 0;

const storeMap: Record<string, IStore> = {};

export function getStore (id: string) {
    return storeMap[id] || null;
}

export function createStore<T> ({
    id,
    state,
    actions,
    getters,
}: IStoreOptions<T>): () => any {
    if (!id) id = `store_${storeId++}`;
    return () => {
        if (!id) return null;
        let store: IStore<T> = storeMap[id];

        if (!store) {
            store = react(state());
            for (const k in actions) {
                // @ts-ignore
                store[k] = actions[k].bind(store);
            }
            for (const k in getters) {
                Object.defineProperty(store, k, {
                    // @ts-ignore
                    get () {return getters[k].call(store);},
                    set () {throw new Error('Cannot set getters');}
                });
            }
            storeMap[id] = store;
        }

        return store;
    };
}
