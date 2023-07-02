import './page.scss'

export function CSSSyntax() {
  const spanStyle = {
    fontStyle: 'italic',
  }

  return (
    <div className="css-syntax">
      <p>
        CSS syntax is <span style={spanStyle}>EASY!</span>
      </p>
    </div>
  )
}
