import { withTests } from '@storybook/addon-jest'
import { Height } from '../Height'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#5 Box Model Extents/5-02. Height',
  component: Height,
  decorators: [withTests({ results })],
  parameters: { jest: ['Height.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Height />
}
