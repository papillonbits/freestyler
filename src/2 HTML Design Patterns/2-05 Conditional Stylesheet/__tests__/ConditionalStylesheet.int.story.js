import { withTests } from '@storybook/addon-jest'
import { ConditionalStylesheet } from '../ConditionalStylesheet'
import results from '../../../../.jest-test-results.json'

export default {
  title: '2 HTML Design Patterns/2-05 Conditional Stylesheet',
  component: ConditionalStylesheet,
  decorators: [withTests({ results })],
  parameters: { jest: ['ConditionalStylesheet.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <ConditionalStylesheet />
}
