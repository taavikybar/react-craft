# Exit early from if statements

Nested statements are hard to read and, the more nesting, the more logic the reader needs to keep in mind at once. Whenever possible, return immediately from if statements instead of using `else`. In that case, the last else statement does not need to be inside an else anymore. 

If/else statements can grow very big and you can never be sure whether some code sits after the if/else waiting to be executed once all the if/else-s have been checked through. If you exit early from an if statement, you explicitly tell the reader that there is no additional code in this method that will be executed.

Instead of:

	if (isUserLoggedIn()) {
		startSession()
	} else {
		greetQuest()
	}

you can simplify by returning early:

	if (isUserLoggedIn()) {
		return startSession()
	}
	
	greetQuest()

---

Instead of nesting multiple if statements:

	const data = getSomeData()
	
	if (data) {
		if (data.user) {
			if (data.user.name && data.user.avatar) {
				return (
					<UserProfile
						name={data.user.name}
						avatar={data.user.avatar)
					/>
				)
			}
		}
	}

you can exit early and keep the structure flat:

	const data = getSomeData()
	
	if (!data || !data.user) {
		return null
	}
	
	const { name, avatar } = data.user
	
	return (
		<UserProfile
			name={name}
			avatar={avatar)
		/>
	)

---

Instead of multiple if/else statements:

	const getUserName = (user: string) => {
		let userName = ''
		
		if (user.id === 1) {
			userName = 'John
		} else if (user.id === 2) {
			userName = 'Paul'
		} else if (user.id === 3) {
			userName = 'James'
		} else if (user.id === 4) {
			userName = 'Bruce'
		} else {
			userName = 'User not found'
		}
		
		return userName
	}
	
	const userName = getUserName(user)

you can exit after each statement and simplify the logic:

	const getUserName = (user: string) => {
		if (user.id === 1) {
			return 'John'
		} 
		
		if (user.id === 2) {
			return 'Paul'
		}
		
		if (user.id === 3) {
			return 'James'
		}
		
		if (user.id === 4) {
			return 'Bruce'
		}
		
		return 'User not found'
	}
	
	const userName = getUserName(user)