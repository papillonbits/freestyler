import { withTests } from '@storybook/addon-jest'
import { TextReplacement } from '../TextReplacement'
import results from '../../../../.jest-test-results.json'

export default {
  title: '1 Design Patterns/1-03 Text Replacement',
  component: TextReplacement,
  decorators: [withTests({ results })],
  parameters: { jest: ['TextReplacement.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <TextReplacement />
}
