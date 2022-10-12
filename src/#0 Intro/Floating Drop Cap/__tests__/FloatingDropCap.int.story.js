import { withTests } from '@storybook/addon-jest'
import { FloatingDropCap } from '../FloatingDropCap'
import results from '../../../../.jest-test-results.json'

export default {
  title: '#0 Intro/Floating Drop Cap',
  component: FloatingDropCap,
  decorators: [withTests({ results })],
  parameters: { jest: ['FloatingDropCap.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <FloatingDropCap />
}
