import { createStore } from 'alins';
const useStore = createStore({
    state: () => ({
        count: 0,
    }),
    actions: {
        increase () {
            this.count ++;
        },
        countAddX (x: number) {
            return this.count + x;
        }
    },
    getters: {
        countAdd2 () {
            return this.count + 2;
        },
        getCountAddX () {
            return this.countAddX(3);
        }
    }
});

const store = useStore();

<div $$App>
    <div>Count = {store.count}</div>
    <div>countAdd2 = {store.countAdd2}</div>
    <div>countAddX = {store.countAddX(4)}</div>
    <div>getCountAddX = {store.getCountAddX}</div>
    <button onclick={store.increase}>Increase Count</button>
</div>;