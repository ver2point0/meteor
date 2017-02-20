import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/Templating';

import { Tasks } from '../api/tasks.js';  

import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // set the checking priority to the opposite of its value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  }, 
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
});
