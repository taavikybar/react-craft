# Naming files

Always name your files in Node.js ecosystem in `kebab-case` meaning lowercase and separated by a hyphen. The important part is **lowercase** since different systems treat cases differently.

For example, Mac OS and Windows are **case-insensitive** meaning you can import a file named `Header.tsx` in 2 ways:

* `import Header from 'Header'`
* `import Header from 'header'`

and both will work. 

Now when you use the latter option and deploy this file to Linux system, the build will fail since Linux is **case-sensitive** and will look for a file named `header.tsx` which it cannot find.

Of course, you can always make sure that you import in correct case but it is very easy to forget that and only see the errors in Linux based CI systems. Safer and easier is to forget everything about cases and use lowercase always to be consistent across different platforms. 

Why not `snake_case`? Of course, you can name all files in kebab case but that is not so common in Javascript. All packages in npm registry are named in kebab case so mixing these 2 together will create inconsistent import statements:


```
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import NavigationBar from 'navigation_bar'
import UserMenu from 'user_menu'
```

vs:

```
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import NavigationBar from 'navigation-bar'
import UserMenu from 'user-menu'
```
