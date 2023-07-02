import { withTests } from '@storybook/addon-jest'
import { TableBox } from '../TableBox'
import results from '../../../../.jest-test-results.json'

export default {
  title: '4 Box Models/4-06 Table Box',
  component: TableBox,
  decorators: [withTests({ results })],
  parameters: { jest: ['TableBox.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <TableBox />
}
