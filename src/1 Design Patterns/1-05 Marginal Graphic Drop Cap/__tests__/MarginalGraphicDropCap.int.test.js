import { regular } from './MarginalGraphicDropCap.int.story'

describe('<MarginalGraphicDropCap />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
