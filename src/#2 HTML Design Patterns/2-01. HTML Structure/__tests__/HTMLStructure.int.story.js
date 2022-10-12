import { withTests } from '@storybook/addon-jest'
import { HTMLStructure } from '../HTMLStructure'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#2 HTML Design Patterns/2-01. HTML Structure',
  component: HTMLStructure,
  decorators: [withTests({ results })],
  parameters: { jest: ['HTMLStructure.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <HTMLStructure />
}
