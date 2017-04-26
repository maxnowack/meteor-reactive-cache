import { getGlobal } from 'meteor-globals';

const Meteor = getGlobal('meteor', 'Meteor');
export default Meteor.bindEnvironment.bind(Meteor);
