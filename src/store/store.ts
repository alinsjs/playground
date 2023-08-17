/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-16 16:24:25
 * @Description: Coding something
 */
import { createStore } from 'alins-store';

export const useStatus = createStore({
    state: () => {
        const codeEditorWidth = window.innerWidth * 0.5;
        return {
            codeEditorWidth,
            codeEditorLeft: 0,
        };
    },
    actions: {
        onDragSize (x: number) {
            this.codeEditorWidth = x - this.codeEditorLeft;
            console.log(this.codeEditorWidth);
        }
    },
    getters: {
        codeWidth: () => `${useStatus().codeEditorWidth}px`
    }
});