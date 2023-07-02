import { withTests } from '@storybook/addon-jest'
import { DOCTYPE } from '../DOCTYPE'
import results from '../../../../.jest-test-results.json'

export default {
  title: '2 HTML Design Patterns/2-03 DOCTYPE',
  component: DOCTYPE,
  decorators: [withTests({ results })],
  parameters: { jest: ['DOCTYPE.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <DOCTYPE />
}
