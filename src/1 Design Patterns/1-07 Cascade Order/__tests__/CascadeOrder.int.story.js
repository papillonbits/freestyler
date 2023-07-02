import { withTests } from '@storybook/addon-jest'
import { CascadeOrder } from '../CascadeOrder'
import results from '../../../../.jest-test-results.json'

export default {
  title: '1 Design Patterns/1-07 Cascade Order',
  component: CascadeOrder,
  decorators: [withTests({ results })],
  parameters: { jest: ['CascadeOrder.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <CascadeOrder />
}
