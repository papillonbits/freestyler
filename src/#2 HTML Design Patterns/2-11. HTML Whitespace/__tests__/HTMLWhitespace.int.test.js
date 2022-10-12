import { regular } from './HTMLWhitespace.int.story'

describe('<HTMLWhitespace />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
