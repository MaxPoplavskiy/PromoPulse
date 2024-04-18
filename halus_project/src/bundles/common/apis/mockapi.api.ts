import { APIRoutes } from "../enums/api-routes.enum";
import { MockAPIEndpoints } from "../enums/mockapi-enpoints.enum";

class MockAPI {
    async postUser() {
        const response = await fetch(`${APIRoutes.MOCKAPI}${MockAPIEndpoints.USERS}`, {
            method: 'POST'
        });

        return response.json();
    }
}

export default new MockAPI();