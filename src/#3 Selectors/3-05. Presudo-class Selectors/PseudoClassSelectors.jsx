import './page.scss'
import './site.scss'

export function PseudoClassSelectors() {
  return (
    <div className="pseudo-class-selectors">
      <h1>Pseudo-class Selectors</h1>

      <p>
        <a href="http://www.cssdesignpatterns.com">a:link -- unvisited link</a>
        <a href="http://www.htmldesignpatterns.com">a:visited -- visited link</a>
        <a href="http://www.cssdesignpatterns.com">a:hover -- mouse hovering</a>
        <a href="http://www.cssdesignpatterns.com">a:active -- visiting a link</a>
      </p>
    </div>
  )
}
