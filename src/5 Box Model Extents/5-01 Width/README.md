HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Width</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="site.css" media="all" type="text/css" />
    <link rel="stylesheet" href="page.css" media="all" type="text/css" />
    <link rel="stylesheet" href="print.css" media="print" type="text/css" />
    <!--[if lte IE 6]>
      <link rel="stylesheet" href="ie6.css" media="all" type="text/css" />
    <![endif]-->
  </head>

  <body>
    <h1>Width</h1>
    <div id="before">
      <div class="parent">
        <span class="static-inline-shrinkwrapped box">Static Inline Shrinkwrapped <br />Element</span>

        <div class="spacer"></div>

        <img class="replaced-inline-shrinkwrapped box" src="star.gif" alt="" />
        <img class="replaced-inline-sized box" src="star.gif" alt="" />
        <span class="sized"> <img class="replaced-inline-stretched box" src="star.gif" alt=""/></span>

        <div class="spacer"></div>

        <div class="static-block-sized box">Static Block Sized</div>
        <div class="static-block-stretched box">Static Block Stretched Auto</div>

        <div class="spacer"></div>

        <table class="table-shrinkwrapped box">
          <tr>
            <td>Table Shrinkwrapped</td>
          </tr>
        </table>
        <table class="table-sized box">
          <tr>
            <td>Table Sized</td>
          </tr>
        </table>
        <table class="table-stretched box">
          <tr>
            <td>Table Stretched 100%</td>
          </tr>
        </table>

        <div class="spacer"></div>

        <span class="float-shrinkwrapped box">Float Shrinkwrapped</span>
        <span class="float-sized box">Float Sized</span>
        <span class="float-stretched box">Float Stretched 100%</span>

        <span class="absolute-shrinkwrapped box">Absolute Shrinkwrapped</span>
        <span class="absolute-sized box">Absolute Sized</span>
        <span class="absolute-stretched box">Absolute Stretched Auto</span>
      </div>
    </div>
  </body>
</html>
```

CSS

```scss
*.static-inline-shrinkwrapped {
  width: auto;
}
*.replaced-inline-shrinkwrapped {
  width: auto;
}
*.replaced-inline-sized {
  width: 35px;
}
*.replaced-inline-stretched {
  width: 100%;
}
*.static-block-sized {
  width: 300px;
}
*.static-block-stretched {
  width: auto;
}
*.table-shrinkwrapped {
  width: auto;
}
*.table-sized {
  width: 300px;
}
*.table-stretched {
  width: 100%;
}
*.float-shrinkwrapped {
  width: auto;
  float: left;
}
*.float-sized {
  width: 300px;
  float: left;
  clear: both;
}
*.float-stretched {
  width: 100%;
  float: left;
  clear: both;
}
*.absolute-shrinkwrapped {
  width: auto;
  left: 0;
  right: auto;
  position: absolute;
}
*.absolute-sized {
  width: 300px;
  left: 0;
  right: auto;
  position: absolute;
}
*.absolute-stretched {
  width: auto;
  left: 0;
  right: 0;
  position: absolute;
}
```
