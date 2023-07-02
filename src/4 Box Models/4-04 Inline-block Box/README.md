```
You want to style the box of an inline-block element. Inline-block elements include replaced elements and inline elements displayed as inline blocks. For example, an image is a replaced element because the browser replaces the element with an image. Also, you can use display:inline-block to display any inline element as a block rendered within an inline context.
```

HTML
```html
 <h1>Inline-block Box</h1>
<div class="container">
<span class="default">BEFORE</span>
<img class="replaced-box" src="star.gif" alt="star" /> <span class="default">AFTER</span>
   <span class="default">BEFORE</span>
   <span class="inline-box">Inline element displayed as an inline block.</span>
   <span class="default">AFTER</span>
 </div>
 ```

CSS
```scss
  *.replaced-box {
    display: inline-block;
    overflow: visible;
    visibility: visible;
    width: 51px;
    height: 52px;
    margin: 10px 100px;
    padding: 10px 120px;
  }

  *.inline-box {
    display: inline-block;
    overflow: visible;
    visibility: visible;
    width: 275px;
    height: 52px;
    margin: 10px 100px;
    padding: 10px 10px;
  }
```
