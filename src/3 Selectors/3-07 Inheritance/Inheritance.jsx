import './page.scss'
import './site.scss'

export function Inheritance() {
  return (
    <div className="inheritance">
      <h1>Inheritance</h1>

      <div>
        <p>
          <em>
            <span>
              - This span inherits font from its ancestor, <code>&lt;body&gt;</code>. <br />- It inherits line-height from its ancestor,{' '}
              <code>&lt;div&gt;</code>. <br />- It inherits letter-spacing from its ancestor, <code>&lt;p&gt;</code>. <br />- It inherits
              italics from its ancestor, <code>&lt;em&gt;</code>, but it is also directly assigned to <code>font-style:normal </code> which
              overrides its inherited italics.
            </span>
          </em>
        </p>
      </div>
    </div>
  )
}
