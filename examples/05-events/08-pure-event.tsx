function click (from: string) {
    console.log(`Execute click from ${from}`);
    // The pure decorator is used to keep event expressions from being compiled
    return () => {
        console.log(`Click from ${from}!`);
    };
}
<div $$App>
    <div>
        Normal [Won't Log Click From]:
        <button onclick={click('child1')}>Click Me!</button>
    </div>
    <div>
        With Pure:
        <button onclick:pure={click('child2')}>Click Me!</button>
    </div>
</div>;