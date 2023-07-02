import { withTests } from '@storybook/addon-jest'
import { TypeClassIdSelectors } from '../TypeClassIdSelectors'
import results from '../../../../.jest-test-results.json'

export default {
  title: '3 Selectors/3-01 Type Class and ID Selectors',
  component: TypeClassIdSelectors,
  decorators: [withTests({ results })],
  parameters: { jest: ['TypeClassIdSelectors.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <TypeClassIdSelectors />
}
