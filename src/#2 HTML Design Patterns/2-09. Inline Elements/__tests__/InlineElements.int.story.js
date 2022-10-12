import { withTests } from '@storybook/addon-jest'
import { InlineElements } from '../InlineElements'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#2 HTML Design Patterns/2-09. Inline Elements',
  component: InlineElements,
  decorators: [withTests({ results })],
  parameters: { jest: ['InlineElements.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <InlineElements />
}
