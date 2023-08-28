const msg = 'World';
<div $parent='#App'>Hello {msg}!</div>;
// $parennt='#App' can be abbreviated as $$App.
// Or use `document.getElementById('App').appendChild(<div/>)`