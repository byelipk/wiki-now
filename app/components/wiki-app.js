import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wiki-container'],

  showForm: false,

  actions: {
    toggleForm() {
      this.toggleProperty('showForm');
    }
  }
});
