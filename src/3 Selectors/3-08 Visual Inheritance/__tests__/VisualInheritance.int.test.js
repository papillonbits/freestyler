import { regular } from './VisualInheritance.int.story'

describe('<VisualInheritance />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
