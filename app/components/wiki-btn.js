import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wiki-wrapper'],

  click() {
    this.get('onClick')();
  }
});
