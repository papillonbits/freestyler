import { withTests } from '@storybook/addon-jest'
import { BlockBox } from '../BlockBox'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#4 Box Models/4-05. Block Box',
  component: BlockBox,
  decorators: [withTests({ results })],
  parameters: { jest: ['BlockBox.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <BlockBox />
}
