import { withTests } from '@storybook/addon-jest'
import { HTMLWhitespace } from '../HTMLWhitespace'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#2 HTML Design Patterns/2-11. HTML Whitespace',
  component: HTMLWhitespace,
  decorators: [withTests({ results })],
  parameters: { jest: ['HTMLWhitespace.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <HTMLWhitespace />
}
