import './page.scss'

export function XHTML() {
  return (
    <div className="xhtml">
      <h1>XHTML</h1> <p>Paragraph</p> <br />
      Break
      <ol>
        {' '}
        <li>Ordered List Item</li> <li>Ordered List Item</li>{' '}
      </ol>
      <dl>
        {' '}
        <dt>Definition Term</dt> <dd>Definition Data</dd>{' '}
      </dl>
      <iframe title="html-example" src="html_example.html" />
    </div>
  )
}
