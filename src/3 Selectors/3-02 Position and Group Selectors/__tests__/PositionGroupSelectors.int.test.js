import { regular } from './PositionGroupSelectors.int.story'

describe('<PositionGroupSelectors />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
