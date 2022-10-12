import { regular } from './LeftMarginal.int.story'

describe('<LeftMarginal />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
