# Clean up after each test

### Jest mocks call count

Always clean up after each test to be certain all assertions are valid.

Consider the following example:


```
import { userLogin } from 'auth-library'
import { someMethodCallingUserLogin, someOtherMethodCallingUserLogin } from './user-login'

jest.mock('auth-library', () => ({
	userLogin: jest.fn()
}))

describe('userLogin', () => {
	it('should call userLogin 1 time if someMethodCallingUserLogin is called', () => {
		someMethodCallingUserLogin()
		
		expect(userLogin).toHaveBeenCalledTimes(1)
	})
	
	it('should call userLogin 1 time if someOtherMethodCallingUserLogin is called', () => {
		someOtherMethodCallingUserLogin()
		
		// this will fail since the mock is not cleared and therefore executed 2 times
		expect(userLogin).toHaveBeenCalledTimes(1)
	})
})

```

Since mocks are not cleared after each test, the number of times they are called accumulates and the tests are not independent from each other anymore. Adding `jest.clearAllMocks()` call to `afterEach` method will clear the mocks including the number of times they have been called.


```
import { userLogin } from 'auth-library'
import { someMethodCallingUserLogin, someOtherMethodCallingUserLogin } from './user-login'

jest.mock('auth-library', () => ({
	userLogin: jest.fn()
}))

describe('userLogin', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})
	
	it('should call userLogin 1 time if someMethodCallingUserLogin is called', () => {
		someMethodUsingPreviousMethod()
		
		expect(someMethod).toHaveBeenCalledTimes(1)
	})
	
	it('should call userLogin 1 time if someOtherMethodCallingUserLogin is called', () => {
		someOtherMethodCallingUserLogin()
		
		// now test will pass
		expect(someMethod).toHaveBeenCalledTimes(1)
	})
})

```

### React Testing Library

If you are using `react-testing-library`, don't forget to add `cleanup()` to `afterEach()` method, otherwise each time you call `render()` method with a component, it will add more html to the DOM. The DOM can contain multiple copies of same HTML elements, making your `getBy*`, `findBy*` and `queryBy*` assertions wrong. 

```
import {cleanup, render} from 'react-testing-library'
import {UserProfile} from './user-profile'

describe('UserProfile', () => {
	afterEach(() => {
		cleanup() // without cleanup, there would be 2 html elements containing 'John Smith'
	})
	
	it('should render user name only once', () => {
		const { queryAllByText } = render(<UserProfile />)
		
		expect(queryAllByText('John Smith')).toHaveLength(1)
	})
	
	it('should render user name only once', () => {
		const { queryAllByText } = render(<UserProfile />)
		
		expect(queryAllByText('John Smith')).toHaveLength(1)
	})
})

```







