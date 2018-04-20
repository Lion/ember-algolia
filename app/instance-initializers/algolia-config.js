import { set } from '@ember/object';
import config from '../config/environment';
import algoliaSearch from 'algolia-search';

export function initialize( appInstance ) {
    const service = appInstance.lookup('service:algolia');
    const algoliaConfig = config['ember-algolia'];

    set(service, 'client', algoliaSearch(algoliaConfig.algoliaId, algoliaConfig.algoliaKey));

}

export default {
    name: 'algolia-config',
  initialize
	};
