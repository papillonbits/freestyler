import { regular } from './PseudoClassSelectors.int.story'

describe('<PseudoClassSelectors />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
