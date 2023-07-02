HTML
```html
 <h1>Display</h1>
<code>display:inline</code>
<p>p</p> <p>p</p> <p>p</p>
<ol><li>li</li><li>li</li><li>li</li></ol> <table><tr><td>td</td><td>td</td></tr><tr><td>td</td><td>td</td></tr></table>
<strong>strong <br /><code>display:inline-block</code></strong> <br /><br /> <em>em <code>display:block</code></em> <em>em</em> <br />
<div class="ul"><dfn>dfn <code>display:list-item</code></dfn><dfn>dfn</dfn></div> <br /><img src="star.gif" alt="star" /> <code>display:none</code>
```

CSS
```scss
  p,
  ol,
  li,
  table {
    display: inline;
  }

  strong {
    display: inline-block;
    width: 250px;
  }

  em {
    display: block;
  }

  dfn {
    display: list-item;
    list-style-type: square;
  }

  img {
    display: none;
  }

  *.ul {
    padding-left: 15px;
  }
```
