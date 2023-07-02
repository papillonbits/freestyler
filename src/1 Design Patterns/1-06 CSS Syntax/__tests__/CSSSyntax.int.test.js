import { regular } from './CSSSyntax.int.story'

describe('<CSSSyntax />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
