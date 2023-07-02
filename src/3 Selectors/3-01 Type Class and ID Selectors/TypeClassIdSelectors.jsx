import './page.scss'
import './site.scss'

export function TypeClassIdSelectors() {
  return (
    <div className="type-class-id-selectors">
      <h1>Type, Class, and ID Selectors</h1>

      <p>
        The type selector, <code>p</code>, adds a border to all paragraphs.
      </p>

      <p className="my-class1">
        The class selector, <code>*.my-class1</code>, adds padding.
      </p>

      <p className="my-class1 my-class2">
        The class selector, <code>*.my-class2</code>, adds letter-spacing.
      </p>

      <p className="my-class1 my-class2" id="my-id">
        The ID selector, <code>#my-id</code>, adds a background color.
      </p>
    </div>
  )
}
