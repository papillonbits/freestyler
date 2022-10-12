```
Here are the six selector groups listed from highest to lowest priority:

1. The highest-priority group contains rules with !important added to them. They override all non-!important rules. For example, #i100{border:6px solid -black!important;} takes priority over #i100{border:6px solid black;}.
2. The second-highest-priority group contains rules embedded in the style attribute. Since using the style attribute creates hard-to-maintain code, I do not recommend using it.
3. The third-highest-priority group contains rules that have one or more ID selectors. For example, #i100{border:6px solid black;} takes priority over *.c10{border:4px solid black;}.
4. The fourth-highest-priority group contains rules that have one or more class, attribute, or pseudo selectors. For example, *.c10{border:4px solid black;} takes priority over div{border:2px solid black;}.
5. The fifth-highest-priority group contains rules that have one or more element selectors. For example, div{border:2px solid black;} takes priority over *{border:0px solid black;}.
6. The lowest-priority group contains rules that have only a universal selector— for example, *{border:0px solid black;}.
```

```
The six locations are listed here from highest to lowest priority:

1. The highest-priority location is the <style> element in the head of the HTML document. For example, a rule in <style> overrides a competing rule in a style sheet imported by an @import statement embedded within <style>.
2. The second-highest-priority location is a style sheet imported by an @import statement embedded within the <style> element. For example, a rule in a style sheet imported by an @import statement embedded within <style> overrides a competing rule in a style sheet attached by a <link> element.
3. The third-highest-priority location is a style sheet attached by a <link> element. For example, a rule in a style sheet attached by a <link> element overrides a competing rule imported by an @import statement embedded within the style sheet.
4. The fourth-highest-priority location is a style sheet imported by an @import statement embedded within a style sheet attached by a <link> element. For example, a rule imported by an @import statement embedded within a linked style sheet overrides a competing rule in a style sheet attached by an end user.
5. The fifth-highest-priority location is a style sheet attached by an end user.
• An exception is made for !important rules in an end-user style sheet. These rules are given the highest priority. This allows an end user to create rules to override competing rules in an author’s style sheet.
6. The lowest-priority location is the default style sheet supplied by a browser.
```

HTML
```html
  <body>
    <div id="i100" class="c10">!important has highest priority.</div>
  </body>
```

CSS
```scss
  html,
  body {
    border-style: none !important;
  }

  * {
    border: 0px solid black;
  }

  div {
    border: 2px solid black;
  }

  *.c10 {
    border: 4px solid black;
  }

  #i100 {
    border: 6px solid black;
  }

  /* Universal Selector */

  /* Element Selector */

  /* Secondary Selector */

  /* ID Selector */
  * {
    border: 8px solid black !important;
  }

  div {
    border: 10px solid black !important;
  }

  *.c10 {
    border: 12px solid black !important;
  }

  #i100 {
    border: 14px solid black !important;
  }

  /* !Universal Selector */

  /* !Element Selector */

  /* !Secondary Selector */

  /* !ID Selector */
```
