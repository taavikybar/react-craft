# Universal Components Development Principles

#### Universal components follow these principles

* Possible to use in any context
* Concerned with UI, not business logic or features
* Dumb and stateless
* Functional
* Organized into folders that are structured based on UI elements (e.g /expanders, /buttons etc)


#### Benefits gained from this approach

* Much stronger architecture since there are less possible places to introduce bugs
* Considerably faster development since it is possible to reuse existing code with slight modifications if needed Easier to change UI elements since change needs to be done in one place only
* Less code duplication
* Decrease in code complexity
* Modular architecture:
	* Easy to migrate components to libraries or other services
	* No Tech Debt: no need to rewrite components in the future
* Much easier to talk about components that have simple and clear names
	* E.g "this Accordion on the checkout page is very nice"

	
#### Implementation Guidelines

* Create functional stateless components
* Use state managers like MobX, ReduX, VueX for state
* Name component by how it looks, e.g Button, CheckBox, Accordion etc
* Organize component into a folder that groups it by UI e.g /buttons, /form-elements, /accordions etc
* Before starting development, research existing components and see if something like what you need already exists
* If a suitable component exists, but is not fully Universal, improve it so that it is (move to a suitable directory, make stateless and functional, etc)