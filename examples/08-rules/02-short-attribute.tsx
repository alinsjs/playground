const msg = 'World';
<div $mount='#App'>Hello {msg}!</div>;
// $parennt='#App' can be abbreviated as $$App.
// Or use `document.getElementById('App').appendChild(<div/>)`