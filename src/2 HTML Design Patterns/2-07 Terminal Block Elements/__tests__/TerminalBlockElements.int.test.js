import { regular } from './TerminalBlockElements.int.story'

describe('<TerminalBlockElements />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
