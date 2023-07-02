import { regular } from './SubclassSelector.int.story'

describe('<SubclassSelector />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
