import { withTests } from '@storybook/addon-jest'
import { MultiPurposeBlockElements } from '../MultiPurposeBlockElements'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#2 HTML Design Patterns/2-08. Multi-purpose Block Elements',
  component: MultiPurposeBlockElements,
  decorators: [withTests({ results })],
  parameters: { jest: ['MultiPurposeBlockElements.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <MultiPurposeBlockElements />
}
