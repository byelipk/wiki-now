import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),

  classNames: ['wiki-wrapper'],
  tagName: 'form',

  actions: {
    close() {
      this.get('onClose')();
    },

    searchGithubAsync(term) {
      return this.get('searchGithub').perform(term);
    }
  },

  submit() {
    return false;
  },

  searchGithub: task(function * (term) {
    yield timeout(1000);

    const url = this.buildURL(term);

    try {
      const response = yield this.get('ajax').request(url);
      return response.items;
    } catch (e) {
      return [];
    }
  }).restartable(),

  buildURL(term) {
    if (term) {
      return `https://api.github.com/search/repositories` +
             `?q=${term}&order=desc&per_page=5`;
    }
  }


});
