import mockapiApi from "../../common/apis/mockapi.api";
import { localStorageItem } from "../../common/enums/local-storage-items.enum";

class AuthAPI {
    async signUp(name: string) {
        const apiUser = await mockapiApi.postUser();
    
        const user = {...apiUser, name};
    
        localStorage.setItem(localStorageItem.USER, JSON.stringify(user));
    }

    async signIn() {
        const apiUser = await mockapiApi.postUser();
        
        localStorage.setItem(localStorageItem.USER, JSON.stringify(apiUser));
    }
}

export default new AuthAPI;
