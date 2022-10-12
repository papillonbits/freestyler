import { withTests } from '@storybook/addon-jest'
import { InlineBlockBox } from '../InlineBlockBox'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#4 Box Models/4-04. Inline Block Box',
  component: InlineBlockBox,
  decorators: [withTests({ results })],
  parameters: { jest: ['InlineBlockBox.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <InlineBlockBox />
}
