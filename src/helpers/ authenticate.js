import { OktaAuth } from '@okta/okta-auth-js';
import { Url } from 'url-parse';
import { getOktaConfig } from './env';

export const authenticate = async () => {
  let oktaAuthConfig = getOktaConfig();

  const {origin} = new Url(oktaAuthConfig.discoveryUri);

  oktaAuthConfig = {
    ...oktaAuthConfig,
    issuer: origin
  }

  const authClient = new OktaAuth(oktaAuthConfig);

  
}