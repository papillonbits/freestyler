import { withTests } from '@storybook/addon-jest'
import { Sized } from '../Sized'
import results from '../../../../.jest-test-results.json'

export default {
  title: '5 Box Model Extents/5-03 Sized',
  component: Sized,
  decorators: [withTests({ results })],
  parameters: { jest: ['Sized.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Sized />
}
