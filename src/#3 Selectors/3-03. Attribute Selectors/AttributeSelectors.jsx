import './page.scss'
import './site.scss'

export function AttributeSelectors() {
  return (
    <div className="attribute-selectors">
      <h1>Attribute Selectors</h1>

      <p>
        This is a paragraph without the <code>title</code> attribute.
      </p>

      <p title="Second">
        <code>p[title]</code> selects all paragraphs containing a title attribute.
      </p>

      <p title="Third paragraph">
        <code>p[title~=&quot;paragraph&quot;]</code> selects all paragraphs with a title attribute containing the word,{' '}
        <code>paragraph</code>.
      </p>

      <p title="#4   paragraph">
        <code>p[title=&quot;#4 paragraph&quot;]</code> selects all paragraphs with a title attribute containing the exact text,{' '}
        <code>#4 paragraph</code>. Matches are case sensitive and must match letter-for-letter including whitespace.
      </p>

      <a href="http://www.example.com" target="_blank" rel="noreferrer" hrefLang="en-GB">
        hello
      </a>
    </div>
  )
}
