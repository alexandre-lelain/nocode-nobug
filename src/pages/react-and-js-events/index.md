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

There are some situations out there in the real world of React applications where using the **JavaScript events** alongside React will come very handy to keep things optimized at the lowest development cost.

And that's what we going to see in this article.

## Events

You can skip this part if you're already familiar with JS events 🙂.

Let's briefly talk about events and how they are implemented in JavaScript. An event, like its name suggests, is simply an action. It is something that can be triggered by multiple sources: the user clicked on a button,
the browser changed its viewport, the internet connection got interupted, a DOM node got mutated, and many more. You can find the exhaustive list if you want to know them all on [MDN event docs](https://developer.mozilla.org/en-US/docs/Web/Events#event_index).

The event that was fired returns a JavaScript object that inherits from the [Event interface](https://developer.mozilla.org/en-US/docs/Web/API/Event). With it, you can have a lot of meta data around the event and its context.

The most important part is that you can connect a function to the event, so that the function will be executed at the very moment the event is fired. For exemple, it will allow you to run some code right after a user has clicked on a button.

> Good news: We don't need to dig deep into the events API for the next part.

## React and Events

First things first, let's talk about the problem to solve. After all, this article wouldn't exist if there was no problem to begin with 🧐.

### The problem to solve

Your day's task: to connect some button `<MyButton>` from a complex and deep-nested table to some component `<FarAwayComponent>` located far-away outside this React tree.

When clicked, this button should increment a counter rendered inside `<FarAwayComponent>` that is used in a totally different place than where the button lives.

**Let me get this straight**: there is something like **20 levels** of components and **thousand of lines of code** that stand between `<MyButton>` and `<FarAwayComponent>`.
On top of that, the codebase is old and components are somehow tighly coupled to one another. This sounds just like any React applications out there, right ? 🙃

The problem here is not so much about how to implement that connection. You can, for example, leverage React's _state_ and _context_ APIs to make the two components talk to each other.
You could then use a custom hook to update `<FarAwayComponent>` from `<MyButton>`.

The **real** problem lives in the optimization of the solution you implement. The real problem here is how to **NOT re-render your whole or, at least, a big part of your React application** when updating the counter state,
or writting in the context.

You wouldn't be facing this problem to begin with if the React tree of the application was designed so that the two components that need to communicate were close enough in the hierarchy.

But in the real world you don't have the time to refactor a whole React application to simply implement a basic feature. So you have no choice but to deal with the existing codebase.

Some solutions you could implement to solve the optimization problem:

1. You could [memoize](https://reactjs.org/docs/react-api.html#reactmemo) some components to make sure they do not update if they don't need to.
2. You could keep the counter state inside `<FarAwayComponent>`, and store in some context at the nearest root its setter so that `<MyButton>` can leverage it.

However, both solutions come with a price. The first solution will make you memoize **lots** of components, thus increasing the bundle size and may cause edge effects (components relying wrongly on the very fact that they are not memoized).
The second solution will still cause an extra update of your whole React tree.

Now, what if take a step back from React for a moment, and see if we can solve this problem from a different approach. What if I told you that you can optimize your solution so that **only** `<FarAwayComponent>` will update
when the button is clicked ? 😉

Well, surprise: we can. And we can use **JavaScript events** to achieve so.

### The optimized solution

qsd

## Useful links

- https://developer.mozilla.org/en-US/docs/Web/Events
