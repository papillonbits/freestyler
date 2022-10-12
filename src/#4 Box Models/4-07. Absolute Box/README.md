HTML
```html
 <h1>Absolute Box</h1>
<div class="container" >
<div class="default">BEFORE</div>
<div class="box before">ABSOLUTE BEFORE</div>
<div class="box">&uarr; <br /> Top <br /> &larr; Left &nbsp; &nbsp; &nbsp; Right &rarr; <br /> Bottom <br /> &darr; </div>
<div class="box after">ABSOLUTE AFTER</div>
   <div class="default">AFTER</div>
 </div>
```

CSS
```scss
  *.container {
    position: relative;
  }

  *.box {
    position: absolute;
    overflow: auto;
    visibility: visible;
    z-index: auto;
    left: 0;
    right: auto;
    top: 0;
    bottom: auto;
    width: 220px;
    height: 100px;
    margin: 10px;
    padding: 10px;
  }

  *.before {
    width: 100px;
    height: auto;
    left: 400px;
    right: auto;
    top: 100px;
    bottom: auto;
  }

  *.after {
    width: 100px;
    height: auto;
    left: auto;
    right: 0px;
    top: auto;
    bottom: 0px;
  }
```
