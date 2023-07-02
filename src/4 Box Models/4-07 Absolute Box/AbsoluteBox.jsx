import './page.scss'
import './site.scss'

export function AbsoluteBox() {
  return (
    <div className="absolute-box">
      <h1>Absolute Box</h1>

      <div className="container">
        <div className="default">BEFORE</div>
        <div className="box before">ABSOLUTE BEFORE</div>

        <div className="box">
          &uarr; <br /> Top <br /> &larr; Left &nbsp; &nbsp; &nbsp; Right &rarr; <br /> Bottom <br /> &darr;{' '}
        </div>

        <div className="box after">ABSOLUTE AFTER</div>
        <div className="default">AFTER</div>
      </div>
    </div>
  )
}
