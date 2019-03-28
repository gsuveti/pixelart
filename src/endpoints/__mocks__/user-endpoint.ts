export class UserEndpoint {

    static fetchUser() {
        return Promise.resolve({
            name: "Eduard"
        });
    };
}
