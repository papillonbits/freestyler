import './page.scss'
import './site.scss'

export function ConditionalStylesheet() {
  return (
    <div className="conditional-stylesheet">
      <h1>Conditional Stylesheet</h1>

      <p className="conditional-stylesheet__test">
        In Internet Explorer 6, this box has a border and background. Look at the README for the full document
      </p>
    </div>
  )
}
