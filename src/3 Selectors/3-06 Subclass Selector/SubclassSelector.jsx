import './page.scss'
import './site.scss'

export function SubclassSelector() {
  return (
    <div className="subclass-selector">
      <h1>Subclass Selector</h1>

      <div>
        <p className="button square">Square</p>
        <p className="button rounded">Rounded</p>
        <p className="button go">Go</p>
      </div>
    </div>
  )
}
