```html
HTML
  <BLOCK class="hanging-indent">
    <INLINE class="hanging-dropcap"> text </INLINE>
  </BLOCK>

CSS
  .hanging-indent {
    padding-left: +VALUE;
    text-indent: -VALUE;
    margin-top: ±VALUE;
  }

  .hanging-dropcap {
    position: relative;
    top: ±VALUE;
    left: -VALUE;
    font-size: +SIZE;
    line-height: +SIZE;
  }
```

```
HTML
  <p class="hanging-indent">
    <span class="hanging-dropcap" >H</span>anging Dropcap.
  </p>

CSS
  .hanging-indent {
    padding-left: 50px;
    text-indent: -50px;
    margin-top: -25px;
  }

  .hanging-dropcap {
    position: relative;
    top: 0.55em;
    left: -3px;
    font-size: 60px;
    line-height: 60px;
  }
```
