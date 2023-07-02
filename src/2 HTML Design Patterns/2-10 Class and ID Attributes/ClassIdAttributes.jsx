import './page.scss'
import './site.scss'

export function ClassIdAttributes() {
  return (
    <div className="class-and-id-attributes">
      <h1>Class and ID Attributes</h1>

      <div id="hcalendar1" className="vevent">
        <h3 className="summary">Calendar Event Summary</h3>

        <p className="description">Calendar Event Description</p>

        <p>
          From
          <span className="dtstart" title="2007-05-01T08:30:00-05:00">
            01 May 2007 from 8:30am EST
          </span>{' '}
          to
          <span className="dtend" title="2007-05-01T09:30:00-05:00">
            9:30am EST
          </span>
        </p>

        <p>
          Location: <span className="location">Meeting Location</span>
        </p>
        <p>
          Booked by: <span className="uid">globally-unique-id.host.com</span>
          on{' '}
          <span className="dtstamp" title="20070101T231000Z">
            Jan 1, 2007 at 6:00pm
          </span>
        </p>
      </div>

      <p>
        See <a href="http://microformats.org/wiki/hcalendar">microformats.org</a>
        for more information about microformats.
      </p>
    </div>
  )
}
