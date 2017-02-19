import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});


Template.body.helpers({
  tasks() {
    // show newest tasks at the top
    return Tasks.find({}, { sort: { createdAt: -1 } });
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
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked); 
  }
});








