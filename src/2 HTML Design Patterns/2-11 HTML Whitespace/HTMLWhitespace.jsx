import './page.scss'
import './site.scss'

export function HTMLWhitespace() {
  return (
    <div className="html-whitespace">
      <h1>HTML Whitespace</h1>
      <p>
        {' '}
        start middle &#x0020; &#x0009; <span> </span> <span />
        &#x000A; &#x000D; end{' '}
      </p>
      <h2>Controlling Where Whitespace Collapses</h2>
      <p>
        start<span className="border"> middle </span> end<em>—inside element</em>
      </p>
      <p>
        start <span className="border"> middle</span> end<em>—outside element</em>
      </p>
      <h2>Embedding Whitespace Inside Tags</h2>
      <p>
        start<span className="spaced">middle</span>end
      </p>
      <h2>Embedding Space Entities</h2>
      <code>&amp;zwnj; </code>
      <span className="border">&zwnj;</span> &nbsp;
      <code>&amp;thinsp; </code>
      <span className="border">&thinsp;</span> &nbsp;
      <code>&amp;nbsp; </code>
      <span className="border">&nbsp;</span> &nbsp;
      <code>&amp;ensp; </code>
      <span className="border">&ensp;</span> &nbsp;
      <code>&amp;emsp; </code>
      <span className="border">&emsp;</span> &nbsp;
    </div>
  )
}
