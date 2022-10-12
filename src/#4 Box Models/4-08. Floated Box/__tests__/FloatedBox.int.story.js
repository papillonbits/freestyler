import { withTests } from '@storybook/addon-jest'
import { FloatedBox } from '../FloatedBox'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#4 Box Models/4-08. Floated Box',
  component: FloatedBox,
  decorators: [withTests({ results })],
  parameters: { jest: ['FloatedBox.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <FloatedBox />
}
