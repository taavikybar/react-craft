# Create interfaces for any sort of data object

Having `any` as a type defeats the purpose of TypeScript and effectively disables type checking. Whenever possible, create interfaces for data objects.

Consider the following example:

	const userData = {
		name: 'John',
		
		// should phone number field be filled with
		// string or numeric value?
		phoneNumber: '6784939',
		numberOfPosts: 10
	}
	
	// userData type is any so the method can return value of any type
	const getFullPhoneNumber = userData => userData.phoneNumber

Better approach is to define an interface for data structures to be explicit in the possible types:

	interface UserData {
		name: string,
		phoneNumber: number,
		numberOfPosts: number,
	}
	
	const userData: UserData = {
		name: 'John',
		// compilation will fail since type in interface
		// is number not string
		phoneNumber: '6784939',
		numberOfPosts: 10
	}
	
	// this method will explicitly return a number now
	const getFullPhoneNumber = (userData: UserData) => userData.phoneNumber

## Structure

A good practice is also to hold your interfaces and data object on higher level in folder structure to enable reusing them wherever needed, e.g:

    src/
    	components/
    	config/
    		data/
    		interfaces/
    		enums/
