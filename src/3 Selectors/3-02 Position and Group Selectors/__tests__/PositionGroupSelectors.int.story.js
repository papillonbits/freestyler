import { withTests } from '@storybook/addon-jest'
import { PositionGroupSelectors } from '../PositionGroupSelectors'
import results from '../../../../.jest-test-results.json'

export default {
  title: '3 Selectors/3-02 Position and Group Selectors',
  component: PositionGroupSelectors,
  decorators: [withTests({ results })],
  parameters: { jest: ['PositionGroupSelectors.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <PositionGroupSelectors />
}
