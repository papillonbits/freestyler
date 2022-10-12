import './page.scss'
import './site.scss'
import starFile from './star.gif'

const starImage = { src: starFile, alt: 'star' }

export function Stretched() {
  return (
    <div className="stretched">
      <h1>Stretched</h1>
      <div className="gp">
        Positioned Grandparent
        <div className="parent">
          Non-positioned Parent
          <span id="inline" className="s">
            Cannot stretch a static inline
          </span>
          <div id="sized">
            <img id="star" src={starImage.src} alt={starImage.alt} />
          </div>
          <div id="block" className="s">
            Horizontally Stretched Static Block
          </div>
          <table id="table" className="s">
            <tbody>
              <tr>
                <td>Horiz. Stretched Table</td>
              </tr>
            </tbody>
          </table>
          <div id="abs-v" className="s">
            Vertically Stretched Absolute
          </div>
          <span id="abs-h" className="s">
            Horizontally Stretched Absolute
          </span>
          <span id="float" className="s">
            Almost Stretched Float
          </span>
        </div>
      </div>
    </div>
  )
}
