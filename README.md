# Bulma for Angular
[![npm version](https://badge.fury.io/js/ngx-bulma.svg)](https://badge.fury.io/js/ngx-bulma)
[![Gitter](https://badges.gitter.im/ngx-bulma.png)](https://gitter.im/ngx-bulma/Lobby)

This is the home for bulma components built for and with Angular.

#### Quick links
[Contributing](https://github.com/angular/material2/blob/master/CONTRIBUTING.md) |


# ngx-bulma

ngx-bulma is a module that brings Bulma to Angular.

This project is still in its early stages, and it is NOT production or even development ready.
It'll be ready in about a month.

## Code samples

![Buttons](http://eliran.net/ngx-bulma/buttons.png "Buttons")
```html
  <bu-subtitle>Buttons</bu-subtitle>
  <bu-button buDanger buLarge>large danger button</bu-button>
  <bu-button buDark buNormal>normal dark button</bu-button>
  <bu-button buWarning buSmall>small warning button</bu-button>
  
  <bu-button buPrimary loading>loading</bu-button>  
  <a buButton buSuccess>Directive button</a>
  <a buButton outlined buDanger>Outlined button</a>
  <a buButton inverted buWarning>inverted button</a>ton</a>
```


## The goal of Angular Material
Our goal is to build a set of high-quality UI components built with Angular and TypeScript,
following the Bulma Design Spec. These
components will serve as an example of how to write Angular code following best practices.

### What do we mean by "high-quality"?
* Internationalized and accessible so that all users can use them.
* Straightforward APIs that don't confuse developers.
* Behave as expected across a wide variety of use-cases without bugs.
* Behavior is well-tested with both unit and integration tests.
* Customizable within the bounds of the Material Design specification.
* Performance cost is minimized.
* Code is clean and well-documented to serve as an example for Angular devs.

## Browser and screen reader support
NGX-Bulma supports the most recent two versions of all major browsers:
Chrome (including Android), Firefox, Safari (including iOS), and IE11 / Edge