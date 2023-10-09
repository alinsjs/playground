let value = 'Hello';

<div $mount='#App'>
    <input value={value} /><br/>
    <textarea value={value}></textarea>
    <p>Content = "{value}"</p>
</div>
// Or use the abbreviation $value instead of value={value}