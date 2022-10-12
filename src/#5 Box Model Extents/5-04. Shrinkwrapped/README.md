HTML

```html
<h1>Shrinkwrapped</h1>
<div class="gp">
  Positioned Grandparent
  <div class="parent">
    Non-positioned Parent
    <span id="float" class="z">Shrinkwrapped Float</span>
    <span id="inline" class="z">Shrinkwrapped Static Inline</span><br />
    <img id="star" src="star.gif" alt="star" />
    <div id="block" class="z">Vertically Shrinkwrapped Static Block</div>
    <table id="table" class="z">
      <tr>
        <td>Shrinkwrapped Table</td>
      </tr>
    </table>
    <span id="abs" class="z">Shrinkwrapped Absolute</span>
  </div>
</div>
```

CSS

```scss
#float {
  width: auto;
  height: auto;
  float: left;
}
#inline {
  width: auto;
  height: auto;
}
#star {
  width: auto;
  height: auto;
}
#block {
  width: auto;
  height: auto;
}
#table {
  width: auto;
  height: auto;
}
#abs {
  width: auto;
  height: auto;
  left: auto;
  bottom: auto;
  position: absolute;
}
```
