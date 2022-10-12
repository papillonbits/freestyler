import { regular } from './StructuralBlockElements.int.story'

describe('<StructuralBlockElements />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
