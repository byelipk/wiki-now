import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wiki-wrapper'],
  classNameBindings: ['goUp', 'animateIn:go-down'],

  goUp: false,
  animateIn: false,

  click() {
    this.toggleProperty('goUp');
  },

  animationEnd() {
    if (!this.get('animateIn')) {
      this.sendAction('onClick');
    }
    else {
      this.set('animateIn', false);
    }
  }
});
