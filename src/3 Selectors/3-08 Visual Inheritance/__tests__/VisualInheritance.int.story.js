import { withTests } from '@storybook/addon-jest'
import { VisualInheritance } from '../VisualInheritance'
import results from '../../../../.jest-test-results.json'

export default {
  title: '3 Selectors/3-08 Visual Inheritance',
  component: VisualInheritance,
  decorators: [withTests({ results })],
  parameters: { jest: ['VisualInheritance.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <VisualInheritance />
}
