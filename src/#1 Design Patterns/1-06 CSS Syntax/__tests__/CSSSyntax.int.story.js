import { withTests } from '@storybook/addon-jest'
import { CSSSyntax } from '../CSSSyntax'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#1 Design Patterns/1-06. CSS Syntax',
  component: CSSSyntax,
  decorators: [withTests({ results })],
  parameters: { jest: ['CSSSyntax.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <CSSSyntax />
}
