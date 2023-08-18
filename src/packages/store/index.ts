/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-16 12:27:17
 * @Description: Coding something
 */

import { react, watch } from 'alins-reactive';

export interface IStoreOptions<
    State extends Record<string, any>,
    Action = Record<string, (this: State, ...args: any[])=>any>,
    Getter = Record<string, (this: State)=>any>,
> {
    id?: string;
    state: ()=>State;
    actions?: Action;
    getters?: Getter;
}

export type IStore<
    State extends Record<string, any>,
    Action = Record<string, (this: State, ...args: any[])=>any>,
    Getter = Record<string, (this: State)=>any>,
> = {
    [key in keyof State]: State[key];
} & {
    [key in keyof Action]: Action[key];
} & {
    // @ts-ignore
    [key in keyof Getter]: ReturnType<Getter[key]>;
} & {
    $watch<T extends keyof State>(T: (keyof State), listener: (nv: State[T], ov: State[T])=>void): void;
    $watch<T extends keyof Getter>(T: (keyof Getter), listener: (nv: Getter[T], ov: Getter[T])=>void): void;
    $watch<T>(T: (()=>T), listener: (nv: T, ov: T)=>void): void;
}

let storeId = 0;

const storeMap: Record<string, IStore<Record<string, any>>> = {};

export function getStore<T extends Record<string, any> = any, A = any, G = any> (id: string): IStore<T, A, G>|null {
    // @ts-ignore
    return storeMap[id] || null;
}

export function createStore<
    State extends Record<string, any>,
    Action = Record<string, (this: State, ...args: any[])=>any>,
    Getter = Record<string, (this: State)=>any>,
> ({
    id,
    state,
    actions,
    getters,
}: IStoreOptions<State, Action, Getter>): () => IStore<State, Action, Getter> {
    if (!id) id = `store_${storeId++}`;
    return () => {
        if (!id) {throw new Error('Id is Required');};
        let store: IStore<State, Action, Getter> = storeMap[id] as IStore<State, Action, Getter>;
        if (!store) {
            // @ts-ignore
            store = react(state());
            if (actions) {
                for (const k in actions) {
                    // @ts-ignore
                    store[k] = actions[k].bind(store);
                }
            }
            if (getters) {
                for (const k in getters) {
                    Object.defineProperty(store, k, {
                        // @ts-ignore
                        get () {return getters[k].call(store);},
                        set () {throw new Error('Cannot set getters');}
                    });
                }
            }
            // @ts-ignore
            storeMap[id] = store;

            store.$watch = (v: any, listener: (v1: any, v2: any) => void) => {
                if (typeof v === 'string') {
                    const prop = v;
                    v = () => store[prop];
                }
                return watch(v, listener);
            };
        }
        return store;
    };
}
