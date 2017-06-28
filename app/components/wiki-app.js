import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wiki-container'],

  showForm: true,
  animateIn: false,

  actions: {
    hideBtn() {
      this.toggleProperty('showForm');
    },

    hideSearchForm() {
      this.toggleProperty('animateIn');
      this.toggleProperty('showForm');
    }
  }
});
