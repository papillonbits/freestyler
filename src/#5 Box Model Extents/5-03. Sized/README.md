HTML

```html
<h1>Sized</h1>
<div class="gp">
  Positioned Grandparent
  <div class="parent">
    Non-positioned Parent
    <div id="float" class="z">Sized Float</div>
    <div id="static" class="z">Sized Static</div>
    <table id="table" class="z">
      <tr>
        <td>Sized Table</td>
      </tr>
    </table>
    <span id="abs" class="z">Sized Absolute <img id="star" src="star.gif" alt="star"/></span>
  </div>
</div>
```

CSS

```scss
*.z {
  padding: 5px;
  border: 5px solid black;
}
#float {
  width: 150px;
  height: 50px;
}
#static {
  width: 150px;
  height: 50px;
}
#table {
  width: 150px;
  height: 50px;
}
#abs {
  width: 150px;
  height: 50px;
}
#star {
  width: 26px;
  height: 26px;
}
```
