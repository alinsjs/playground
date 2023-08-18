/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-17 08:13:08
 * @Description: Coding something
 */
import { useStatus } from 'src/store/store';

export function DragBar () {

    const status = useStatus();

    let _isDown = false;

    function setDown (b: boolean) {
        _isDown = b;
        status.dragActive = b;
    }

    function mouseMove (e: MouseEvent) {
        if (_isDown) {
            status.onDragSize(e.clientX);
        }
    }

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', () => {
        if (_isDown) {
            _isDown = false;
            setDown(false);
        }
    });

    return <div
        class={`drag-bar ${status.dragActive ? 'active' : ''}`}
        onmousedown={() => {setDown(true);}}
        onmouseup={() => {setDown(false);}}
        onmousemove={mouseMove}
    ></div>;
}
