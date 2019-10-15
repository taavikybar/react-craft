# Use shorthand Fragment syntax

Since React does not allow multiple children on the same level, there are 2 options how to solve it:

* wrapping them in a html element
* wrapping them in `React.Fragment`

Second option is better since it does no add additional unnecessary html elements to the DOM.

If you do not need to pass props to `React.Fragment`, always use shorthand syntax `<></>` because `<React.Fragment></React.Fragment>` is boilerplate code and adds no extra information.

For example:

```
<React.Fragment>
	<ProfileSection />
	
	<PaymentsSection>
		<React.Fragment>
			<BankDetails />
			<GSTDetails />
		</React.Fragment>
	</PaymentsSection>
	
	<SkillSection>
		<React.Fragment>
			<DirectorSkill />
			<ManagerSkill />
			<UserSkill />
		</React.Fragment>
	</SkillSection>
</React.Fragment>
```

With shorthand syntax, it is much easier to concentrate on the important parts of the code and disregard the unimportant `Fragments`:

```
<>
	<ProfileSection />
	
	<PaymentsSection>
		<>
			<BankDetails />
			<GSTDetails />
		<>
	</PaymentsSection>
	
	<SkillSection>
		<>
			<DirectorSkill />
			<ManagerSkill />
			<UserSkill />
		</>
	</SkillSection>
</>
```