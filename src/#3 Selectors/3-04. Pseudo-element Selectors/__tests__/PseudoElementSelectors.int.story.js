import { withTests } from '@storybook/addon-jest'
import { PseudoElementSelectors } from '../PseudoElementSelectors'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#3 Selectors/3-04. Pseudo-element Selectors',
  component: PseudoElementSelectors,
  decorators: [withTests({ results })],
  parameters: { jest: ['PseudoElementSelectors.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <PseudoElementSelectors />
}
