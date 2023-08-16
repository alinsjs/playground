/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-16 16:24:25
 * @Description: Coding something
 */
import { createStore } from 'alins-store';

export const useStatus = createStore({
    state: () => {
        return { a: 1 };
    },
    actions: {
        setA (x: number) {
            this.a = x;
        },

        getA (x: number) {
            return this.a + x;
        }
    },
    getters: {
        aa () {
            return this.a + 1;
        }
    }
});

export const aaa = {};