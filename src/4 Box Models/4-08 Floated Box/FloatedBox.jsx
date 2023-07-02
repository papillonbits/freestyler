import './page.scss'
import './site.scss'

export function FloatedBox() {
  return (
    <div className="floated-box">
      <h1>Floated Box</h1>

      <div className="container">
        <div className="default">BEFORE</div>
        <div className="box small">FLOAT BEFORE</div>

        <div className="box">
          &uarr; <br /> Top <br /> &larr; Left &nbsp; &nbsp; &nbsp; Right &rarr; <br /> Bottom <br /> &darr;{' '}
        </div>

        <div className="box small">FLOAT AFTER</div>
        <div className="default">AFTER</div>
      </div>
    </div>
  )
}
