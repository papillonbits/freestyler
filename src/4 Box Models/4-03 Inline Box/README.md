HTML
```html
  <h1>Inline Box</h1>
  <div class="container">
    <span class="default">BEFORE</span>
    <span class="box">&larr; Left &nbsp; &uarr; Top &nbsp; Bottom &darr; &nbsp; Right &rarr; </span>
    <span class="default">AFTER</span>
  </div>
```

CSS
```scss
  *.box {
    display: inline;
    visibility: visible;
    line-height: 100px;
    margin: 0 100px;
    padding: 20px 120px;
    border-top: 5px solid gray;
    border-bottom: 5px solid black;
    border-left: 5px solid gray;
    border-right: 5px solid black;
    background-color: gold;
  }
```
