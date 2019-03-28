import React from 'react';
import Game from './game';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Game></Game>)
        .toJSON();

    expect(tree).toMatchSnapshot()
});
