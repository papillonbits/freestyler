import { withTests } from '@storybook/addon-jest'
import { MarginalGraphicDropCap } from '../MarginalGraphicDropCap'
import results from '../../../../.jest-test-results.json'

export default {
  title: '1 Design Patterns/1-05 Marginal Graphic Drop Cap',
  component: MarginalGraphicDropCap,
  decorators: [withTests({ results })],
  parameters: { jest: ['MarginalGraphicDropCap.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <MarginalGraphicDropCap />
}
