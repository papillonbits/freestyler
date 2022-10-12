import { withTests } from '@storybook/addon-jest'
import { SubclassSelector } from '../SubclassSelector'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#3 Selectors/3-06. Subclass Selector',
  component: SubclassSelector,
  decorators: [withTests({ results })],
  parameters: { jest: ['SubclassSelector.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <SubclassSelector />
}
