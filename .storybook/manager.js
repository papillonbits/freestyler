import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: `Freestyler`,
    brandUrl: 'https://github.com/papillonbits/freestyler',
    brandImage: 'https://avatars2.githubusercontent.com/u/81188645',
  }),
})
