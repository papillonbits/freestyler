HTML
```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>CSS Syntax</title>
      <meta http-equiv="Content-type" content="text/html; charset=utf-8" /> <link rel="stylesheet" href="page.css" media="all" type="text/css" />
      <style><!--
        body { color:black; background-color:white;
          background-color:rgb(100%,100%,100%);
          background-color:rgb(255,255,255);
          background-color:WindowInfoBackground; }
      --></style>
    </head>
    <body>
      <p>CSS syntax is <span style="font-style:italic;">EASY!</span></p>
    </body>
  </html>
```

CSS
```scss
  body {
    font-family: "Century Gothic", verdana, arial, sans-serif;
    font-size: 20px;
    line-height: 150%;
    margin: 1em;
    border: 4px double black;
    padding: 0.25em;
    background-image: url("gradient.gif");
    background-repeat: repeat-x;
  }

  p {
    margin: 0;
  }

  span {
    font-weight: 900;
  }
```
