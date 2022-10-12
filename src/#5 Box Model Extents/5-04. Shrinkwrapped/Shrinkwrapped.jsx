import './page.scss'
import './site.scss'
import starFile from './star.gif'

const starImage = { src: starFile, alt: 'star' }

export function Shrinkwrapped() {
  return (
    <div className="shrinkwrapped">
      <h1>Shrinkwrapped</h1>

      <div className="gp">
        Positioned Grandparent
        <div className="parent">
          Non-positioned Parent
          <span id="float" className="z">
            Shrinkwrapped Float
          </span>
          <span id="inline" className="z">
            Shrinkwrapped Static Inline
          </span>
          <br />
          <img id="star" src={starImage.src} alt={starImage.alt} />
          <div id="block" className="z">
            Vertically Shrinkwrapped Static Block
          </div>
          <table id="table" className="z">
            <tbody>
              <tr>
                <td>Shrinkwrapped Table</td>
              </tr>
            </tbody>
          </table>
          <span id="abs" className="z">
            Shrinkwrapped Absolute
          </span>
        </div>
      </div>
    </div>
  )
}
