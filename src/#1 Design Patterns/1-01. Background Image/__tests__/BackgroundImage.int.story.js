import { withTests } from '@storybook/addon-jest'
import { BackgroundImage } from '../BackgroundImage'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#1 Design Patterns/1-01. Background Image',
  component: BackgroundImage,
  decorators: [withTests({ results })],
  parameters: { jest: ['BackgroundImage.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <BackgroundImage />
}
