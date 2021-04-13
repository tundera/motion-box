// Adapted from https://github.com/UnlyEd/next-right-now/blob/e5aba8eaf02918d9506008ee1f11c38954fedc86/.storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

/**
 * Configure Storybook UI layout.
 *
 * XXX The Storybook manager seems to suffer from a cache invalidation issue, which forces us to run with `--no-manager-cache` option.
 *  @see https://github.com/storybookjs/storybook/issues/13649#issuecomment-761076960
 *  @see https://github.com/storybookjs/storybook/issues/13200
 *
 * @see https://storybook.js.org/docs/react/configure/features-and-behavior
 */
addons.setConfig({
  theme: themes.normal,
});
