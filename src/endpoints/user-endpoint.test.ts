import { UserEndpoint } from './user-endpoint';

jest.mock('./user-endpoint');
const spiedUserEndpointFetch = jest.spyOn(UserEndpoint, "fetchUser");

beforeEach(() => {
    spiedUserEndpointFetch.mockClear();
});


it('UserEndpoint fetch', async () => {
    UserEndpoint.fetchUser().then();
    expect(spiedUserEndpointFetch).toHaveBeenCalledTimes(1);
});


it('UserEndpoint fetch2', async () => {
    UserEndpoint.fetchUser().then();
    expect(spiedUserEndpointFetch).toHaveBeenCalledTimes(1);
});

export default undefined;
