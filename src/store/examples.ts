export default [
    {
        "name": "Hello World",
        "code": "const msg = 'World';\n<div $$App>Hello {msg}!</div>;\n// $$App is short for $parennt='#App'\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "head": "Introduction"
    },
    {
        "name": "Dynamic Attribute",
        "code": "let src: string = 'https://shiyix.cn/images/alins.png';\nconst altName: string = 'Alins';\n\n<img $src alt={`${altName} logo`} title:altName $$App />;\n<button onclick={src = ''} $$App >Clear Src</button>;\n// $src (or src:src) is short for src={src}"
    },
    {
        "name": "Styling String",
        "code": "let redNumber = 100;\nlet fontSize = 14;\n\n<div $$App>\n    <button onclick={() => {\n        redNumber += 10;\n        fontSize ++;\n    }}>Modify Style</button>\n    <div style={`\n        color: rgb(${redNumber}, 100, 100); \n        font-size: ${fontSize}px;\n        font-weight: bold;\n    `}>Alins is COOL!</div>\n</div>;"
    },
    {
        "name": "Styling Object",
        "code": "let redNumber = 100;\nlet fontSize = 14;\n\n<div $$App>\n    <button onclick={() => {\n        redNumber += 10;\n        fontSize ++;\n    }}>Modify Style</button>\n    <div style={{\n        color: `rgb(${redNumber}, 100, 100)`,\n        fontSize,\n        fontWeight: `bold`,\n    }}>Alins is COOL!</div>\n</div>;"
    },
    {
        "name": "Styling Object2",
        "code": "/*\n * @Author: chenzhongsheng\n * @Date: 2023-08-21 22:43:18\n * @Description: Coding something\n */\nconst style = {\n    color: '#f44',\n    fontSize: '20px',\n    fontWeight: 'bold',\n};\n\n<div $$App>\n    <button onclick={() => {\n        style.color = '#4f4';\n        style.fontSize = '30px';\n    }}>Modify Style</button>\n    <div $style>Alins is COOL!</div>\n</div>;"
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
        "code": "function Main () {\n    let count: number = 0;\n    const add = () => {count++};\n    if (count > 3) {\n        return <div>Now count > 3</div>;\n    } else if (count > 2){\n        return <button onclick:add>continue[count>2]</button>;\n    }\n    return <button onclick:add>count={count}</button>\n}\n<Main $$App/>;",
        "head": "Logic"
    },
    {
        "name": "If Component",
        "code": "function Main () {\n    let count: number = 0;\n    const add = () => {count++};\n    return <>\n        <If data={count > 3}>\n            <div>Now count > 3</div>\n        </If>\n        <ElseIf data={count > 2}>\n            <button onclick:add>continue[count>2]</button>\n        </ElseIf>\n        <Else>\n            <button onclick:add>count={count}</button>\n        </Else>\n    </>;\n}\n<Main $$App/>;"
    },
    {
        "name": "Switch Block",
        "code": "function Main () {\n    let count = 0;\n    const add = () => {count++;};\n    switch (count) {\n        case 1:\n        case 2:\n            return <button onclick:add>Count is 1 or 2:{count}</button>;\n        case 3: return <button onclick:add>Count is 3[count=3]</button>;\n        case 4: return <button onclick:add>Now Count = 4</button>;\n    }\n    return <button onclick:add>Other Count:{count}</button>;\n}\n<Main $$App/>;"
    },
    {
        "name": "Switch Component",
        "code": "function Main () {\n    let count = 0;\n    const add = () => {count++;};\n    return <Switch data:count>\n        <Case data={[1,2]}>\n            <button onclick:add>Count is 1 or 2:{count}</button>\n        </Case>\n        <Case data={3}>\n            <button onclick:add>Count is 3[count=3]</button>\n        </Case>\n        <Case data={4}>\n            <button onclick:add>Now Count = 4</button>\n        </Case>\n        <Default>\n            <button onclick:add>Other Count:{count}</button>\n        </Default>\n    </Switch>;\n}\n<Main $$App/>;"
    },
    {
        "name": "Show Component",
        "code": "function Componnt(){\n    let show: boolean = false;\n    return <>\n        <button onclick={show = !show}>Toggle Show</button>\n        <Show data:show>\n            <div>Show Element 1</div>\n        </Show>\n        <div $show:show>Show Element 2</div>\n    </>\n}\n\n<Componnt $$App/>;"
    },
    {
        "name": "Async Block",
        "code": "function mockFetch(){\n    return new Promise(resolve => {\n        setTimeout(()=>{\n            resolve({name: 'Bob', age: 10})\n        }, 2000)\n    });\n}\n\nasync function Componnt(){\n    const data = await mockFetch();\n    return <div>name={data.name}; age={data.age}</div>\n}\n\n<Componnt $$App/>;"
    },
    {
        "name": "Async Component",
        "code": "function mockFetch(){\n    return new Promise(resolve => {\n        setTimeout(() => {\n            resolve({name: 'Bob', age: 10})\n        }, 2000)\n    });\n}\n\nfunction Componnt(){\n    // You can specify the name of the $data through the name attribute: name='persion'\n    return <Async data={mockFetch()}>\n        <div>name={$data.name}; age={$data.age}</div>\n    </Async>\n}\n\n<Componnt $$App/>;"
    },
    {
        "name": "Array Map",
        "code": "function Componnt(){\n    const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]\n    let age = 10;\n    return <>\n        <button onclick={\n            list.unshift({name: 'Tom', age: age++})\n        }>Add Person</button>\n        {list.map((item, index) => (\n            <div>{index+1}: name={item.name}; age={item.age};</div>\n        ))}\n    </>\n}\n\n<Componnt $$App/>;"
    },
    {
        "name": "For Component",
        "code": "function Componnt(){\n    const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]\n    let age = 10;\n    return <>\n        <button onclick={\n            list.unshift({name: 'Tom', age: age++})\n        }>Add Person</button>\n        <For data:list>\n            <div>{$index+1}: name={$item.name}; age={$item.age};</div>\n        </For>\n    </>\n    // You can specify the name of the $item and $index through the name attribute: item='person' index='i'\n}\n\n<Componnt $$App/>;"
    },
    {
        "name": "Hello World",
        "code": "const msg = 'World';\n<div $$App>Hello {msg}!</div>;\n// $$App is short for $parennt='#App'\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "head": "Events"
    },
    {
        "name": "Hello World",
        "code": "const msg = 'World';\n<div $$App>Hello {msg}!</div>;\n// $$App is short for $parennt='#App'\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "head": "Bindings"
    },
    {
        "name": "Hello World",
        "code": "const msg = 'World';\n<div $$App>Hello {msg}!</div>;\n// $$App is short for $parennt='#App'\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "head": "Lifecycle"
    },
    {
        "name": "Hello World",
        "code": "const msg = 'World';\n<div $$App>Hello {msg}!</div>;\n// $$App is short for $parennt='#App'\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "head": "Rules"
    },
    {
        "name": "Hello World",
        "code": "const msg = 'World';\n<div $$App>Hello {msg}!</div>;\n// $$App is short for $parennt='#App'\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "head": "Store"
    },
    {
        "name": "Hello World",
        "code": "const msg = 'World';\n<div $$App>Hello {msg}!</div>;\n// $$App is short for $parennt='#App'\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "head": "Applications"
    }
];