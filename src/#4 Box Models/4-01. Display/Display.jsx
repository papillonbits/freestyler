import './page.scss'
import './site.scss'
import starFile from './star.gif'

const starImage = { src: starFile, alt: 'star' }

export function Display() {
  return (
    <div className="display">
      <h1>Display</h1>
      <code>display:inline</code>
      <p>p</p> <p>p</p> <p>p</p>
      <ol>
        {' '}
        <li>li</li> <li>li</li> <li>li</li>{' '}
      </ol>
      <table>
        <tr>
          <td>td</td>
          <td>td</td>
        </tr>
        <tr>
          <td>td</td>
          <td>td</td>
        </tr>
      </table>
      <strong>
        strong <br />
        <code>display:inline-block</code>
      </strong>{' '}
      <br />
      <br />
      <em>
        em <code>display:block</code>
      </em>{' '}
      <em>em</em> <br />
      <div className="ul">
        <dfn>
          dfn <code>display:list-item</code>
        </dfn>
        <dfn>dfn</dfn>
      </div>
      <br />
      <img src={starImage.src} alt={starImage.alt} /> <code>display:none</code>
      {/* The following code does not work in Internet Explorer 7 and earlier versions */}
      <div className="table">div display:table</div>
      <div className="row">div display:table-row</div>
      <div className="cell">div display:table-cell</div>
      <span className="inline-table">
        <span className="row">
          <span className="cell">span</span>
          <span className="cell">
            span <code>display:inline-table</code>
          </span>
        </span>
        <span className="row">
          <span className="cell">span</span>
          <span className="cell">span</span>
        </span>
      </span>
      <div className="table">
        <div className="row">
          <div className="cell">
            div <code>display:table</code>
          </div>
          <div className="cell">div</div>
        </div>
        <div className="row">
          <div className="cell">div</div>
          <div className="cell">div</div>
        </div>
      </div>
    </div>
  )
}
