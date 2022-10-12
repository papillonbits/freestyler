import './page.scss'
import './site.scss'

export function TableBox() {
  return (
    <div className="table-box">
      <h1>Table Box</h1>

      <div className="container">
        <table className="default">
          <tr>
            <td>BEFORE</td>
          </tr>
        </table>

        <table className="table">
          <tr>
            <td className="cell">Table Cell </td>
            <td className="cell">Table Cell</td>
          </tr>
        </table>

        <table className="default">
          <tr>
            <td>AFTER</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
