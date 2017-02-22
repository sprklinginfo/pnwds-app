import Ember from 'ember';

export default Ember.Component.extend({
  sortedSessions: Ember.computed.sort('sessions', 'sortDefinition'),
  sortDefinition: ['fieldDate'],
});
