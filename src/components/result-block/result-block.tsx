/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-15 21:22:40
 * @Description: Coding <something></something>
 */

export function ResultBlock () {

    let naviIndex: number = 0;

    const isActive = (i: number) => naviIndex === i;

    const b = !isActive(1);

    window.cc = () => naviIndex = 0;

    return <div>
        <div>
            <span class={{ active: () => isActive(0) }}>0</span>
            <span class={{ active: () => isActive(1) }}>1</span>
        </div>
    </div>;
}