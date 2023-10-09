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

store.$watch('count', (newValue, oldValue) => {
    console.log('store.count change', newValue, oldValue);
});
store.$watch('countAdd2', (newValue, oldValue) => {
    console.log('store.countAdd2 change', newValue, oldValue);
});
store.$watch(() => store.countAddX(4), (newValue, oldValue) => {
    console.log('store.countAddX(4) change', newValue, oldValue);
});

<div $mount='#App'>
    <div>Count = {store.count}</div>
    <div>countAdd2 = {store.countAdd2}</div>
    <div>countAddX = {store.countAddX(4)}</div>
    <div>getCountAddX = {store.getCountAddX}</div>
    <button onclick={store.increase}>Increase Count</button>
</div>;