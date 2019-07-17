import React from 'react';

import { storiesOf } from '@storybook/react';

import App from '../src';


storiesOf('Slider', module)
    .add('simple scroll to top', () => {
        return <App />
    });