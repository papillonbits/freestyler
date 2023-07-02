import './site.scss'

export function StructuralBlockElements() {
  return (
    <div className="structural-block-elements">
      <h1>Structural Block Elements</h1>
      {/* Ordered List */}
      <ol>
        <li />
        <li> One or more list items... </li>
      </ol>

      {/* Unordered Lis */}
      <ul>
        <li />
        <li> One or more list items... </li>
      </ul>

      {/* Definition List */}
      <dl>
        <dt />
        <dt> One or more definition terms... </dt>
        <dd />
        <dd> One or more definitions... </dd>
      </dl>

      {/* Table */}
      <table>
        <caption> One optional caption per table. </caption>
        <colgroup>
          {' '}
          <col /> <col />{' '}
        </colgroup>
        <thead>
          <tr>
            <th> One or more header cells in a row... </th>
            <td> One or more data cells in a row... </td>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th> One or more rows in a row group... </th>
            <td />
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th> Zero or more row groups in a table... </th>
            <td />
          </tr>
        </tbody>
      </table>

      {/* Divisions */}
      <div>
        {' '}
        <div>
          {' '}
          <div> ... </div>{' '}
        </div>{' '}
      </div>
    </div>
  )
}
