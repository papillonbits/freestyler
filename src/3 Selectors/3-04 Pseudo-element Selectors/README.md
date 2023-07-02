HTML
```html
   <h1>Pseudo-element Selectors</h1>
  <p><code>first-letter</code> selects the first letter, and <code>first-line</code> selects the first line of a terminal block element, like this paragraph.</p>
  <div><span>Pseudo-element selectors do not work on inline elements.</span></div>
  <dl>
    <dt>Pseudo-element selectors do not work on structural block elements.</dt>
   </dl>
```

CSS
```scss
  p:first-line {
    font-weight: bold;
    word-spacing: 2px;
    letter-spacing: 1px;
  }

  p:first-letter {
    font-size: 48px;
  }

  span:first-line {
    font-weight: bold;
    word-spacing: 2px;
    letter-spacing: 1px;
  }

  span:first-letter {
    font-size: 48px;
  }

  dl:first-line {
    font-weight: bold;
    word-spacing: 2px;
    letter-spacing: 1px;
  }

  dl:first-letter {
    font-size: 48px;
  }
```
