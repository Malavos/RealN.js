# RealN.js
Repository for our public framework, RealN.js. Simple framework focused on two-way and one-way databinding.


It's not a magical framework. The idea is simple: To provide a simple, easy way for two-way and one-way databinding, without messing with digest cycles, observables, no messy license agreements, no unnecessary polyfills. It's meant to be simple, rudimentary, basic. No jQuery dependance either!


English is not my native language. If you have questions, ask them in the issues. I'll try to answer to the best of my skills.

## Planned features:

- One-way data-binding;
- Proper logging of errors, escaping out objects;
- Two-way data-binding, with an observable interface for input controls;
- Conditional for repeaters.

## What we will never do:

- Routing. This framework/helper will only deal with bindings. If you need a route, or a single framework for your spa, this ain't it.


## Our inspiration:

### The problem

An obvious problem with modern javascript is that there are too many javascript frameworks out there. Some people have written far better than I can about [the problem](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f). But I'll tl;dr on two examples:

• Let's say you want to put a huge JSON on a screen. It's a lot of fields, and you want to save work by using a data binding framework. You may end up using a framework that will end up adding a lot of "bloat" unto your project. All stuff that you won't need, but it's there, adding space to loaded scripts, adding a lot of polyfills and functions into your viewport/window, and some even messing up compatibility with older browsers. You end up using a tank to solve a problem that a knife could solve;
• You want a full framework. You want to use routing, a front-end framework, connection to your webApi, two-way data-binding, localStorage manipulation, and so on. The framework you selected does *almost* everything, but it doesn't do two-way data binding properly. So you want to work with an additional script to solve that problem. As your project is already big enough, mostly because of that huge framework you're using in the first place, you have a concern to keep new scripts to a minimum. So you use another framework, let's say, Knockin. But Knockin somehow conflicts with your first framework, Angles 10.0. You end up having to go trough a loot of loops just to get the whole thing working!

In both cases, using RealN could save a lot of time, not only because it is a focused solution but also it's full vanilla and compatible even with IE7. 


### TODO: Frameworks that inspire the project. And our real-world case.
