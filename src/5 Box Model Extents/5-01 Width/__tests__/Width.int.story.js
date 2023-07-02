import { withTests } from '@storybook/addon-jest'
import { Width } from '../Width'
import results from '../../../../.jest-test-results.json'

export default {
  title: '5 Box Model Extents/5-01 Width',
  component: Width,
  decorators: [withTests({ results })],
  parameters: { jest: ['Width.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Width />
}
