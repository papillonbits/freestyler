import { withTests } from '@storybook/addon-jest'
import { BoxModel } from '../BoxModel'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#4 Box Models/4-02. Box Model',
  component: BoxModel,
  decorators: [withTests({ results })],
  parameters: { jest: ['BoxModel.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <BoxModel />
}
