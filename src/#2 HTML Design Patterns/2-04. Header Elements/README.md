HTML
```html
  <head>
  <base href="http://www.example.com/">
   <link rel="stylesheet" href="FILE.CSS"
         media="ALL_PRINT_HANDHELD" type="text/css" />
   <link rel="alternate stylesheet" type="text/css"
         title="NAME_TO_SHOW_USER" href="FILE.css" />
   <style type="text/css" media="all"> STYLES </style>
  </head>
```

```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" >
   <head>
    <title>Header Elements</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <!-- Include links to stylesheets -->
    <link rel="stylesheet" href="site.css"   media="all"    type="text/css" />
    <link rel="stylesheet" href="page.css"   media="all"    type="text/css" />
    <link rel="stylesheet" href="print.css"  media="print"  type="text/css" />
    <!--[if lte IE 6]>
    <link rel="stylesheet" href="ie6.css"    media="all"    type="text/css" />
    <![endif]-->
    <!-- Optionally include alternate style sheets that the user can apply. -->
    <link rel="alternate stylesheet" type="text/css" title="cool" href="cool.css" />
    <link rel="alternate stylesheet" type="text/css" title="hot"  href="hot.css"  />
    <!-- Optionally include style rules that apply only to this page. -->
    <style type="text/css" media="all">
     body  { margin:0px; padding:20px; padding-top:0px; width:702px;
            font-family:verdana,arial,sans-serif; font-size:medium; }
     h1    { margin:10px 0 10px 0; font-size:1.9em;  }
  </style>
    <!-- Optionally link to a JavaScript file. -->
    <script type="text/javascript" src="script.js" ></script>
    <!-- Optionally include JavaScript that applies only to this page. -->
    <script type="text/javascript" ><!--
     alert("Hello World!");
    --></script>
  </head>
   <body>  <h1>Header Elements</h1>  </body>
  </html>
```
