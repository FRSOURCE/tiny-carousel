# Vue.js Contributing Guide

Hey! It's really exciting for us to see your interest in contributing to TinyCarousel. Before taking off with your work, please take a moment to read through these guidelines:

- [Code of Conduct](https://github.com/FRSOURCE/tiny-carousel/blob/master/CODE_OF_CONDUCT.md)
- [Questions?](#questions)
- [Reporting an issue or a feature request](#reporing-an-issue-or-a-feature-request)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

## Questions?

Don’t hesitate to ask a question directly on the [discussions board](https://github.com/FRSOURCE/tiny-carousel/discussions)!

## Reporting an issue or a feature request

- Please always use Github Issues tracker with [appriopriate template](https://github.com/FRSOURCE/tiny-carousel/issues/new/choose) to create a new issue or suggestion.

## Pull Request Guidelines

- Check if there isn't a similar PR already in the [GitHub Pull requests](https://github.com/FRSOURCE/tiny-carousel/pulls) - maybe somebody already has covered this topic?

- Checkout the master branch and (after you do your work) file a PR against it.

- Read through the [development setup](#development-setup) to learn how to work with this project. Always make sure that `yarn lint`, `yarn coverage` pass.

- Please use [conventional commits v1.0.0 styleguide](https://www.conventionalcommits.org/en/v1.0.0/) for commits and PR names.

- We have no preference regarding number of commits on the PR - in the end, they will be all squashed by GitHub while merging.

- When creating a new feature/plugin/integration:
  - Make sure the feature is covered by tests.
  - Provide a meaningful description. In most cases it would make sens to first open a issue with a suggestion, discuss about it and have it approved before working on it.

- When fixing bug:
  - Try to cover the scenario with tests if possible.
  - If an issue for this bug already exists, please reference it via (`Refs: #XYZ` - where XYZ is an issue number) at the very bottom of your commit message and PR description as proposed by [contentional commits v1.0.0 styleguide](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-multi-paragraph-body-and-multiple-footers).
  - If there is no issue connected with the bug, please provide a detailed description of the problem in the PR. Live demo preferred ([look for the codepen example project in the bug issue template](https://github.com/FRSOURCE/tiny-carousel/blob/master/.github/ISSUE_TEMPLATE/bug_report.md)).

## Development Setup

You will need [Node.js](http://nodejs.org) **version 15+** and [yarn](https://yarnpkg.com/en/docs/install).

After cloning the repo, run:

``` bash
$ yarn # install the dependencies of the project (for all of the nested packages)
```

### Committing Changes

Commit messages should follow the [conventional commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are not familiar with the commit message convention, you can use `npm run commit` instead of `git commit`, which provides an interactive CLI for generating proper commit messages.

### These NPM scripts are awvailable in every package and in the project root

In the project run they will execute corresponding actions in all of the nested packages at once.

``` bash
# watches and rebuilds the package in development version
$ yarn start

# run tests once
$ yarn test

# watch & run tests on every file change
$ yarn watch:test

# run tests and collect coverage
$ yarn coverage

# lint & try to autofix linting errors
$ yarn fix:lint

# lint files
$ yarn lint

# build the project for NPM
$ yarn build
```

There are some other scripts available in the `scripts` section of the `package.json` file.


## Financial Contribution

As a pure community-driven project without major corporate backing, we also welcome financial contributions via Patreon and OpenCollective.

- [Become a backer or sponsor on Patreon](https://www.patreon.com/evanyou)
- [Become a backer or sponsor on OpenCollective](https://opencollective.com/vuejs)
- [One-time donation via PayPal or crypto-currencies](https://vuejs.org/support-vuejs/#One-time-Donations)

## Credits

Special thanks to all the people who have already contributed to TinyCarousel! ❤️

- [Become a backer or sponsor on OpenCollective](https://opencollective.com/vuejs)
