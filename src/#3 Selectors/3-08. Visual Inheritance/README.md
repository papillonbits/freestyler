HTML
```html
 <h1>Visual Inheritance</h1>
<div>
<p> <label>
    <span>
     - This span is nested inside a label, a paragraph, and a division. <br />
     - The division is assigned a background color, padding, and a border. <br />
     - Since the span, label, and paragraph default to a transparent background
       color and have no border, they "visually inherit" the
       background, padding, and border of the division. <br />
     - Once you assign a background to an element, it no longer visually inherits
       the background of its parent—like this <code>&lt;code&gt;</code> element.
    </span>
   </label>
  </p>
</div>
```

CSS
```scss
  div {
    background-color: gold;
    color: black;
    padding: 10px 20px;
    border-left: 1px solid gray;
    border-right: 2px solid black;
    border-top: 1px solid gray;
    border-bottom: 2px solid black;
  }

  p {
    background-color: transparent;
    background-image: none;
  }

  label {
    background-color: transparent;
    background-image: none;
  }

  span {
    background-color: transparent;
    background-image: none;
  }

  code {
    background-color: firebrick;
    color: white;
  }
```
