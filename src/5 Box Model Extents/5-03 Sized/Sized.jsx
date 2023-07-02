import './page.scss'
import './site.scss'
import starFile from './star.gif'

const starImage = { src: starFile, alt: 'star' }

export function Sized() {
  return (
    <div className="sized">
      <h1>Sized</h1>
      <div className="gp">
        Positioned Grandparent
        <div className="parent">
          Non-positioned Parent
          <div id="float" className="z">
            Sized Float
          </div>
          <div id="static" className="z">
            Sized Static
          </div>
          <table id="table" className="z">
            <tbody>
              <tr>
                <td>Sized Table</td>
              </tr>
            </tbody>
          </table>
          <span id="abs" className="z">
            Sized Absolute
            <img id="star" src={starImage.src} alt={starImage.alt} />
          </span>
        </div>
      </div>
    </div>
  )
}
