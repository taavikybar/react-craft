# Use short circuits instead of ternary operators

Whenever possible, prefer short circuit (`&&`, `||`) operands to ternary (`? :`). The idea is similar to [Exit early from if statements](exit-early-from-if.md). Ternary operations can grow big and the small `:` might be lost in the midst of code deceptively making you think that that both cases are just one case.


```
const Header: React.FC = () => (
	<header>
		{isUserLoggedIn()
			? <UserProfile />
			: <GuestProfile />
		}
	</header>
)
```


```
const Header: React.FC = () => (
	<header>
		{isUserLoggedIn() && <UserProfile />}
		{!isUserLoggedIn() && <GuestProfile />}
	</header>
)
```

```
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
```

```
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
```
```