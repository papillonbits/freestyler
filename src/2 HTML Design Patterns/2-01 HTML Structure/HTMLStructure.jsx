/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
export function HTMLStructure() {
  return (
    <div className="html-structure">
      <h1>HTML Structure</h1>

      <p>Paragraph</p>

      <ol>
        <li>Ordered List Item</li>
        <li>Ordered List Item</li>
      </ol>
      <ul>
        <li>Unordered List Item</li>
        <li>Unordered List Item</li>
      </ul>
      <dl>
        <dt>Definition Term</dt>
        <dt>Definition Term</dt>
        <dd>Definition Data</dd>
        <dd>Definition Data</dd>
      </dl>

      <table>
        <caption>Table Caption</caption>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <td>row1-col1</td>
            <td>row1-col2</td>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>row3-col1</td>
            <td>row3-col2</td>
          </tr>
        </tfoot>
        <tbody />
      </table>

      <form id="form1" method="post" action="http://www.tipjar.com/cgi-bin/test">
        <input type="hidden" title="input hidden" name="hidden" value="Secret" />

        <input id="radio1" name="radios" type="radio" value="radio1" checked="checked" />
        <label htmlFor="radio1">Radio1</label>

        <input id="radio2" name="radios" type="radio" value="radio2-pushed" />
        <label htmlFor="radio2">Radio2</label>

        <input id="xbox1" name="xbox1" type="checkbox" value="xbox1" checked="checked" />
        <label htmlFor="xbox1">Checkbox1</label>

        <label htmlFor="inputtext">Input-text</label>
        <input id="inputtext" name="inputtext" type="text" value="Type here" size="14" />

        <label htmlFor="select1">Select</label>
        <select id="select1" name="select" size="2">
          <option selected="selected" value="item1">
            Item1
          </option>
          <option value="item2">Item2</option>
        </select>

        <label htmlFor="textarea">Textarea</label>
        <textarea id="textarea" name="textarea" rows="2" cols="10">
          Textarea
        </textarea>

        <input type="submit" id="submit1" name="submit1" value="Submit" />
        <input type="reset" id="reset1" name="reset1" value="Reset" />
        <button type="submit" id="button1" name="button1" value="Button1">
          Button
        </button>
      </form>

      <div>
        Division within a Division{' '}
        <a id="link1" href="left.html">
          Link
        </a>
        <img src="left-right.gif" width="20" height="20" useMap="#map1" alt="alt text" />
        <map id="map1" name="map1">
          <area href="left.html" alt="left" shape="rect" coords="0,0,10,20" />
          <area href="right.html" alt="right" shape="rect" coords="10,0,20,20" />
        </map>
        <span>span</span>
        <em>em</em>
        <strong>strong</strong>
        <cite>cite</cite>
        <code>code</code>
        <kbd>kbd</kbd>
        <samp>samp</samp>
        <var>var</var>
        <abbr>abbr</abbr>
        <dfn>dfn</dfn>
        <sub>sub</sub>
        <sup>sup</sup>
        <bdo dir="rtl">backwards</bdo>
        <object type="application/x-shockwave-flash">
          <param name="movie" value="http://myserver.com/movie.swf" />
          <param name="allowfullscreen" value={true} />
        </object>
      </div>
      <article>
        <header>
          <h1>My blog post</h1>

          <p>
            <time pubdate dateTime="2011-10-07T10:00-08:00" />
          </p>
        </header>
        <p>
          The article element represents a self-contained composition in page that is independently distributable or reusable, e.g. in
          syndication.
        </p>
        <footer>
          <a href="?comments=1">Show comments...</a>
        </footer>
      </article>
      <section>
        <h1>First section heading</h1>

        <p>The section element represents a generic section of a document (thematic grouping of content).</p>
      </section>
      <section>
        <h1>And one more section</h1>

        <p>A page could be split into sections for an introduction, news items, contact information, etc.</p>
      </section>
      <nav>
        <h1>Some Navigation</h1>
        <ul>
          <li>
            <a href="articles.html">Index of articles</a>
          </li>
          <li>
            <a href="contact.html">Contact information</a>
          </li>
        </ul>
        <p>A nav element doesn&apos;t have to contain a list, it can contain other kinds of content as well.</p>
      </nav>
      <address>address</address>
    </div>
  )
}
