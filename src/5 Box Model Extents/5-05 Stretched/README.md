HTML

```html
<h1>Stretched</h1>
<div class="gp">
  Positioned Grandparent
  <div class="parent">
    Non-positioned Parent
    <span id="inline" class="s">Cannot stretch a static inline</span>
    <div id="sized"><img id="star" src="star.gif" alt="star" /></div>
    <div id="block" class="s">Horizontally Stretched Static Block</div>
    <table id="table" class="s">
      <tr>
        <td>Horiz. Stretched Table</td>
      </tr>
    </table>
    <div id="abs-v" class="s">Vertically Stretched Absolute</div>
    <span id="abs-h" class="s">Horizontally Stretched Absolute</span>
    <span id="float" class="s">Almost Stretched Float</span>
  </div>
</div>
```

CSS

```scss
#star {
  width: 100%;
  height: 100%;
}
#block {
  width: auto;
}
#table {
  width: 100%;
}
#abs-v {
  height: auto;
  top: 0;
  bottom: 0;
  position: absolute;
}
#abs-h {
  width: auto;
  left: 0;
  right: 0;
  position: absolute;
}
#float {
  width: 100%;
  float: left;
}
```
