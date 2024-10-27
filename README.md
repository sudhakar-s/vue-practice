# Features
1. Responsive
2. API caching (vue-query)
3. Vue Router integration
4. Different UI States - No Data, Loading, Error, Background fetching, 404 etc.
5. Instant navigation to details page - (thanks to vue-query)
6. Semantic HTML and accessibility(needs some improvement)
7. Vue 3
8. Reusable Components
9. TS

**Go to have**
1. Animations - View Transition api(progressive enhancement)
2. Pagination - Please refer to the below note
3. UT's - Integration testing from user's perspective
4. Error boundary


## Reusbale Components
I used a constrained approach(e.g., color and size props) instead of a flexible API to prevent users from customizing the design system components, which could lead to inconsistency. Please note that inherited attributes are not currently disabled.

> Note: Pagination is not yet implemented, as I was occupied with personal commitments and could only spend time on this assignment on October 26th and 27th. I will also be busy this week (October 28th - November 3rd). If I were to implement pagination, I would create a new composable, e.g., usePaginate, which would accept data from the API and a limit per page, returning paginated data for the UI to render. This way, usePaginate can be easily removed once API pagination support is available.


## Screenshots
Refer screenshots folder


## Project Setup


### pnpm

This repository uses [`pnpm`](https://pnpm.io) rather than `npm` or `yarn`. [See here for instructions on installing pnpm](https://pnpm.io/installation).

### Install dependencies

```sh
pnpm install
```

### Compile and Hot-Reload for Development

Start the backend which serves the `services` API:

```sh
pnpm dev:server
```

In a separate terminal, start the Vue app:

```sh
pnpm dev:ui
```

## Searching the services endpoint

The local API is available at `http://localhost:4001` after running `pnpm dev:server`.

Searching this endpoint is supported by passing a query string with a value to search with (case-insensitive): `/api/services?q={value}`

**Note**: The search endpoint evaluates all property values as a `string` to determine a match.

### Searchable properties

The search endpoint is configured to search the following fields for each service within the JSON response:

```ts
{
  id: string;
  name: string;
  description: string;
  type: string;
}
```

### Search example

If I wanted to search for a service with "dogs" in the service name, I would pass the name in the query string:

```sh
GET: /api/services?q=dogs
```

### Linting and fixing the code

#### ESLint

```sh
# Run the linter
pnpm lint

# Fix linting errors
pnpm lint:fix
```

#### Stylelint

```sh
# Run stylelint
pnpm stylelint

# Fix stylelint errors
pnpm stylelint:fix
```

### Run Component and Unit Tests with [Vitest](https://vitest.dev/) and optionally [Vue Test Utils](https://test-utils.vuejs.org/)

Component and unit test files must be located in the `/src/` directory and have a filename format of `*.spec.ts`. In the starter project, see `src/components/ServiceCatalog.spec.ts` for an example.

```sh
# Run tests
pnpm test

# or run the tests in the Vitest UI
pnpm test:open
```

### Build and Minify for Production

```sh
pnpm build
```

### Preview your built application

First, you'll need to build the app

```sh
pnpm build
```

Next, run the API server

```sh
pnpm dev:server
```

Now run the `preview` command

```sh
pnpm preview
```

### Committing Changes

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

At Kong, we utilize [Conventional Commits](https://www.conventionalcommits.org/) in all of our repositories. [Commitizen](https://github.com/commitizen/cz-cli) can be used to to help build and enforce commit messages.

If you're unfamiliar with conventional commits, it is **recommended** to use the following command in order to create your commits:

```sh
# Stage your changes
git add -A

# Trigger the commitizen CLI to help compose your commit message
pnpm commit
```

This will trigger the Commitizen interactive prompt for building your commit message.
