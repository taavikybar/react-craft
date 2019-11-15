# SASS+BEM Use Guide

http://getbem.com/introduction/

#### BEM stands for Block Element Modifier

The idea behind BEM is to create independent reusable pieces of component styles that promote clarity and lack of conflicts. This is very well paired with React components having one BEM block per component.

This is achieved using following guidelines:

#### Block is the root element of the component in html

* An html element should only have one component class otherwise multiple component classes can add conflicting styles and
therefore defeat the purpose of BEM

#### Elements are html elements that sit inside the Block element

* BEM Sass code is written in flat hierarchy meaning no element is nested inside another in Sass. This creates the possibility to rearrange elements in html without having to change Sass code
* Elements are marked using double underscores block__element


#### Modifiers are alterations of elements

* They are used to add additional styles when needed e.g larger text, bold, colors etc.
* Element must always have the element class and then modifier classes if needed e.g class="element element--modifier" but never only modifier without element class
* Modifiers are marked using double hyphens block--modifier