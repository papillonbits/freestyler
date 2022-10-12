import './page.scss'
import './site.scss'

export function PseudoElementSelectors() {
  return (
    <div className="pseudo-element-selectors">
      <h1>Pseudo-element Selectors</h1>

      <p>
        <code>first-letter</code> selects the first letter, and
        <code>first-line</code> selects the first line of a terminal block element, like this paragraph.
      </p>

      <div>
        <span>Pseudo-element selectors do not work on inline elements.</span>
      </div>

      <dl>
        <dt>Pseudo-element selectors do not work on structural block elements.</dt>
      </dl>
    </div>
  )
}
