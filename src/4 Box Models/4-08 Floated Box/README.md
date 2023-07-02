HTML
```html
 <h1>Floated Box</h1>
<div class="container">
<div class="default">BEFORE</div>
<div class="box small">FLOAT BEFORE</div>
<div class="box">&uarr; <br /> Top <br /> &larr; Left &nbsp; &nbsp; &nbsp; Right &rarr; <br /> Bottom <br /> &darr; </div>
<div class="box small">FLOAT AFTER</div>
   <div class="default">AFTER</div>
 </div>
```

CSS
```scss
  *.box {
    float: left;
    overflow: auto;
    visibility: visible;
    width: 220px;
    height: 100px;
    margin: 10px;
    padding: 10px;
  }

  *.small {
    width: 75px;
    height: auto;
  }
```
