import { withTests } from '@storybook/addon-jest'
import { InlineBox } from '../InlineBox'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#4 Box Models/4-03. Inline Box',
  component: InlineBox,
  decorators: [withTests({ results })],
  parameters: { jest: ['InlineBox.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <InlineBox />
}
