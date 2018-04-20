
import config from '../config/environment';
import { set } from '@ember/object';
import algoliaSearch from 'algolia-search';

export function initialize( appInstance ) {
  if (typeof FastBoot !== 'undefined') {
    const service = appInstance.lookup('service:algolia');
    const algoliaConfig = config['ember-algolia'];

    set(service, 'client', algoliaSearch(algoliaConfig.algoliaId, algoliaConfig.algoliaKey));
  }

}

export default {
  name: 'algolia-config',
  initialize
};
