import { withTests } from '@storybook/addon-jest'
import { Display } from '../Display'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#4 Box Models/4-01. Display',
  component: Display,
  decorators: [withTests({ results })],
  parameters: { jest: ['Display.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Display />
}
