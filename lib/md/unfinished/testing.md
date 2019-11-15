# Testing


* `yarn test` - will run all the tests
* `yarn test:watch`- will run only changed tests and continue watching, best for when writing tests
* `yarn test:coverage` - will run all the tests and create coverage reports which can be seen by opening up `/coverage/index.html` in browser

Follow the practices outlined in [Testing Confluence page](https://90seconds.atlassian.net/wiki/spaces/PE/pages/481329849/Testing) when writing tests for React components.

Make sure your tests follow these principles as much as possible:

* All external dependencies are mocked in order to reduce the time the test runs
* Relevant testing data is created and stored in `/mock-data` folder in relevant component folder in order to reduce bloat inside tests code
* All changes to `window` or any other global object are restored in `afterEach()` or `afterAll()` hooks
* `cleanup()` method from `/test-helpers/react-testing-library` is run in `afterEach()` hook in order to cleanup the virtual DOM and not have duplications of the same element
* Mocks are cleared using `.mockClear()` in `afterEach()` hook to be sure that `.toHaveBeenCalled*` methods return correct results 
* If dealing with dates, use [`jest-date-mock`](https://github.com/hustcc/jest-date-mock#readme) library to set the current date to required date. 

### React Testing library

* When testing a component, we should not be caring about the inner workings of the component (implementation). We should just be caring about how the DOM will appear and that it will do what it needs to do when a button is clicked for example. So we should not be thinking of how it's implemented (state etc.), we should only care about what the component will output. This allows us a lot more flexibility when it comes to refactoring a component. 
* Most of the tests for the components will become integration tests as you will be rendering the whole component into the DOM. This allows you to write the tests as though you are a real user using the component, instead of just shallow rendering which may not be able to catch all possible errors that may come up. By using integration tests with the components you can be sure that things will work correctly when everything is being used together.
* [Definite read: Which query should i use?](https://testing-library.com/docs/guide-which-query)
* [React Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
* [Overview of different queries](https://testing-library.com/docs/dom-testing-library/api-queries)
* Use data-testid to mark HTML elements that cannot be queried by content
* Run `cleanup()` from `react-testing-library` in `afterEach` hook in order to cleanup the virtual DOM and not have duplications of the same element
* Avoid using `findBy*` queries since they return a Promise which might not finish by the end of test and start leaving warnings when running tests. Instead, use `queryBy*` queries.