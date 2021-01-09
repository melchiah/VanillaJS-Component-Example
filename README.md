# Module components example star rating application



---

## Key notes to observe in this Star Rating Application



Treat items as components and put them in separate file, either as a **constructor function** or as a **class**.

example component

```javascript
// component.js

export function FooComponent(elment: Element) {
	//constructor function
    
}
```



Don't forget to make main entry JavaScript file '*index.js* as **module** in your *index.html* file.

```html
<!-- index.html -->

<script type="module" src="index.js"></script>
```



Import your component into main entry JavaScript file using **ES6 import** syntax.

```javascript
// index.js

import { FooComponent } from './component.js';
```



Assign your component to some **Element** you need to influence with that newly made **component.**

```javascript
// index.js

const fooElement = document.getElementById('fooElement');
new FooComponent(fooElement);
```



You can name new attributes to manipulate your **Elements** as desired.

```html
<!-- index.html -->

<div invented-attribute="2" ></div> <!-- becomes '5' when manipulated in component.js -->
```

```javascript
// component.js

export function FooComponent(elment: Element) {
	//constructor function
    
    const attributeValue = element.getAttribute('invented-attribute');
    attributeValue.setAttribute('invented-attribute', 5);
}
```