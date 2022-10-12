import { withTests } from '@storybook/addon-jest'
import { XHTML } from '../XHTML'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#2 HTML Design Patterns/2-02. XHTML',
  component: XHTML,
  decorators: [withTests({ results })],
  parameters: { jest: ['XHTML.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <XHTML />
}
