/* do not change this file, it is auto generated by storybook. */
import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';
import '@storybook/addon-ondevice-actions/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-notes/register';
import {
  addArgsEnhancer,
  addDecorator,
  addParameters,
  configure,
} from '@storybook/react-native';

import { decorators, parameters } from './preview';

if (decorators) {
  decorators.forEach(decorator => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

argsEnhancers.forEach(enhancer => addArgsEnhancer(enhancer));

const getStories = () => {
  return [require('../components/Button/Button.stories.tsx')];
};

configure(getStories, module, false);
