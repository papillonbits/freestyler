import { regular } from './ConditionalStylesheet.int.story'

describe('<ConditionalStylesheet />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
