import './page.scss'
import './site.scss'

export function PositionGroupSelectors() {
  return (
    <div className="position-group-selectors">
      <h1>Position and Group Selectors</h1>

      <p className="my-class">p.my-class</p>

      <div id="my-id">
        <ol>
          <li>div ol li</li>
          <li>div ol li</li>
          <li>
            <p className="my-class">div ol li p.my-class</p>
          </li>
        </ol>
      </div>
    </div>
  )
}
