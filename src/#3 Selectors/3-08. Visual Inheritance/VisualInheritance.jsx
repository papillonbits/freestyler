/* eslint-disable jsx-a11y/label-has-associated-control */
import './page.scss'
import './site.scss'

export function VisualInheritance() {
  return (
    <div className="visual-inheritance">
      <h1>Visual Inheritance</h1>
      <div>
        <p>
          <label>
            <span>
              - This span is nested inside a label, a paragraph, and a division. <br />
              - The division is assigned a background color, padding and a border. <br />
              - Since the span, label, and paragraph default to a transparent background color and have no border, they &quot;visually
              inherit&quot; the background, padding, and border of the division. <br />- Once you assign a background to an element, it no
              longer visually inherits the background of its parent—like this <code>&lt;code&gt;</code> element.
              <code>&lt;code&gt;</code> element.
            </span>
          </label>
        </p>
      </div>
    </div>
  )
}
