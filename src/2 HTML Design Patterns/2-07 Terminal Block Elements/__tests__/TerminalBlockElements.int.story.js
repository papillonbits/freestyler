import { withTests } from '@storybook/addon-jest'
import { TerminalBlockElements } from '../TerminalBlockElements'
import results from '../../../../.jest-test-results.json'

export default {
  title: '2 HTML Design Patterns/2-07 Terminal Block Elements',
  component: TerminalBlockElements,
  decorators: [withTests({ results })],
  parameters: { jest: ['TerminalBlockElements.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <TerminalBlockElements />
}
