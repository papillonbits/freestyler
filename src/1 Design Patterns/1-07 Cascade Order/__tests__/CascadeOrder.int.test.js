import { regular } from './CascadeOrder.int.story'

describe('<CascadeOrder />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
