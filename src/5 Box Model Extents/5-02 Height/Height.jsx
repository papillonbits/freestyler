import './page.scss'
import './site.scss'
import starFile from './star.gif'

const starImage = { src: starFile, alt: 'star' }

export function Height() {
  return (
    <div className="height">
      <h1>Height</h1>
      <div id="div1" className="parent">
        <div className="s1">
          <img className="replaced-inline-shrinkwrapped box" src={starImage.src} alt={starImage.alt} />
        </div>
        <div className="s2">
          <img className="replaced-inline-sized box" src={starImage.src} alt={starImage.alt} />
        </div>
        <div className="s3">
          <img className="replaced-inline-stretched box" src={starImage.src} alt={starImage.alt} />
        </div>{' '}
      </div>

      <div id="div2" className="parent">
        <div className="s1">
          <div className="block-shrinkwrapped box">Block Shrinkwrapped</div>
        </div>
        <div className="s2">
          <div className="block-sized box">Block Sized</div>
        </div>
        <div className="s3">
          <div className="block-stretched box">Block Stretched 100%</div>
        </div>{' '}
      </div>

      <div id="div3" className="parent">
        <div className="s1">
          <table className="table-shrinkwrapped box">
            <tbody>
              <tr>
                <td>Table Shrinkwrapped</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="s2">
          <table className="table-sized box">
            <tbody>
              <tr>
                <td>Table Sized</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="s3">
          <table className="table-stretched box">
            <tbody>
              <tr>
                <td>Table Stretched 100%</td>
              </tr>
            </tbody>
          </table>
        </div>{' '}
      </div>

      <div id="div4" className="parent">
        <span className="float-shrinkwrapped box">Float Shrinkwrapped</span>
        <span className="float-sized box">Float Sized</span>
        <span className="float-stretched box">Float Stretched 100%</span>{' '}
      </div>

      <div id="div5" className="parent">
        <span className="absolute-shrinkwrapped box">Absolute Shrinkwrapped</span>
        <span className="absolute-sized box">Absolute Sized</span>
        <span className="absolute-stretched box">Absolute Stretched Auto</span>{' '}
      </div>
    </div>
  )
}
