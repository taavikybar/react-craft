# Use short circuits instead of ternary operators

Whenever possible, prefer short circuit (`&&`, `||`) operands to ternary (`? :`). The idea is similar to [Exit early from if statements](/exit-early-from-if). Ternary operations can grow big and the small `:` might be lost in the midst of code, deceptively making you think that both cases are just one case.

In the following example, it can be confusing which component is rendered.

	const Header: React.FC = () => (
		<header>
			{isUserLoggedIn() ? <UserProfile /> : <GuestProfile />}
		</header>
	)

In this version though, it is clear that a component is rendered if a given statement is true, reducing ambiguity.

	const Header: React.FC = () => (
		<header>
			{isUserLoggedIn() && <UserProfile />}
			
			{!isUserLoggedIn() && <GuestProfile />}
		</header>
	)
	
---

In the next example, the small `:` colon can easily be skipped on first read, giving the assumption that three list items are rendered, when in reality only two shown.

	const Menu: Rect.FC = () => {
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			{isUserLoggedIn() ?
				<li>
					<a href="/profile">
						Profile
					</a>
				</li>:
				<li>
					<a href="/welcome">
						Welcome
					</a>
				</li>
			}
		</ul>
	}

Using short circuits, it is clear under what circumstances to render a specific component, coupling the component and the conditional tightly together.

	const Menu: Rect.FC = () => {
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
	
			{isUserLoggedIn() &&
				<li>
					<a href="/profile">
						Profile
					</a>
				</li>
			}
	
			{!isUserLoggedIn() &&
				<li>
					<a href="/welcome">
						Welcome
					</a>
				</li>
			}
		</ul>
	}
