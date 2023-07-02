import { withTests } from '@storybook/addon-jest'
import { ClassIdAttributes } from '../ClassIdAttributes'
import results from '../../../../.jest-test-results.json'

export default {
  title: '2 HTML Design Patterns/2-10 Class and Id Attributes',
  component: ClassIdAttributes,
  decorators: [withTests({ results })],
  parameters: { jest: ['ClassIdAttributes.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <ClassIdAttributes />
}
