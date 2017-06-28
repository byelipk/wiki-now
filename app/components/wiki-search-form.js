import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const users = [
  { name: 'Nathan', assignment: 'CLI' },
  { name: 'Rober', assignment: 'Whatnot' },
  { name: 'Leah', assignment: 'Community' },
  { name: 'Sean', assignment: 'Sex' },
  { name: 'COnor', assignment: 'Beach' }
];

export default Ember.Component.extend({
  ajax: Ember.inject.service(),

  classNames: ['wiki-wrapper', 'rise-up'],
  classNameBindings: ['dropDown'],
  tagName: 'form',

  dropDown: false,

  actions: {
    close() {
      this.toggleProperty('dropDown');
    },

    onKeyDown() {
      return false;  // ignore everything
    },

    onKeyPress(dropdown, evt) {
      dropdown.actions.open(evt);
    }
  },

  didInsertElement() {
    document.querySelector("input[type='text']").focus();
  },

  animationEnd() {
    if (this.get('dropDown')) {
      this.sendAction('onClose');
    }
  },

  submit(evt) {
    evt.preventDefault();
  },

  searchGithub: task(function * (dropdown, evt) {
    const term = evt.target.value;
    const url  = this.buildURL(term);

    let response = yield this.get('getJSON').perform(url);

    return response.items;
  }).restartable(),

  getJSON: task(function * (url) {
    try {
      return yield this.get('ajax').request(url);
    } catch (e) {
      console.error("There was an error:", e);
    }
  }),

  buildURL(term) {
    return `https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&per_page=5`;
  }


});
