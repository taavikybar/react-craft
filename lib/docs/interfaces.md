# Create interfaces for any sort of data object

Having `any` as a type defeats the purpose of TypeScript and effectively disables type checking. Whenever possible, create interfaces for data objects.

```
const userData = {
	name: 'John',
	// should phone number field be filled with string or numeric value?
	phoneNumber: '6784939',
	numberOfPosts: 10
}

const getFullPhoneNumber = (userData) => {
	return userData.phoneNumber
}
```

```
interface UserData {
	name: string,
	phoneNumber: number,
	numberOfPosts: number,
}

const userData: UserData = {
	name: 'John',
	phoneNumber: '6784939', // compilation will fail since type in interface is number not string
	numberOfPosts: 10
}
```

A good practice is also to hold your interfaces and data object on higher level in folder structure to enable reusing them wherever needed, e.g:

```
src/
	components/
	config/
		data/
		interfaces/
		enums/
```
