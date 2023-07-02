import './page.scss'
import './site.scss'

export function Absolute() {
  return (
    <div className="absolute">
      <h1>Absolute</h1>

      <div className="absolute__positioned">
        <span className="absolute__absolute">Sized Absolute</span>
      </div>
    </div>
  )
}
