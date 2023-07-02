/* eslint-disable jsx-a11y/label-has-associated-control */
import './site.scss'

export function MultiPurposeBlockElements() {
  return (
    <div className="multi-purpose-block-elements">
      <div>
        <div>
          <h1>Multi-purpose Block Elements</h1>
        </div>
      </div>

      {/* The following code is invalid HTML and broken structure. */}
      <ol>
        This content is inside a list but is not inside a list item like it should be.
        <li> This content is properly nested in a list item. </li>
        This content outside a list item invalidates and destroys the structure of a list.
      </ol>

      {/* The following code is _valid_ HTML due to a loophole in HTML’s DTD, but is still broken structure. */}
      <div>
        Compare the mixed content in this division with that of the preceding list.
        <div> This content is inside a nested structural division. </div>
        This <em>mixed content</em> is not invalid, but it destroys the block structure and requires a browser to create{' '}
        <em>anonymous blocks</em> in which to render it.
      </div>

      {/* The following form contains blocks, which in turn contain controls. */}
      <form id="form1" method="post" action="http://www.tipjar.com/cgi-bin/test">
        <ul>
          <li>
            <input type="checkbox" id="xbox1" name="xbox1" value="xbox1" />
            <label htmlFor="xbox1">Checkbox1</label>
          </li>
          <li>
            <input type="submit" id="submit1" name="submit1" value="Submit" />
          </li>
        </ul>
      </form>
    </div>
  )
}
