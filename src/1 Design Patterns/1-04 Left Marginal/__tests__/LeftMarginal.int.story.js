import { withTests } from '@storybook/addon-jest'
import { LeftMarginal } from '../LeftMarginal'
import results from '../../../../.jest-test-results.json'

export default {
  title: '1 Design Patterns/1-04 Left Marginal',
  component: LeftMarginal,
  decorators: [withTests({ results })],
  parameters: { jest: ['LeftMarginal.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <LeftMarginal />
}
