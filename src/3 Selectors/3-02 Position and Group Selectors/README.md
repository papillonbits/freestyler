HTML
```html
  <h1>Position and Group Selectors</h1>
  <p class="my-class">p.my-class</p> <div id="my-id">
  <ol>
  <li>div ol li</li> <li>div ol li</li> <li>
  <p class="my-class">div ol li p.my-class </p> </li>
  </ol> </div>
```

CSS
```
  p,
  ol,
  li {
    border: 1px solid black;
    padding-left: 10px;
    font-family: monospace;
    margin: 10px;
    margin-left: 0px;
  }

  ol {
    margin-left: 0px;
    padding-left: 40px;
    margin-top: 20px;
  }

  /* Position Selectors */
  div *.my-class {
    font-size: 1.2em;
    font-weight: bold;
  }

  /* Descendant Selector */
  #my-id p {
    background-color: gold;
  }

  /* Descendant Selector */
  #my-id > * {
    border: 3px solid black;
  }

  /* Child Selector */
  :root {
    background: white;
  }

  /* Root Selector */
  li:nth-child(2n+1) /* Nth-child Selector */ li:nth-last-child(-n+2) /* Nth-last-child Selector */ li:nth-of-type(2n+1) {
    float: right;
  }

  /* Nth-of-type Selector */
  li:nth-last-of-type(2n+1) {
    float: right;
  }

  /* Nth-last-of-type Selector */
  66
  See also
  www.it-ebooks.info
  li:first-child {
    font-weight: bold;
    color: red;
  }

  /* First-child Selector */
  li:last-child {
    font-weight: bold;
    color: red;
  }

  /* Last-child Selector */
  ul li:first-of-type {
    color: red
  }

  /* First-of-type Selector */
  tr > td:last-of-type /* Last-of-type Selector */
  li:only-child /* Only-child Selector */ div:only-of-type /* Only-of-type Selector */ p:empty {
    display: hidden
  }

  /* Empty Selector */
  li + li {
    font-style: italic;
    color: blue;
  }

  Position and Group Selectors

  /* Sibling Selector */
```
