HTML
```html
  <ELEMENT>
  <ELEMENT class="class class class etc">
  <ELEMENT id="id">
  <ELEMENT id="id" class="class">
```

CSS
```scss
  type    { STYLES }
  *.class { STYLES }
  #id     { STYLES }
```

HTML
```html
   <h1>Type, Class, and ID Selectors</h1>
   <p>The type selector, <code>p</code>, adds a border to all paragraphs.</p>
   <p class="my-class1">
    The class selector, <code>*.my-class1</code>, adds padding.</p>
   <p class="my-class1 my-class2">
    The class selector, <code>*.my-class2</code>, adds letter-spacing.</p>
   <p class="my-class1 my-class2" id="my-id">
    The ID selector, <code>#my-id</code>, adds a background color. </p>
```

CSS
```scss
  p {
    border: 2px solid black;
  }

  *.my-class1 {
    padding: 10px;
  }

  *.my-class2 {
    letter-spacing: 0.11em;
  }

  #my-id {
    background-color: gold;
  }
```
