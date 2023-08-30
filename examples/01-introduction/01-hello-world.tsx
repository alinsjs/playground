const msg: string = 'World';
<div $mount='#App'>Hello {msg}!</div>;
// $mount='#App' can be abbreviated as $$App.
// Or use `document.getElementById('App').appendChild(<div/>)`