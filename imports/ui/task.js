import { Template } from 'meteor/Templating';

import { Tasks } from '../api/tasks.js';  

import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // set the checking priority to the opposite of its value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  }, 
  'click .delete'() {
    Tasks.remove(this._id);
  },
});
