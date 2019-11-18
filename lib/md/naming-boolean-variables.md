# Naming boolean variables

Name boolean variables by following the Java Bean convention of `isSomething` or `hasSomething`. Then you can be certain by reading the name of the variable that is a boolean and do not need to dig deeper into code to figure out the type. Of course, this is not that big of a problem when using TypeScript but it is still much easier and faster to read code without the need to explicitly check the types of each variable:


For example:

	if (short) {
		doSomething()
	}

compared to:
	
	if (isShort) {
		doSomething()
	}

Using `is*`, `has*` convention makes your code read more like a story, e.g `if is short, do something`.

---

In the following example, you need to open the `cookieSet()` method in order to understand what the method returns:

	const loaded = true
	const cookieSet = true
	const cookie = true
	    
	const cookieSet = () => {
	    if (loaded && cookieSet) {
	        return cookie
	        // what is returned? boolean or cookie object or
	        // even a string?
    	}
	}
	
	if (setCookie()) { 
	    console.log('Cookie is present')
	}
	
Naming booleans with the is/has* convention, it is immediately clear which variables return a boolean value:
	
	const isCookieSet = () => {
	    const isLoaded = true
	    const hasCookieSet = true
	    const isCookiePresent = true
	
	    if (isLoaded && hasCookieSet) {
	        return isCookiePresent
	    }
	}
	
	if (isCookieSet()) {
	    console.log('Cookie is present')
	}