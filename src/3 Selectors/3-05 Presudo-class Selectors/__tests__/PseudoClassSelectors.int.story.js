import { withTests } from '@storybook/addon-jest'
import { PseudoClassSelectors } from '../PseudoClassSelectors'
import results from '../../../../.jest-test-results.json'

export default {
  title: '3 Selectors/3-05 Pseudo-class Selectors',
  component: PseudoClassSelectors,
  decorators: [withTests({ results })],
  parameters: { jest: ['PseudoClassSelectors.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <PseudoClassSelectors />
}
