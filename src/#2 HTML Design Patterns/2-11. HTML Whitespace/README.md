HTML
```html
  <h1>HTML Whitespace</h1>
  <p> start middle &#x0020; &#x0009; <span> </span>
                                                                <span></span>
  end </p> <p>start<span class="border"> middle </span> end<em>—inside element</em></p>
  <p>start <span class="border"> middle</span> end<em>—outside element</em></p>
  <h2>Embedding Whitespace Inside Tags</h2> <p>start<span
  class =
  "spaced" >middle</span
  >end</p>
  <h2>Embedding Space Entities</h2>
  <code>&amp;zwnj; </code><span class="border">&zwnj;</span> &nbsp; <code>&amp;thinsp; </code><span class="border">&thinsp;</span> &nbsp;
  <h2>Controlling Where Whitespace Collapses</h2>
  <code>&amp;nbsp;
  <code>&amp;ensp;
  <code>&amp;emsp;
```

CSS
```scss
  em {
    padding-left: 50px;
  }

  p {
    font-family: monospace;
    font-size: 18px;
  }

  *.border {
    font-weight: bold;
    border-left: 2px solid black;
    border-right: 2px solid black;
  }
```
