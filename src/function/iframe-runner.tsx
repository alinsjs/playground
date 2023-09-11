/*
 * @Author: chenzhongsheng
 * @Date: 2023-09-10 17:40:38
 * @Description: Coding something
 */

import { useStatus } from 'src/store/store';
import eveit from 'eveit';

export function IFrameRunner () {
    const status = useStatus();
    let iframe: HTMLIFrameElement;

    eveit.on('refresh-iframe', () => {
        iframe.contentWindow?.location.reload();
    });

    window.addEventListener('message', (e)=>{
        const data = e.data;
        if(data.type === 'iframe_log'){
            console.log(...data.data);
        }else if(data.type === 'iframe_clear_log'){
            console.clear();
        }
    });

    const mouseMove = (e: any)=>{
        const rect = iframe.getBoundingClientRect()
        eveit.emit('mousemove', {
            clientX: e.clientX + rect.left,
            clientY: e.clientY + rect.top,
        });
    };
    const mouseUp = ()=>{
        eveit.emit('mouseup');
    }   

    function initDragEvent(){
        const _window = iframe.contentWindow;
        _window?.removeEventListener('mousemove', mouseMove);
        _window?.removeEventListener('mouseup', mouseUp);
        _window?.addEventListener('mousemove', mouseMove);
        _window?.addEventListener('mouseup', mouseUp);
    }

    status.$watch('exampleIndex', ()=>{
        setTimeout(()=>{
            initDragEvent();
        }, 500);
    })

    return <iframe
        $ref:iframe
        $mounted={initDragEvent}
        src={status.iframeSrc}
        style={{
            height: status.resultPanelHeightCss,
            width: '100%',
            border: 'none',
        }}>
    </iframe>;
}