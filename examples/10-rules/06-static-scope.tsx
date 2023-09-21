// At a static scope, assignments will not cause data to be marked as reactive
// @static-scope
function Component1 () {
    let count = 0;
    return <button onclick={count++}>count is {count}[Won't Work]</button>;
}
<Component1 $$App/>;

// Or you can use the function name at the beginning of the underscore to specify a static scope
function _staticFunction () {
    let v = 0; // Review the compilation artifacts to confirm that the static scope is in effect
    v ++;
}

static_scope: {
    let v = 0; // Review the compilation artifacts to confirm that the static scope is in effect
    v ++;
};
