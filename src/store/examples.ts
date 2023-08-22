export default [
    {
        "name": "Hello World",
        "code": "/*\n * @Author: chenzhongsheng\n * @Date: 2023-08-22 11:03:06\n * @Description: Coding something\n */\nconst msg = 'World';\nconst a = { a () {alert(111);} };\n<div onclick={a.a} $$App>Hello {msg}!</div>;\n// $$App is short for $parennt='#App'\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "head": "Introduction"
    },
    {
        "name": "Dynamic Attribute",
        "code": "let src: string = 'https://shiyix.cn/images/alins.png';\nconst altName: string = 'Alins';\n\n<img $src alt={`${altName} logo`} title:altName $$App />;\n<button onclick={src = ''} $$App >Clear Src</button>;\n// $src (or src:src) is short for src={src}"
    },
    {
        "name": "Styling",
        "code": "const style = {\n    color: '#f44',\n    fontSize: '20px',\n    fontWeight: 'bold',\n};\n\n<div $$App>\n    <button onclick={() => {\n        style.color = '#4f4';\n        style.fontSize = '30px';\n    }}>Modify Style</button>\n    <div $style>Alins is COOL!</div>\n</div>;"
    },
    {
        "name": "Styling 2",
        "code": "let redNumber = 100;\nlet fontSize = 14;\n\n<div $$App>\n    <button onclick={() => {\n        redNumber += 10;\n        fontSize ++;\n    }}>Modify Style</button>\n    <div style={{\n        color: `rgb(${redNumber}, 100, 100)`,\n        fontSize,\n        fontWeight: `bold`,\n    }}>Alins is COOL!</div>\n</div>;"
    },
    {
        "name": "Html Tags",
        "code": "let html: string = `Here's some <strong>HTML!!!</strong>`;\n\n<p $html:html $$App />;\n<button onclick={\n    html = '<h1>H1 title</h1>'\n} $$App>Modify html</button>;\n// $html:html is short for $html={html}"
    },
    {
        "name": "Counter",
        "code": "let count = 1;\n<button onclick={count++} $$App>\n    click:{count}\n</button>;",
        "head": "Reactivity"
    },
    {
        "name": "Reactive Object",
        "code": "const persion = {\n    name: 'alins',\n    age: 1,\n};\n\nfunction modifyInfo () {\n    persion.name += '!';\n    persion.age ++;\n}\n\n<div $$App>\n    <div>name={persion.name}; age={persion.age}</div>\n    <button onclick:modifyInfo>Modify Info</button>\n</div>;\n// onclick:modifyInfo is short for onclick={modifyInfo}"
    },
    {
        "name": "Props",
        "code": "let count = 0;\n\n<div $$App>\n    <Component $count/>\n    <button onclick={count++}>Increse</button>\n</div>;\n\nfunction Component ({ count }) {\n    return <div>count={count}</div>;\n}",
        "head": "Component"
    },
    {
        "name": "Spread Props",
        "code": "const data = {\n    name: 'Alins',\n    age: 0,\n};\n\nfunction Component ({ name, age }) {\n    return <div>{name}: age={age}</div>;\n}\n\n<div $$App>\n    <Component {...data}/>\n    <button onclick={data.age++}>Modify</button>\n</div>;"
    },
    {
        "name": "If Block",
        "code": "function Main () {\n    let count = 0;\n    if(count > 2){\n        return <div>Now count > 2</div>;\n    }\n    return <button onclick={count++}>count={count}</button>\n}\n<Main $$App/>;",
        "head": "Logic"
    },
    {
        "name": "If Component",
        "code": "function Main () {\n    let count = 0;\n    return <>\n        <If data={count>2}>\n            <div>Now count > 2</div>\n        </If>\n        <Else>\n            <button onclick={count++}>count={count}</button>\n        </Else>\n    </>;\n}\n<Main $$App/>;"
    }
];