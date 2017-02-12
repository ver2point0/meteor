import { Template } from 'meteor/templaing';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.body.events({
  'submit .new-task'(event) {
    // prevent default browser form submit
    event.preventDefault();
    
    // get value from form client
    const target = event.target;
    const text = target.text.value;
    
    // insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
    
    // clear form
    target.text.value = '';
  },
});