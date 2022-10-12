import { regular } from './Shrinkwrapped.int.story'

describe('<Shrinkwrapped />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
