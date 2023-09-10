/*
 * @Author: chenzhongsheng
 * @Date: 2023-09-10 17:40:38
 * @Description: Coding something
 */

import { useStatus } from 'src/store/store';


export function IFrameRunner () {
    const status = useStatus();

    return <iframe
        src={status.iframeSrc}
        style={{
            height: status.resultPanelHeightCss,
            width: '100%',
            border: 'none',
        }}>
    </iframe>;
}