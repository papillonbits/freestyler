import { regular } from './TextReplacement.int.story'

describe('<TextReplacement />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
