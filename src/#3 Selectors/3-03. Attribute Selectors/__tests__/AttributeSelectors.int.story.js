import { withTests } from '@storybook/addon-jest'
import { AttributeSelectors } from '../AttributeSelectors'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#3 Selectors/3-03. Attribute Selectors',
  component: AttributeSelectors,
  decorators: [withTests({ results })],
  parameters: { jest: ['AttributeSelectors.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <AttributeSelectors />
}
