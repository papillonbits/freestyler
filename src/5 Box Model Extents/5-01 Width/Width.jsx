import './page.scss'
import './site.scss'
import starFile from './star.gif'

const starImage = { src: starFile, alt: 'star' }

export function Width() {
  return (
    <div className="width">
      <h1>Width</h1>
      <div id="before">
        <div className="parent">
          <span className="static-inline-shrinkwrapped box">
            Static Inline Shrinkwrapped <br />
            Element
          </span>

          <div className="spacer" />

          <img className="replaced-inline-shrinkwrapped box" src={starImage.src} alt={starImage.alt} />
          <img className="replaced-inline-sized box" src={starImage.src} alt={starImage.alt} />
          <span className="sized">
            <img className="replaced-inline-stretched box" src={starImage.src} alt={starImage.alt} />
          </span>

          <div className="spacer" />

          <div className="static-block-sized box">Static Block Sized</div>
          <div className="static-block-stretched box">Static Block Stretched Auto</div>

          <div className="spacer" />

          <table className="table-shrinkwrapped box">
            <tbody>
              <tr>
                <td>Table Shrinkwrapped</td>
              </tr>
            </tbody>
          </table>
          <table className="table-sized box">
            <tbody>
              <tr>
                <td>Table Sized</td>
              </tr>
            </tbody>
          </table>
          <table className="table-stretched box">
            <tbody>
              <tr>
                <td>Table Stretched 100%</td>
              </tr>
            </tbody>
          </table>

          <div className="spacer" />

          <span className="float-shrinkwrapped box">Float Shrinkwrapped</span>
          <span className="float-sized box">Float Sized</span>
          <span className="float-stretched box">Float Stretched 100%</span>

          <span className="absolute-shrinkwrapped box">Absolute Shrinkwrapped</span>
          <span className="absolute-sized box">Absolute Sized</span>
          <span className="absolute-stretched box">Absolute Stretched Auto</span>
        </div>
      </div>
    </div>
  )
}
