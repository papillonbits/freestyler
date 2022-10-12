import './page.scss'
import './site.scss'

export function DOCTYPE() {
  return (
    <div className="doc-type">
      <h1>DOCTYPE</h1>
      <div>
        {' '}
        I recommend the following XHTML DOCTYPE:
        <ul>
          <li>It uses causes a document to be validated using XHTML.</li>
          <li>
            It uses transitional XHTML, which allows a few essential attributes, such as the <code>start</code> attribute in{' '}
            <code>&lt;</code>
            and the <code>value</code> attribute in <code>&lt;</code>.
          </li>
          <li>
            It places browsers into <em>almost-standards</em> mode, which is essential for styling in CSS.
          </li>
        </ul>
      </div>

      <p>
        &lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;
        &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;
      </p>

      <hr />
      <div> I recommend the following two HTML DOCTYPEs if you prefer HTML syntax.</div>

      <p>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;</p>

      <p>
        &lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;
        &quot;http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd&quot;
      </p>
    </div>
  )
}
