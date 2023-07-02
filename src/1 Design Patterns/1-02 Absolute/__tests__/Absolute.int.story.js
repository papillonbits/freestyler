import { withTests } from '@storybook/addon-jest'
import { Absolute } from '../Absolute'
import results from '../../../../.jest-test-results.json'

export default {
  title: '1 Design Patterns/1-02 Absolute',
  component: Absolute,
  decorators: [withTests({ results })],
  parameters: { jest: ['Absolute.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Absolute />
}
