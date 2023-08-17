/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-17 08:13:08
 * @Description: Coding something
 */
import { useStatus } from '../../store/store';

export function DragBar () {

    const status = useStatus();

    let _isDown = false;

    function mouseMove (e: MouseEvent) {
        if (_isDown) {
            console.log(e);
            status.onDragSize(e.clientX);
        }
    }

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', () => {
        if (_isDown) {
            _isDown = false;
        }
    });

    return <div
        class='drag-bar'
        onmousedown={() => {_isDown = true;}}
        onmouseup={() => {_isDown = false;}}
        onmousemove={mouseMove}
    ></div>;
}
