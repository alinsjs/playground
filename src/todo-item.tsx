/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 01:35:35
 * @Description: Coding something
 */
export function Item ({item, index}: {item: string, index: number}, children: any[]) {
    let done = false;
    return <div style={{
        textDecoration: done ? 'line-through' : 'none',
        color: done ? '#888' : 'inherit',
    }}>
        <span>{index + 1}: {item}</span>
        <button onclick={() => { done = !done; }}>done</button>
        {children}
    </div>;
}