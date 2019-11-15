# Use Yarn version (or npm version)

If you are working on a versioned library or application that uses [Semantic Versioning](https://semver.org/) to manage its versions, use [Yarn Version](https://yarnpkg.com/en/docs/cli/version) or [NPM Version](https://docs.npmjs.com/cli/version) to bump the version number instead of manually changing it in `package.json` and other related places.

To bump the version, just run the relevant command:

- `yarn version --patch` - PATCH version - Usually a bug fix -> non-breaking change which fixes an issue
- `yarn version --minor` - MINOR version - New feature -> non-breaking change which adds functionality
- `yarn version --major` - MAJOR version - Breaking change -> fix or feature that would cause existing functionality to change

## Git tags

Using Yarn version also adds appropriate [git tag](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag) which can be used to [create releases in Github](https://help.github.com/en/articles/creating-releases) (or any other git version control system).

Use `git tag` to list all the possible tags:

```
v3.0.1
v3.0.2
v3.1.0
v4.0.0
```

Remember, by default `git push` will not push tags to remote. Use `git push origin --tags` to push all the tags to remote. Or `git push origin v1.5` to push a single tag only.
