import { withTests } from '@storybook/addon-jest'
import { Inheritance } from '../Inheritance'
import results from '../../../../.jest-test-results.json'

export default {
  title: '3 Selectors/3-07 Inheritance',
  component: Inheritance,
  decorators: [withTests({ results })],
  parameters: { jest: ['Inheritance.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Inheritance />
}
