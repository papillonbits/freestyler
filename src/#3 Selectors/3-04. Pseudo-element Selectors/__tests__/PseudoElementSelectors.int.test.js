import { regular } from './PseudoElementSelectors.int.story'

describe('<PseudoElementSelectors />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
