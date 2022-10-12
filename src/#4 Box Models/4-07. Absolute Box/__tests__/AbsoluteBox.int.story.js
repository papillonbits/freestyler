import { withTests } from '@storybook/addon-jest'
import { AbsoluteBox } from '../AbsoluteBox'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#4 Box Models/4-07. Absolute Box',
  component: AbsoluteBox,
  decorators: [withTests({ results })],
  parameters: { jest: ['AbsoluteBox.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <AbsoluteBox />
}
