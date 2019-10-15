# Naming boolean variables

Name boolean variables by following the Java Bean convention of `isSomething` or `hasSomething`. Then you can be certain by reading the name of the variable that is a boolean and do not need to dig deeper into code to figure out the type. Of course, this is not that big of a problem when using TypeScript but it is still much easier to and faster to read code without the need to explicitly check the types of each variable:


For example:

```
if (short) {
	doSomething()
}

if (user.
```

```
if (isShort) {
	doSomething()
}
```

Using `is*`, `has*` convention makes your code read more like a story `if is short`


```
if (loaded && cookieSet) {
	return cookie
	// what is returned? boolean or cookie object or even string?
}

```

```
if (hasLoaded && isCookieSet) {
	return isCookie
}

```

`if has loaded and is cookie set`

```
const skillsPresent = () => {
	return user.skills
}
```

`user skills present if user skills`


```
const areSkillsPresent = () => {
	return user.hasSkills
}
```
`user skills are present if user has skills`