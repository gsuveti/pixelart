export class UserEndpoint {

    static fetchUser() {
        return fetch("http://www.mocky.io/v2/5c9b3fe33500006600d0ca4b")
            .then(function (response) {
                return response.json();
            });
    };

}
