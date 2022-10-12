HTML
```html
 <h1>Block Box</h1>
 <div class="container">
   <div class="default">BEFORE</div>
<div class="box"> &uarr; <br /> Top <br /> &larr; Left &nbsp; &nbsp; &nbsp; Right &rarr; <br /> Bottom <br /> &darr; </div>
   <div class="default">AFTER</div>
 </div>
```

CSS
```scss
  *.box {
      display: block;
      overflow: auto;
      visibility: visible;
      width: 220px;
      height: 100px;
      margin: 10px auto;
      padding: 10px;
  }
```
