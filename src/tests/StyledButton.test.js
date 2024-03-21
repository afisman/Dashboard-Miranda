import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledButton } from '../components/reusable/StyledButton';

test('It checks button cursor and color when not sending props', () => {
    const tree = renderer.create(<StyledButton>Button</StyledButton>).toJSON();

    expect(tree).toHaveStyleRule('cursor', 'pointer')
    expect(tree).toHaveStyleRule('background-color', '#fff')

})

test('It checks button color when sending props $name', () => {
    const tree = renderer.create(<StyledButton $name='Booked'>Button</StyledButton>).toJSON();

    expect(tree).toHaveStyleRule('background-color', '#E23428')
})