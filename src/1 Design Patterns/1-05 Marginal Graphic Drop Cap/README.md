HTML
```html
  <h1>Marginal Graphic Dropcap</h1>
  <p class="indent"><span class="graphic-dropcap" >M<span></span></span>arginal Graphic Dropcap. The letter M has been covered by the dropcap image.
  Screen readers read the text and visual users see the image.
  If the browser cannot display the dropcap image,
    the text becomes visible.
  </p>
```

CSS
```scss
  *.indent {
    position: relative;
    margin-left: 120px;
  }

  *.graphic-dropcap {
    position: absolute;
    width: 120px;
    height: 90px;
    left: -120px;
    top: 0;
  }

  *.graphic-dropcap span {
    position: absolute;
    width: 120px;
    height: 90px;
    margin: 0;
    left: 0;
    top: 0;
    background: url("m.jpg") no-repeat;
  }
```
