Contributing
--------

Please read this file carefully before making any changes. A good rule of thumb is to think about if your change could break a build. If it could, it should be a major version bump.

## Versioning

### Major bumps
* Changing a rule to error when violated
* Adding a new rule that will error when violated
* `eslint` peer dependency major version bumps

### Minor bumps
* Changing a rule to a warning
* Removing a rule
* Adding a new sub-config choice (such as `browser`, `mocha`, etc)

### Patch bumps
* File formatting
* Adding comments to files
* README updates
* etc
