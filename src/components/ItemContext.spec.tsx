import * as React from 'react';
import { render } from 'react-testing-library';
import Accordion from './Accordion';
import { Consumer, Provider } from './ItemContext';

describe('ItemContext', () => {
    it('renders children props', () => {
        const { getByText } = render(
            <Accordion>
                <Provider uuid="FOO">
                    <Consumer>{(): string => 'Hello World'}</Consumer>
                </Provider>
            </Accordion>,
        );

        expect(getByText('Hello World')).toBeTruthy();
    });
});
