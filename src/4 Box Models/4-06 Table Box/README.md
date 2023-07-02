HTML
```html
 <h1>Table Box Model</h1>
 <div class="container">
   <table class="default"><tr><td>BEFORE</td></tr></table>
   <table class="table">
     <tr><td class="cell">Table Cell </td><td class="cell">Table Cell </td></tr>
   </table>
   <table class="default"><tr><td>AFTER</td></tr></table>
 </div>
```

CSS
```scss
  *.table {
    border-collapse: separate;
    table-layout: auto;
    visibility: visible;
    width: auto;
    height: auto;
    margin: 30px 50px;
  }
```
