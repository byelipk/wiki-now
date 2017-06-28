import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wiki-wrapper', 'rise-up'],
  classNameBindings: ['dropDown'],
  tagName: 'form',

  dropDown: false,

  actions: {
    close() {
      this.toggleProperty('dropDown');
    }
  },

  didInsertElement() {
    document.querySelector("input[type='text']").focus();
  },

  animationEnd() {
    if (this.get('dropDown')) {
      this.sendAction('onClose');
    }
  }
});
