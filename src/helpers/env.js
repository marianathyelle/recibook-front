import {OKTA_CONFIG} from '@env';

export const getOktaConfig = () => {
  return JSON.parse(OKTA_CONFIG);
}