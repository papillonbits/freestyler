HTML

```html
<h1>Text Replacement</h1>
<h2 id="h2">Heading 2<span></span></h2>
```

CSS

```scss
#h2 {
  position: relative;
  width: 250px;
  height: 76px;
  overflow: hidden;
}

#h2 span {
  position: absolute;
  width: 250px;
  height: 76px;
  left: 0;
  top: 0;
  background: url('heading2.jpg') no-repeat;
}
```
