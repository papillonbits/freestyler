import { regular } from './AttributeSelectors.int.story'

describe('<AttributeSelectors />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
