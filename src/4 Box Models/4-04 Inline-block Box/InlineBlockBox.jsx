import './page.scss'
import './site.scss'
import starFile from './star.gif'

const starImage = { src: starFile, alt: 'star' }

export function InlineBlockBox() {
  return (
    <div className="inline-block-box">
      <h1>Inline-block Box</h1>

      <div className="container">
        <span className="default">BEFORE</span>
        <img className="replaced-box" src={starImage.src} alt={starImage.alt} />
        <span className="default">AFTER</span>

        <span className="default">BEFORE</span>
        <span className="inline-box">Inline element displayed as an inline block.</span>
        <span className="default">AFTER</span>
      </div>
    </div>
  )
}
