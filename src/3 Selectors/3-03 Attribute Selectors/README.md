HTML
```html
 <h1>Attribute Selectors</h1>
 <p>This is a paragraph without the <code>title</code> attribute.</p>
 <p title="Second">
  <code>p[title]</code> selects all paragraphs containing a title attribute.</p>
 <p title="Third paragraph">
  <code>p[title~="paragraph"]</code> selects all paragraphs with a
  title attribute containing the word, <code>paragraph</code>.</p>
 <p title="#4   paragraph">
  <code>p[title="#4   paragraph"]</code> selects all paragraphs with a
  title attribute containing the exact text, <code>#4   paragraph</code>. Matches
  are case-sensitive and must match letter-for-letter including whitespace.</p>
<a href="http://www.example.com” target="_blank" hreflang="en-GB">hello</a>
```

CSS
```scss
  code {
    white-space: pre;
  }

  p[title] {
    padding: 5px 10px;
    border: 1px solid gray;
  }

  p[title~="paragraph"] {
    background-color: gold;
  }

  p[title="#4 test paragraph"] {
    font-weight: bold;
  }

  a[href="http://www.example.com"][target="_blank"] {
    font-weight: bold;
  }

  p[type^="#4"] {
    color: grey
  }

  a[href$=".com"] {
    font-weight: bold;
  }

  p[title*="test"] {
    font-weight: bold;
  }
```
