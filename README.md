# PubSub
A pubsub object for passing around events and callbacks.

Credit where credit is due: this is an object-based version of [Devin's class-based pubsub](https://github.com/devinle/PubSub).

```javascript

import PubSub from 'path/to/PubSub/';

// Basic example inside a click handler

document.addEventListener('click', event => {
  // extract some data
  const { target } = event;
  
  // trigger an event
  PubSub.trigger('someEvent', target);
});

.
.
.

import PubSub from 'path/to/PubSub/';

// subscribe to the event, and fire a callback
PubSub.on('someEvent', data => {
  // callback function here
  console.log(data); //  => event.target 
});

```


[Follow Me](https://twitter.com/laroymike).
