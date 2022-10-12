import './page.scss'
import './site.scss'

export function BlockBox() {
  return (
    <div className="block-box">
      <h1>Block Box</h1>

      <div className="container">
        <div className="default">BEFORE</div>

        <div className="box">
          {' '}
          &uarr; <br />
          Top <br />
          &larr; Left &nbsp; &nbsp; &nbsp; Right &rarr; <br />
          Bottom <br />
          &darr;{' '}
        </div>

        <div className="default">AFTER</div>
      </div>
    </div>
  )
}
