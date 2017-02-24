import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  fieldClass: DS.attr(),
  session: DS.hasMany('session', { inverse: 'fieldTrack'}),
});
