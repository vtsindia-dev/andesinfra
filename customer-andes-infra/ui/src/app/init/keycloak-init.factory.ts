
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';


export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                await keycloak.init({
                    config: {
                        url: environment.loginUrl + '/auth',
                        realm: 'Customer',
                        clientId: 'customer-frontend',
                    },
                    initOptions: {
                        onLoad: 'login-required',
                        checkLoginIframe: false
                    },
                    loadUserProfileAtStartUp: true,
                    bearerExcludedUrls: []
                });
                resolve(1);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    };
}
