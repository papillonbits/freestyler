import { withTests } from '@storybook/addon-jest'
import { HeaderElements } from '../HeaderElements'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#2 HTML Design Patterns/2-04. Header Elements',
  component: HeaderElements,
  decorators: [withTests({ results })],
  parameters: { jest: ['HeaderElements.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <HeaderElements />
}
