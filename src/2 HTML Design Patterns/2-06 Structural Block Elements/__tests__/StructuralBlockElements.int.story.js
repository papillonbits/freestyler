import { withTests } from '@storybook/addon-jest'
import { StructuralBlockElements } from '../StructuralBlockElements'
import results from '../../../../.jest-test-results.json'

export default {
  title: '2 HTML Design Patterns/2-06 Structural Block Elements',
  component: StructuralBlockElements,
  decorators: [withTests({ results })],
  parameters: { jest: ['StructuralBlockElements.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <StructuralBlockElements />
}
