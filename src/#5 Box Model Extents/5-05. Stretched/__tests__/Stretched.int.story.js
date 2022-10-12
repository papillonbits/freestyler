import { withTests } from '@storybook/addon-jest'
import { Stretched } from '../Stretched'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#5 Box Model Extents/5-05. Stretched',
  component: Stretched,
  decorators: [withTests({ results })],
  parameters: { jest: ['Stretched.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Stretched />
}
