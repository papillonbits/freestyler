import { withTests } from '@storybook/addon-jest'
import { Shrinkwrapped } from '../Shrinkwrapped'
import results from '../../../../.jest-test-results.json'

export default {
  title: '5 Box Model Extents/5-04 Shrinkwrapped',
  component: Shrinkwrapped,
  decorators: [withTests({ results })],
  parameters: { jest: ['Shrinkwrapped.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Shrinkwrapped />
}
