import { regular } from './TypeClassIdSelectors.int.story'

describe('<TypeClassIdSelectors />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
