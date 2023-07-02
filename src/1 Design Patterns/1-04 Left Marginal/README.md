HTML
```html
  <h1>Left Marginal</h1>
  <div class="left-marginal">
    <h2 class="marginal-heading">Heading</h2>
    You want to excerpt an element and move it into the left margin.
  </div>
```

CSS
```scss
  *.left-marginal {
    position: relative;
    margin-left: 200px;
  }

  *.marginal-heading {
    position: absolute;
    left: -200px;
    top: 0;
    margin: 0;
  }
```
