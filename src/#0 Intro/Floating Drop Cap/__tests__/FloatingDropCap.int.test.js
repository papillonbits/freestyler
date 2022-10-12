import { regular } from './FloatingDropCap.int.story'

describe('<FloatingDropCap />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
