HTML
```html
  <!--[if lte IE 6]>
    <link rel="stylesheet" href="ie6.css" media="all"
          type="text/css" />
  <![endif]-->
  <!--[if gt IE 6]>
    <link rel="stylesheet" href="ie.css" media="all"
          type="text/css" />
  <![endif]-->
```

```html
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" >
  <head><title>Conditional Stylesheet</title>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <link rel="stylesheet" href="page.css" media="all" type="text/css" /> <!--Embed the following style sheet only in IE 6 and higher-->
  <!--[if gt IE 5.5]>
    <link rel="stylesheet" href="ie6.css"
   <![endif]-->
  </head>
  media="all"
  type="text/css" />
   <body>
    <h1>Conditional Stylesheet</h1>
    <p class="test">In Internet Explorer 6, this box has a border and background.</p>
   </body>
  </html>
```

CSS page.css
```scss
  *.test  { font-size:18px; }
```

CSS ie6.css
```scss
  *.test  { border:2px solid black; background-color:gold; }
```
