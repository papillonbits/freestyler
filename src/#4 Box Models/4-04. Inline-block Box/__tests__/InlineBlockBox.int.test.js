import { regular } from './InlineBlockBox.int.story'

describe('<InlineBlockBox />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
