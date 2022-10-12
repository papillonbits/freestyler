import { regular } from './MultiPurposeBlockElements.int.story'

describe('<MultiPurposeBlockElements />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
