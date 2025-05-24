import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;

  public get keycloak(): Keycloak {
    if(!this._keycloak) {
      this._keycloak = new Keycloak({
        url: environment.url,
        realm: environment.realm,
        clientId: environment.clientId
      });
    }
    return this._keycloak;
  }

  public async init(): Promise<void> {
    await this.keycloak.init({onLoad: 'login-required'});
  }

}
