import './page.scss'
import './site.scss'

export function MarginalGraphicDropCap() {
  return (
    <div className="marginal-graphic-dropcap">
      <h1>Marginal Graphic Drop Cap</h1>
      <p className="marginal-graphic-dropcap__indent">
        <span className="marginal-graphic-dropcap__graphic-dropcap">
          M<span />
        </span>
        arginal Graphic Dropcap. The letter M has been covered by the dropcap image. Screen readers read the text and visual users see the
        image. If the browser cannot display the dropcap image, the text becomes visible.
      </p>
    </div>
  )
}
