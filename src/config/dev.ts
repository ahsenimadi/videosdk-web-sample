import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'Migo_tHETuGH12tZL5g2mw',
  sdkSecret: '9idy5xc9uxWwQQt3AURgrol95UTbt5bIX5Ox',
  webEndpoint: 'zoom.us', // zfg use www.zoomgov.com
  topic: '',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '',
  signature: '',
  sessionKey: '',
  userIdentity: '',
  // The user role. 1 to specify host or co-host. 0 to specify participant, Participants can join before the host. The session is started when the first user joins. Be sure to use a number type.
  role: 1
};
