import React from 'react';
import UserProfile from './user-profile';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});


jest.mock('../../endpoints/user-endpoint');

const mock_role = "user";
jest.mock('../../endpoints/auth-endpoint', () => {
    return {
        fetchRole: () => {
            return Promise.resolve({role: mock_role});
        }
    };
});

const mock_color = "blue";
jest.mock('../../endpoints/prefs-endpoint', () => {
    return jest.fn().mockImplementation(() => {
        return {
            fetchPrefs: () => {
                return Promise.resolve({color: mock_color});
            }
        }
    });
});


beforeEach(() => {

});


const flushPromises = (ms: number = 0) => new Promise(resolve => {
    ms ? setInterval(resolve, ms) : setImmediate(resolve);
});

it('renders correctly', async () => {
    const tree = shallow(<UserProfile/>);
    await flushPromises();

    expect(tree.find(`[data-test='name']`).text()).toBe("Eduard");
    expect(tree.find(`[data-test='role']`).text()).toBe(mock_role);
    expect(tree.find(`[data-test='color']`).text()).toBe(mock_color);
});
