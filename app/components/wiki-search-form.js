import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
import Github from '../utils/github';

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
    const repo = this.get('selected');

    if (repo && repo.html_url) {
      window.open(repo.html_url, "_blank");
    }
    else {
      return false;
    }
  },

  didInsertElement() {
    this._super(...arguments);
    document.querySelector('input').focus();
  },

  searchGithub: task(function * (term) {
    yield timeout(250);

    const url = Github(term);

    try {
      const response = yield this.get('ajax').request(url);
      return response.items;
    } catch (e) {
      return [];
    }
  }).restartable()
});
