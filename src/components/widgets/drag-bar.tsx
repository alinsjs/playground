/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-17 08:13:08
 * @Description: Coding something
 */
import { useStatus } from 'src/store/store';

export function DragBar (props: any) {
    console.log(props)
    const pp = {type: 'console'}

    console.log(props)

    const onDragSize = pp.type === 'code' ? 'onDragSize': 'onDragConsoleSize';
    
    const status = useStatus();

    let dragActive = pp.type === 'code' ? status.dragActive: status.console.dragActive; 
        set: (b:boolean)=>{
            if(pp.type === 'code'){
                status.dragActive = b;
            }else{
                status.console.dragActive = b;
            }
        }

    let _isDown = false;

    function setDown (b: boolean) {
        _isDown = b;
        dragActive = b;
    }

    function mouseMove (e: MouseEvent) {
        if (_isDown) {
            status[onDragSize](e[(pp.type === 'code')?'clientX':'clientY']);
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
        class={{
            'drag-bar': true,
            active: dragActive,
            horizen: pp.type === 'console',
        }}
        onmousedown={() => {setDown(true);}}
        onmouseup={() => {setDown(false);}}
        onmousemove={mouseMove}
    ></div>;
}
