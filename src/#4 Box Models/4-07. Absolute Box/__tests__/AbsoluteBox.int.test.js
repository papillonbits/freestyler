import { regular } from './AbsoluteBox.int.story'

describe('<AbsoluteBox />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
