import './page.scss'
import './site.scss'

export function BoxModel() {
  return (
    <div className="box-model">
      <h1>Box Model</h1>

      <div className="box" />

      {/* Code for creating labels and extra borders */}
      <span id="outer-box" />
      <span id="outer" className="label">
        Outer Box
      </span>
      <span id="margin" className="label">
        Margin{' '}
      </span>
      <span id="border" className="label white">
        Border{' '}
      </span>
      <span id="padding" className="label">
        Padding{' '}
      </span>
      <span id="inner" className="label">
        Inner Box
      </span>
      <span id="content" className="label">
        <br />
        <br />
        &uarr; <br /> Top
        <br /> &larr; Left &nbsp; &nbsp; &nbsp;Right &rarr;
        <br /> Bottom <br /> &darr;{' '}
      </span>
    </div>
  )
}
