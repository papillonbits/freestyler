import { regular } from './HeaderElements.int.story'

describe('<HeaderElements />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
