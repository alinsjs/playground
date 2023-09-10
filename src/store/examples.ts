export default [
    {
        "name": "Hello World",
        "code": "const msg: string = 'World';\n<div $mount='#App'>Hello {msg}!</div>;\n// $mount='#App' can be abbreviated as $$App.\n// Or use `document.getElementById('App').appendChild(<div/>)`",
        "title": "Introduction",
        "head": "Introduction"
    },
    {
        "name": "Dynamic Attribute",
        "code": "let src: string = 'https://shiyix.cn/images/alins.png';\nconst altName: string = 'Alins';\n\n<div $mount='#App'>\n    <img src={src} alt={`${altName} logo`} title={altName}/>\n    <button onclick={src = ''}>Clear Src</button>\n</div>",
        "title": "Introduction"
    },
    {
        "name": "Enable Attribute",
        "code": "let enable = false;\n\n<button $mount='#App'\n    msg={{value: 'Hello', enable}}\n    onclick={e => {\n        enable = !enable;\n        console.log(e.target.outerHTML)\n    }}\n>toggle attr</button>",
        "title": "Introduction"
    },
    {
        "name": "Html Tags",
        "code": "let html: string = `Here's some <strong>HTML!!!</strong>`;\n\n<div $mount='#App'>\n    <p $html={html}/>\n    <button onclick={\n        html = '<h1>H1 title</h1>'\n    }>Modify html</button>\n</div>",
        "title": "Introduction"
    },
    {
        "name": "Counter",
        "code": "let count = 1;\n<button onclick={count++} $$App>\n    count:{count}\n</button>;",
        "title": "Reactivity",
        "head": "Reactivity"
    },
    {
        "name": "Reactive Object",
        "code": "const persion = {\n    name: 'alins',\n    age: 1,\n};\n\nfunction modifyInfo () {\n    persion.name += '!';\n    persion.age ++;\n}\n\n<div $$App>\n    <div>name={persion.name}; age={persion.age}</div>\n    <button onclick:modifyInfo>Modify Info</button>\n</div>;\n// onclick:modifyInfo is short for onclick={modifyInfo}",
        "title": "Reactivity"
    },
    {
        "name": "Computed",
        "code": "let count = 1;\n\nlet countAdd2 = count + 2;\n\nlet countAdd3 = countAdd2 + 1;\n\nfunction countMultiply2 () {\n    return count * 2\n}\n\n<div $$App>\n    <button onclick={count++}>\n        click:{count}\n    </button>\n    <div>count + 2 = {countAdd2}</div>\n    <div>count + 3 = {countAdd3}</div>\n    <div>count * 2 = {countMultiply2}</div>\n    <div>count * 2 = {countMultiply2()}</div>\n</div>",
        "title": "Reactivity"
    },
    {
        "name": "Styling String",
        "code": "let redNumber = 100;\nlet fontSize = 14;\n\n<div $$App>\n    <button onclick={() => {\n        redNumber += 10;\n        fontSize ++;\n    }}>Modify Style</button>\n    <div style={`\n        color: rgb(${redNumber}, 100, 100); \n        font-size: ${fontSize}px;\n        font-weight: bold;\n    `}>Alins is COOL!</div>\n</div>;\n",
        "title": "Style",
        "head": "Style"
    },
    {
        "name": "Styling Object",
        "code": "let redNumber = 100;\nlet fontSize = 14;\n\n<div $$App>\n    <button onclick={() => {\n        redNumber += 10;\n        fontSize ++;\n    }}>Modify Style</button>\n    <div style={{\n        color: `rgb(${redNumber}, 100, 100)`,\n        fontSize,\n        fontWeight: `bold`,\n    }}>Alins is COOL!</div>\n</div>;",
        "title": "Style"
    },
    {
        "name": "Styling Object2",
        "code": "const style = {\n    color: '#f44',\n    fontSize: '20px',\n    fontWeight: 'bold',\n};\n\n<div $$App>\n    <button onclick={() => {\n        style.color = '#4f4';\n        style.fontSize = '30px';\n    }}>Modify Style</button>\n    <div $style>Alins is COOL!</div>\n</div>;\n// $style (or style:style) is short for style={style}",
        "title": "Style"
    },
    {
        "name": "Single Style",
        "code": "let redNumber = 100;\nlet fontSize = 14;\n\n<div $$App>\n    <button onclick={() => {\n        redNumber += 10;\n        fontSize ++;\n    }}>Modify Style</button>\n    <div style='font-weight: bold'\n        style:color={`rgb(${redNumber}, 100, 100)`}\n        style:fontSize={`${fontSize}px`}\n    >Alins is COOL!</div>\n</div>;\n// add style and class 章节",
        "title": "Style"
    },
    {
        "name": "Class String",
        "code": "let classList = [];\nlet index = 0;\n\nfunction addClass(e){\n    classList.push(`a${index++}`);\n    console.log(e.target.className);\n}\n\n<div $$App>\n    <button \n        class={`a ${classList.join(' ')}`} \n        onclick={addClass}\n    >Add Class</button>\n</div>;",
        "title": "Class",
        "head": "Class"
    },
    {
        "name": "Class Object",
        "code": "let a1Flag = false;\nlet a2Count = 0;\n\nfunction toggleClass(e){\n    a1Flag = !a1Flag;\n    a2Count ++;\n    console.log(e.target.className)\n}\n\n<div $$App>\n    <button class={{\n        a: true,\n        a1: a1Flag,\n        a2: a2Count % 2 === 0\n    }}\n    onclick={toggleClass}>\n        Toggle Class\n    </button>\n</div>;",
        "title": "Class"
    },
    {
        "name": "Class Object2",
        "code": "const classObject = {\n    a: true,\n    a1: false,\n    a2: true\n}\n\nfunction toggleClass(e){\n    classObject.a1 = !classObject.a1;\n    classObject.a2 = !classObject.a2;\n    console.log(e.target.className)\n}\n\n<div $$App>\n    <button class={classObject}\n        onclick={toggleClass}>\n        Toggle Class\n    </button>\n</div>;",
        "title": "Class"
    },
    {
        "name": "Single Class",
        "code": "let a1Flag = false;\nlet a2Count = 0;\n\nfunction toggleClass(e){\n    a1Flag = !a1Flag;\n    a2Count ++;\n    console.log(e.target.className)\n}\n\n<div $$App>\n    <button class='a'\n        class:a1={a1Flag}\n        class:a2={a2Count % 2 === 0}\n        onclick={toggleClass}>\n        Toggle Class\n    </button>\n</div>;",
        "title": "Class"
    },
    {
        "name": "Basic Use",
        "code": "let count = 0;\nfunction add () {\n    count++;\n}\n<div $$App>\n    <button onclick={count++}>count={count}</button>\n    <button onclick={() => count++}>count={count}</button>\n    <button onclick={add}>count={count}</button>\n    <button onclick={add()}>count={count}</button>\n    <button onclick:add>count={count}</button>\n</div>;\n// onclick:add is short for onclick={add}",
        "title": "Events",
        "head": "Events"
    },
    {
        "name": "Event Object",
        "code": "let x = 0, y = 0;\nfunction onclick (e) {\n    x = e.clientX;\n    y = e.clientY;\n}\n<div $$App>\n    <button onclick={(e) => {\n        x = e.clientX;\n        y = e.clientY;\n    }}>Button 1</button>\n    <button onclick={onclick}>Button 2</button>\n    <div>ClientX={x}; ClientY={y}</div>\n</div>;",
        "title": "Events"
    },
    {
        "name": "Prevent Default",
        "code": "function click(){\n    console.log('Prevent checkbox checked!');\n}\n<div $$App>\n    Normal: <input type='checkbox'/><br/>\n    Prevent And Alert: <input onclick:prevent={click} type='checkbox'/><br/>\n    Only Prevent: <input onclick:prevent type='checkbox'/>\n</div>",
        "title": "Events"
    },
    {
        "name": "Stop Propagation",
        "code": "function click(from: string){\n    console.log(`Click from ${from}!`);\n}\n<div $$App>\n    <div onclick={click('parent')}>\n        Normal: \n        <button onclick={click('child')}>Click Me!</button>\n    </div>\n    <div onclick={click('parent')}>\n        StopPropagation With Alert: \n        <button onclick:stop={click('child')}>Click Me!</button>\n    </div>\n    <div onclick={click('parent')}>\n        Only StopPropagation: \n        <button onclick:stop>Click Me!</button>\n    </div>\n</div>",
        "title": "Events"
    },
    {
        "name": "Event Capture",
        "code": "function click(from: string){\n    console.log(`Click from ${from}!`);\n}\n<div $$App>\n    <div onclick={click('parent')}>\n        Normal: \n        <button onclick={click('child')}>Click Me!</button>\n    </div>\n    <div onclick:capture={click('parent')}>\n        With Capture: \n        <button onclick:capture={click('child')}>Click Me!</button>\n    </div>\n</div>",
        "title": "Events"
    },
    {
        "name": "Once",
        "code": "function click(){\n    console.log('Clicked, try again!');\n}\n<div $$App>\n    <div>\n        Normal: \n        <button onclick={click}>Click Me!</button>\n    </div>\n    <div>\n        Only Once: \n        <button onclick:once={click}>Click Me!</button>\n    </div>\n</div>",
        "title": "Events"
    },
    {
        "name": "Self",
        "code": "function click(from: string){\n    console.log(`Click from ${from}!`);\n}\n<div $$App>\n    <div onclick={click('parent')}>\n        Normal: \n        <button onclick={click('child')}>Click Me!</button>\n    </div>\n    <div onclick:self={click('parent')}>\n        With Self: \n        <button onclick={click('child')}>Click Me!</button>\n    </div>\n</div>\n",
        "title": "Events"
    },
    {
        "name": "Pure Event",
        "code": "function click(from: string){\n    console.log(`Execute click from ${from}`)\n    // The pure decorator is used to keep event expressions from being compiled\n    return ()=>{\n        console.log(`Click from ${from}!`);\n    }\n}\n<div $$App>\n    <div>\n        Normal [Won't Work]: \n        <button onclick={click('child1')}>Click Me!</button>\n    </div>\n    <div>\n        With Pure: \n        <button onclick:pure={click('child2')}>Click Me!</button>\n    </div>\n</div>",
        "title": "Events"
    },
    {
        "name": "Props",
        "code": "let count = 0;\n\n<div $$App>\n    <Component $count/>\n    <button onclick={count++}>Increse</button>\n</div>;\n\nfunction Component ({ count }) {\n    return <div>count={count}</div>;\n}",
        "title": "Component",
        "head": "Component"
    },
    {
        "name": "Spread Props",
        "code": "const data = {\n    name: 'Alins',\n    age: 0,\n};\n\nfunction Component ({ name, age }) {\n    return <div>{name}: age={age}</div>;\n}\n\n<div $$App>\n    <Component {...data}/>\n    <button onclick={data.age++}>Modify</button>\n</div>;",
        "title": "Component"
    },
    {
        "name": "If Block",
        "code": "function Main () {\n    let count: number = 0;\n    const add = () => {count++};\n    if (count > 3) {\n        return <div>Now count > 3</div>;\n    } else if (count > 2){\n        return <button onclick:add>continue[count>2]</button>;\n    }\n    return <button onclick:add>count={count}</button>\n}\n<Main $$App/>;",
        "title": "Logic",
        "head": "Logic"
    },
    {
        "name": "If Component",
        "code": "function Main () {\n    let count: number = 0;\n    const add = () => {count++};\n    return <>\n        <If data={count > 3}>\n            <div>Now count > 3</div>\n        </If>\n        <ElseIf data={count > 2}>\n            <button onclick:add>continue[count>2]</button>\n        </ElseIf>\n        <Else>\n            <button onclick:add>count={count}</button>\n        </Else>\n    </>;\n}\n<Main $$App/>;",
        "title": "Logic"
    },
    {
        "name": "Switch Block",
        "code": "function Main () {\n    let count = 0;\n    const add = () => {count++;};\n    switch (count) {\n        case 1:\n        case 2:\n            return <button onclick:add>Count is 1 or 2:{count}</button>;\n        case 3: return <button onclick:add>Count is 3[count=3]</button>;\n        case 4: return <button onclick:add>Now Count = 4</button>;\n    }\n    return <button onclick:add>Other Count:{count}</button>;\n}\n<Main $$App/>;",
        "title": "Logic"
    },
    {
        "name": "Switch Component",
        "code": "function Main () {\n    let count = 0;\n    const add = () => {count++;};\n    return <Switch data:count>\n        <Case data={[1,2]}>\n            <button onclick:add>Count is 1 or 2:{count}</button>\n        </Case>\n        <Case data={3}>\n            <button onclick:add>Count is 3[count=3]</button>\n        </Case>\n        <Case data={4}>\n            <button onclick:add>Now Count = 4</button>\n        </Case>\n        <Default>\n            <button onclick:add>Other Count:{count}</button>\n        </Default>\n    </Switch>;\n}\n<Main $$App/>;",
        "title": "Logic"
    },
    {
        "name": "Show Component",
        "code": "function Componnt(){\n    let show: boolean = false;\n    return <>\n        <button onclick={show = !show}>Toggle Show</button>\n        <Show data:show>\n            <div>Show Element 1</div>\n        </Show>\n        <div $show:show>Show Element 2</div>\n    </>\n}\n\n<Componnt $$App/>;",
        "title": "Logic"
    },
    {
        "name": "Async Block",
        "code": "function mockFetch(){\n    return new Promise(resolve => {\n        setTimeout(()=>{\n            resolve({name: 'Bob', age: 10})\n        }, 2000)\n    });\n}\n\nasync function Componnt(){\n    const data = await mockFetch();\n    return <div>name={data.name}; age={data.age}</div>\n}\n\n<Componnt $$App/>;",
        "title": "Logic"
    },
    {
        "name": "Async Component",
        "code": "function mockFetch(){\n    return new Promise(resolve => {\n        setTimeout(() => {\n            resolve({name: 'Bob', age: 10})\n        }, 2000)\n    });\n}\n\nfunction Componnt(){\n    // You can specify the name of the $data through the name attribute: name='persion'\n    return <Async data={mockFetch()}>\n        <div>name={$data.name}; age={$data.age}</div>\n    </Async>\n}\n\n<Componnt $$App/>;",
        "title": "Logic"
    },
    {
        "name": "Array Map",
        "code": "function Componnt(){\n    const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]\n    let age = 10;\n    return <>\n        <button onclick={\n            list.unshift({name: 'Tom', age: age++})\n        }>Add Person</button>\n        {list.map((item, index) => (\n            <div>{index+1}: name={item.name}; age={item.age};</div>\n        ))}\n    </>\n}\n\n<Componnt $$App/>;",
        "title": "Logic"
    },
    {
        "name": "For Component",
        "code": "function Componnt(){\n    const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]\n    let age = 10;\n    return <>\n        <button onclick={\n            list.unshift({name: 'Tom', age: age++})\n        }>Add Person</button>\n        <For data:list>\n            <div>{$index+1}: name={$item.name}; age={$item.age};</div>\n        </For>\n    </>\n    // You can specify the name of the $item and $index through the name attribute: item='person' index='i'\n}\n\n<Componnt $$App/>;",
        "title": "Logic"
    },
    {
        "name": "Text Input",
        "code": "let value = 'Hello';\n\n<div $$App>\n    <input value={value} /><br/>\n    <textarea value={value}></textarea>\n    <p>Content = \"{value}\"</p>\n</div>\n// Or use the abbreviation $value instead of value={value}",
        "title": "Bindings",
        "head": "Bindings"
    },
    {
        "name": "Numeric Input",
        "code": "let a = 1, b = 2, c = '';\n\n<div $$App>\n    <div>\n        <input type='number' value={a} min='0' max='10'/>\n        <input type='range' value={a} min='0' max='10'/>\n    </div>\n    <div>\n        <input type='number' value={b} min='0' max='10'/>\n        <input type='range' value={b} min='0' max='10'/>\n    </div>\n    <div>\n        <input type='number' value:number={c} min='0' max='10'/>\n        <input type='range' value:number={c} min='0' max='10'/>\n    </div>\n    <div> a + b + c = {a + b + c}</div>\n</div>",
        "title": "Bindings"
    },
    {
        "name": "Checkbox",
        "code": "let checked = false;\n\n<div $$App>\n    <input type='checkbox' checked={checked} />\n    <div> checked = {checked}</div>\n</div>",
        "title": "Bindings"
    },
    {
        "name": "Select",
        "code": "let selected = 'Apple';\n\nlet fruitList = ['Apple', 'Banana', 'Orange'];\n\n<div $$App>\n    <select value={selected}>\n        <For data={fruitList}>\n            <option>{$item}</option>\n        </For>\n    </select>\n    <div>Selected Fruit: {selected}</div>\n</div>",
        "title": "Bindings"
    },
    {
        "name": "DOM Reference",
        "code": "let ref: HTMLElement;\n<button $$App \n    $ref:ref\n    onclick={console.log(`Say ${ref!.textContent}`)}\n>Hello!</button>",
        "title": "Bindings"
    },
    {
        "name": "Lifecycles",
        "code": "let ref: HTMLElement;\nfunction created(dom){\n    console.log(`created: parent=${dom.parentElement?.tagName}`, )\n}\nfunction appended(dom){\n    const parent = dom.parentElement;\n    console.log(`appended: parent=${parent.tagName}; \n        mount parent=${parent.parentElement?.tagName}`)\n}\nfunction mounted(dom){\n    const parent = dom.parentElement;\n    console.log(`mounted: parent=${parent.tagName}; \n        mount parent=${parent.parentElement?.tagName}`)\n}\nfunction removed(dom){\n    console.log(`removed: parent=${dom.parentElement}`)\n}\n\n<div $$App>\n    <div\n        $ref:ref\n        $created:created\n        $appended:appended\n        $mounted:mounted\n        $removed:removed\n    >Hello World!</div>\n    <button onclick={ref.remove()}>Remove DOM</button>\n</div>;",
        "title": "Lifecycle",
        "head": "Lifecycle"
    },
    {
        "name": "Computed Set",
        "code": "let a = 1;\n\nlet b = a + 1; set: v => a = v + 1;\n\n<div $$App>\n    <button onclick={b++}>Modify B</button>\n    <div>a={a}; b={b}</div>\n</div>;",
        "title": "Rules",
        "head": "Rules"
    },
    {
        "name": "Watch",
        "code": "let a = 1;\n\nconst b = a + 1;\n\nconst c = {\n    a: a + 2\n};\n\nwatch: a, (newValue, oldValue) => {\n    console.log('a changed:', newValue, oldValue);\n};\nwatch: a + 1, (newValue, oldValue) => {\n    console.log('a + 1 changed:', newValue, oldValue);\n};\nwatch: () => a * 2, (newValue, oldValue) => {\n    console.log('a * 2 changed:', newValue, oldValue);\n};\nwatch: b, (newValue, oldValue) => {\n    console.log('b changed:', newValue, oldValue);\n};\nwatch: c, (newValue, oldValue, prop) => {\n    console.log('c changed:', newValue, oldValue, prop);\n};\n\n<button $$App onclick={a++}>Modify A</button>;",
        "title": "Rules"
    },
    {
        "name": "Short Attribute",
        "code": "let msg = 'Hello';\n\nfunction modifyMsg(e){\n    msg += '!';\n    console.log(e.target.outerHTML);\n}\n\n<button \n    $$App\n    $msg \n    msg2:msg \n    onclick:modifyMsg>\n        Modify Msg\n</button>;\n/* \n    $$App is short for $mount='#App'\n    $msg is short for msg={msg}\n    msg2:msg is short for msg2={msg}\n*/",
        "title": "Rules"
    },
    {
        "name": "Variable Naming",
        "code": "let _name = 1;\n_name ++;\n// Variables starting with _ are compiled as static data even if the value changes\n\nlet $name = 2;\n// Variables starting with $ are compiled into reactive data even if the value does not change\n\nconst $$shallowReactive = {a:1};\n// Variables starting with $$ are compiled into shallow reactive data\n\n<div $$App>Click output to view the compilation product</div>",
        "title": "Rules"
    },
    {
        "name": "Comments",
        "code": "let name1 = 1; // @static\nname1 ++;\n// static coment mark a variable as static data even if the value changes\n\nlet a = 1,b = 1,c = 1; // @static(a)\na++; b++; c++;\n\nlet name2 = 2; // @reactive\n// reactive comment mark a variable as reactive data even if the value does not change\n\nlet d = 1,e = 1,f = 1; // @reactive(d)\n\nconst shallowReactive = {a:1}; // @shallow\n// shallow comment mark a variable as shallow reactive data\n\n<div $$App>Click output to view the compilation product</div>",
        "title": "Rules"
    },
    {
        "name": "Create Store",
        "code": "import { createStore } from 'alins';\nconst useStore = createStore({\n    state: () => ({\n        count: 0,\n    }),\n    actions: {\n        increase () {\n            this.count ++;\n        },\n        countAddX (x: number) {\n            return this.count + x;\n        }\n    },\n    getters: {\n        countAdd2 () {\n            return this.count + 2;\n        },\n        getCountAddX () {\n            return this.countAddX(3);\n        }\n    }\n});\n\nconst store = useStore();\n\n<div $$App>\n    <div>Count = {store.count}</div>\n    <div>countAdd2 = {store.countAdd2}</div>\n    <div>countAddX = {store.countAddX(4)}</div>\n    <div>getCountAddX = {store.getCountAddX}</div>\n    <button onclick={store.increase}>Increase Count</button>\n</div>;",
        "title": "Store",
        "head": "Store"
    },
    {
        "name": "Watch Store",
        "code": "import { createStore } from 'alins';\nconst useStore = createStore({\n    state: () => ({\n        count: 0,\n    }),\n    actions: {\n        increase () {\n            this.count ++;\n        },\n        countAddX (x: number) {\n            return this.count + x;\n        }\n    },\n    getters: {\n        countAdd2 () {\n            return this.count + 2;\n        },\n        getCountAddX () {\n            return this.countAddX(3);\n        }\n    }\n});\n\nconst store = useStore();\n\nstore.$watch('count', (newValue, oldValue) => {\n    console.log('store.count change', newValue, oldValue);\n});\nstore.$watch('countAdd2', (newValue, oldValue) => {\n    console.log('store.countAdd2 change', newValue, oldValue);\n});\nstore.$watch(() => store.countAddX(4), (newValue, oldValue) => {\n    console.log('store.countAddX(4) change', newValue, oldValue);\n});\n\n<div $$App>\n    <div>Count = {store.count}</div>\n    <div>countAdd2 = {store.countAdd2}</div>\n    <div>countAddX = {store.countAddX(4)}</div>\n    <div>getCountAddX = {store.getCountAddX}</div>\n    <button onclick={store.increase}>Increase Count</button>\n</div>;",
        "title": "Store"
    },
    {
        "name": "Counter",
        "code": "let count = 1;\n<div $$App>\n    <input type=\"number\" value={count} />\n    <button onclick={count++}>\n        click:{count}\n    </button>\n    <div>count * 2 = {count * 2}</div>\n</div>",
        "title": "Applications",
        "head": "Applications"
    },
    {
        "name": "Todo List",
        "code": "function List () {\n    const list = ['todo1'];\n    let value = '';\n    return <div>\n        <div>\n            <input type=\"text\" value={value}/>\n            <button onclick={list.push(value)}>add</button>\n        </div>\n        <For data={list}>\n            <Item item={$item} index={$index}>\n                <button onclick={list.splice($index, 1)}>delete</button>\n            </Item>\n        </For>\n    </div>;\n}\n\nfunction Item ({item, index}, children) {\n    let done = false;\n    return <div style={{\n        textDecoration: done ? 'line-through' : 'none',\n        color: done ? '#888' : 'inherit',\n    }}>\n        <span>{index + 1}: {item}</span>\n        <button onclick={ done = !done }>{done ? 'undo' : 'done'}</button>\n        {children}\n    </div>;\n}\n\n<List $$App/>;",
        "title": "Applications"
    }
];