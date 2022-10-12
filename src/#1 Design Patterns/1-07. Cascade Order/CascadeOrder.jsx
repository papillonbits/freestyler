import './page.scss'

export function CascadeOrder() {
  return (
    <div className="cascade-order">
      <div id="i100" className="c10">
        !important has highest priority.
      </div>
    </div>
  )
}
