import './page.scss'
import './site.scss'

export function InlineBox() {
  return (
    <div className="inline-box">
      <h1>Inline Box</h1>

      <div className="container">
        <span className="default">BEFORE</span>

        <span className="box">&larr; Left &nbsp; &uarr; Top &nbsp; Bottom &darr; &nbsp; Right &rarr; </span>

        <span className="default">AFTER</span>
      </div>
    </div>
  )
}
