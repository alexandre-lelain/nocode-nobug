---
title: React and JS Events
date: '2021-04-22'
updated: '2021-04-22'
spoiler: They can be a nice combo sometimes.
description: Learn how to use JS events with React to optimize your renders.
slug: 'react-and-js-events'
tags: ['react', 'javascript', 'events']
img: react
---

Associating **React** and **JavaScript Events** in the same sentence might sound a bit strange. Because of the way React is designed, it is rare to be in a situation
where you need to use native JS events to solve problems inside your React components.

**React** already provides you with quite some cool tools to bind your components to states, to hydrate them using a unique source of data or to make components
interact with each other in a dynamic way.

Most of the time, you can leverage the [state API](https://reactjs.org/docs/hooks-reference.html#usestate), the [Context API](https://reactjs.org/docs/hooks-reference.html#usecontext) or
the composition paradigm.

_However._

There are some situations out there in the real world of React applications where using the **JavaScript event** alongside React will come very handy to keep things optimized at the lowest development cost.

And that's what we going to see in this article.

## Events

You can skip this part if you're already familiar with JS events 🙂.

Let's briefly talk about events and how they are implemented in JavaScript. An event, like its name suggests, is simply an action. It is something that can be triggered by multiple sources: the user clicked on a button,
the browser changed its viewport, the internet connection got interupted, a DOM node got mutated, and many more. You can find the exhaustive list if you want to know them all on [MDN event docs](https://developer.mozilla.org/en-US/docs/Web/Events#event_index).

The event that was fired returns a JavaScript object that inherits from the [Event interface](https://developer.mozilla.org/en-US/docs/Web/API/Event). With it, you can have a lot of meta data around the event and its context.

The most important part is that you can connect a function to the event, so that the function will be executed at the very moment the event is fired. For exemple, it will allow you to run some code right after a user has clicked on a button.

We don't need to dig deep into the

## React and Events

## Useful links

- https://developer.mozilla.org/en-US/docs/Web/Events
