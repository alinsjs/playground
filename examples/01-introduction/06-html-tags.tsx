let html: string = `Here's some <strong>HTML!!!</strong>`;

<p $html:html $$App />;
<button onclick={
    html = '<h1>H1 title</h1>'
} $$App>Modify html</button>;
// $html:html is short for $html={html}