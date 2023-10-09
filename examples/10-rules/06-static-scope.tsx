// At a static scope, assignments will not cause data to be marked as reactive
// @static-scope
function Component1 () {
    let count = 0;
    return <button onclick={count++}>count is {count}[Won't Work]</button>;
}
<Component1 $mount='#App'/>;

static_scope: {
    let v = 0; // Review the compilation artifacts to confirm that the static scope is in effect
    v ++;
};
