# Guidelines for developing UI libraries

#### All components are functional and stateless

##### Reasons

* library deals with dumb UI only, no business logic
* easy to update the library implementation in services that use it
* functional components are faster much easier to use and understand than class components

##### Implementation guidelines

* no state in components
* all state is managed by stores
* if no suitable store found, create a new one
* each component defines an interface for the fields and methods it needs from the store

##### Comments

Components do not use stores but define and export interfaces for the stores which are implemented by the stores.
If there is no way in escaping using lifecycle hooks, React 16.x introduces Hooks and Effects

#### Components are written in TypeScript

##### Reason

* adds another layer of confidence through compile time checks
* introduces tons of OO features otherwise lacking in Javascript
* helps to greatly reduce possibility of bugs by finding them during development

##### Implementation guidelines

* components use .tsx extension
* every field, variable, method has type definitions

#### All components implement BEM structure

##### Reason

* components are independent blocks
* BEM structure makes handling CSS much more clearer

##### Implementation guidelines

* follow the SASS BEM Approach Use Guide for best practices

#### Global Sass configuration file exists

##### Reason

* file includes all the necessary variables which can be imported into component .scss files

##### Implementation guidelines

* each component's .scss file imports the global .scss file

##### Comments

* Since it is a library, we can assume that it might be used by other services than Selleri ones, therefore there should probably also be a possibility to overwrite the variables in the global .scss file (e.g colors and such)

#### Each component has its own Sass file

##### Reason

* webpack can then build only the CSS that is used not all of it

##### Implementation guidelines

* create a .scss file that corresponds to the component a la ExpanderHeader.tsx and _expander-header.scss
* import that file into the component
* import global .scss configuration with all the variables into the component .scss file
* do not use a global .scss file with all the components .scss files imported into it

#### Each BEM class is prefixed with agreed upon library prefix

##### Reason

* necessary in order to avoid conflicts between classnames between library and non-library components

##### Implementation guidelines

* use a simple, two or three letter prefix
* can store it as a variable in global . scss file and use the variable in . scss files
* in components it is probably easiest to just hardcode the prefix into classes

##### Comments

Something like lib-expander-header

#### Components implement Universal Components principals

##### Reason

* helps to avoid code duplication and necessity to make changes in multiple places
* helps to keep complexity under contro

##### Implementation guidelines

* follow the Universal Components Development Principles

#### Components are planned before implementation

##### Reason

* a well planned component reduces the confusion while developing

##### Implementation guidelines

think of components like API I services:
* props passed to the component are like API parameters
* changes to API parameters can
be breaking to services using them

##### Comments

#### Components are tested before using in services

##### Reason

* a well tested component reduces the need to make changes to it once it is in use by services

##### Implementation guidelines

* set up an easy to use demo environment as part of the library where all components are visually testable

##### Comments

ideally, each new component follows this lifecycle:
* designer by designer
* API architecture planned by developer(s)
* implemented in library and library demo environment
* tested in demo environment implemented in services

#### No breaking changes are made

##### Reason

* since multiple services can implement components from the libraries, breaking changes can introduce UI discrepancies and bugs

##### Implementation guidelines

* first of all, make sure your change is breaking one, e.g one of the following:
	* prop renamed
	* prop removed
	* store interface altererd
* changing appearence of UI, is not definitely breaking
* instead of making a breaking change to a component do one of the following:
	* implement the change to be backwards comaptible, e.g instead of renaming a prop, introduce a new one
		* once the new prop is introduced, it can be implemented by each service
		* after each service has implemented the new prop, it is safe to remove the old one
	* create a new component
		* if changes are drastic and it would be difficult to keep component backwards comaptible, create a new one
		* once each services has implemented the new component, it is safe to remove the old one

##### Comments

#### Releasing

* Minimal manual effort
* Usage of npm version major | minor | patch to update release version in package.json https://docs.npmjs.com/cli/version
* Automated tools to update Changelog from commits https://github.com/lob/generate-changelog
* It is documented what is the difference of major, minor and patch releases in the context of the library

#### Documentation

Following points should be documented and kept up to date:

* Releasing (as simple as possible, different version variants explained)
* Development Guidelines (reference the table above)
* Changelog (automatically generated)


#### Development environment / Demo page

* Demo environment is implemented that satisfies the following requirements:
	* Creates an easy to use demo environment displaying all the components and their possible variations
	* Lists the possible props and their types for each component
	* Minimal effort required from the developer in order to get components to the demo environment
	* Possible to develop components in the demo environment using Hot Module Replacement
	* Possible to setup as a standalone microservice for access to everyone who needs to use it

	
#### Development disciplines

* ESLint, TSLint and SassLint must be configured
* Linters are run by Webpack in the library development environment Linters are run as pre-commit hook
* Babel configuration is set up
* TypeScript configuration is set up

#### Tests

* Snapshot tests are not a good idea and do not provide much safety. It is very easy to just update the snapshot of a failed test without even looking into why a test failed.
* Testing all the possible html outcomes is overkill and very easy to overlook the broken test and just generate a new snapshot to make the test pass.
* If snapshot tests are implemented, they should be done more in a way that if some prop has a certain value, then some child component or html element will be rendered. Otherwise it is missing.
Better idea is to test components like API-s: test the props, their names and types. Basically testing the contract between componets.