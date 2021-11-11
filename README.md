# Petto Frontend: React TypeScript Guides

This is a guide for those who want to contribute to the frontend. Anything that has been left out (ex. CSS best practices) can be found in the [Mashup Garage Playbook](https://www.mashupgarage.com/playbook/).

> This guide is still in progress. We are committed to update this as the project matures. Everything in this guide might change slightly or drastically overtime. We also encourage you to contribute in this guide. It will be greatly appreciated!

## Table of Contents

- [Philosophies](#philosophies)
- [Technologies Overview](#technologies-overview)
- Creating a Page (coming soon)
- [Folder Structures, Files, and Flows](#folder-structures,-files,-and-flows)
  - [Structure Overview](#structure-overview)
  - [App Directory](#app-directory)
  - [Page Structures and Files](#page-structures-and-files)
  - [Components Directory](#components-directory)
  - [Helpers Directory](#Helpers-directory)
  - [Hooks Directory](#Hooks-directory)
  - Context Directory (Coming Soon)
- [Naming](#naming)
- [Comments](#comments)
- [TS Typing](#ts-typing)
- [Components and State Management](#components-and-state-management)
- [3rd Party Libraries](#3rd-party-libraries)
- [Helpers](#helpers)
- [Hooks](#hooks)
- Forms and Validations (Coming Soon)
- API (Coming Soon)
- useReducer (Coming Soon)
- Testing (Coming Soon)
- Context (Coming Soon)

## Philosophies

> This section pretty much says what we're trying to achieve in this project. Some of the items are clickable and will direct you to helpful articles.

- **You should code with a mindset that a dev with only 1 week of react/ts experience can follow through comfortably.**
- ["Don't Solve Problems, Eliminate Them" by Kent C. Dodds](https://kentcdodds.com/blog/don-t-solve-problems-eliminate-them)
- **Be as declarative with your coding as possible**. Let the component names, function names, built-in function usage tell what you're trying to achieve. We always appreciate verbose, self-explanatory codes over shortcuts that don't explain itself.
- **Always consider the future developers who will be handling your code.** This extra effort we put into the semantics, typings, testings, documentations, rules, and conventions gives us confidence with our work. The future devs will also thank you for making their job easier.

## Technologies Overview

### Tech Stacks

- React 17.0.2
- TypeScript 4.2.4
- Jest ^26.6.3
- react-testing-library ^11.2.5

### Lints

Please note that our ESLint config is **loosely based** on airbnb. There's a few modifications to make the linting as bearable as possible without being too loose. Also, there's some rules that straight up don't make sense. Like `eslint-plugin-unicorn`'s no abbreviation rule. Please checkout the `eslintrc.js` for such modifications

- ESLint

  - [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
  - `@typescript-eslint/recommended`
  - `eslint-comments/recommended`
  - `jest/recommended`
  - `react/recommended`
  - `promise/recommended`
  - `unicorn/recommended`

- Stylelint
  - `stylelint-8-point-grid`
  - `stylelint-rscss`

### Common rules

Common rules such as indent sizes can be found in `.prettierrc` and `.editorconfig`

## Folder Structures, Files, and Flows

### Structure Overview

```
📦react
 ┣ 📂app
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂helpers
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂test
 ┃ ┃ ┣ 📜Dashboard.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂page-one
 ┃ ┗ 📂page-two
 ┣ 📂components
 ┃ ┣ 📂test
 ┃ ┣ 📜Alert.tsx
 ┃ ┣ 📜MainBody.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂helpers
 ┃ ┣ 📂test
 ┃ ┣ 📜format-string.ts
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📂test
 ┃ ┣ 📜use-alert.ts
 ┃ ┗ 📜index.ts
 ┣ 📂context
 ┃ ┗ 📜user-information.tsx
 ┗ 📜root.js
```

### App Directory

`react/app/*`

App holds all the pages in every route

- Only put directory here that has corresponding routes already declared.
- Every page folder should be flat as possible regardless of its routes, size, and structures
- You can separate sub pages by giving it prefixes

```
❌❌❌ DON'T DO THIS ❌❌❌
📦app
 ┣ 📂...
 ┗ 📂plan
 ┃ ┣ 📂add-on
 ┃ ┣ 📂coverage
 ┃ ┗ 📂overview
```

```
✅✅✅ DO THIS ✅✅✅
📦app
 ┣ 📂...
 ┣ 📂plan
 ┣ 📂plan-add-on
 ┣ 📂plan-coverage
 ┗ 📂plan-overview
```

### Page Structures and Files

`react/app/<Page>/*`

Page holds all of the relevant files in a view.

```
📦<Page>
 ┣ 📂components
 ┣ 📂helpers
 ┣ 📂hooks
 ┣ 📂test
 ┣ 📜<Page>.tsx
 ┗ 📜index.tsx
```

- `index.tsx`
  - This is our gateway through the external source. Like the hatch in a spaceship 🚀.
  - You can do external side effects like `document.title` here. This component also receives routing params, external props, `cookies`, `localstorage`, and other side effects that are not related to the page.
  - This particular component is what you import to `remount` or any routing gateway like Next.js's `page`.
  - Unlike any other component, `index.tsx` is exported by default (explicitly advised by ESLint).
- `<Page>.tsx`
  - The container component.
  - All API calls, lifecycles, state management, etc, should be imported here. You'll need to seperate the chunk of codes to a custom hooks if it gets unwieldy. More on that in the [hooks sections](#hooks)
  - We encourage [container/presentational component pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) in every page. While it's true that `hooks` kinda solved the separation problem, we still believe that being consistent with container pattern will help the codebase and the team in a long run.
- `<Page>/components/`
  - Avoid adding directory inside the `/components`
  - Keeping `/components` flat will encourage the dev to code declaratively.
  - It will also help on debugging as it is easy to pinpoint what components does what on the names alone.
  - It's less painful to import stuff relatively

```
❌❌❌ AVOID ❌❌❌
📦<Page>
 ┣ 📂components
 ┃ ┣ 📂add-ons
 ┃ ┃ ┣ 📜Container.tsx
 ┃ ┃ ┣ 📜Swiper.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📜UsersList.tsx
 ┣ 📂...
 ┣ 📜<Page>.tsx
 ┗ 📜index.tsx
```

```
✅✅✅ DO THIS ✅✅✅
📦<Page>
 ┣ 📂components
 ┃ ┣ 📜AddOns.tsx
 ┃ ┣ 📜AddOnsContainer.tsx
 ┃ ┣ 📜AddOnsSwiper.tsx
 ┃ ┗ 📜UsersList.tsx
 ┣ 📂...
 ┣ 📜<Page>.tsx
 ┗ 📜index.tsx
```

- `<Page>/helpers/`
  - Plain JS function helper should go here. We advise you to seperate them in file. Make it as flat as possible.
  - Sometimes you'll create related functions. Example: `formatPax()`, `formatCurrencies()` and `addPrefix()` all format strings. You can just combine them to a single file named `format-string.ts` and do a named export.
  - If you think the helper will be used frequently, kindly transfer it to the [helpers directory](#helpers-directory)
  - `constants.ts` should be put here. All hardcoded values should be put here.
  - Never put anything that is related to react here. We have `/components` and `/hooks` for that

```
📦<Page>
 ┣ 📂helpers
 ┃ ┣ 📜constants.ts
 ┃ ┗ 📜format-currency.ts
 ┣ 📂...
 ┣ 📜<Page>.tsx
 ┗ 📜index.tsx
```

- `<Page>/hooks/`
  - States, lifecycles, API calls should be put here
  - `api.ts` is where we put anything related to API calls. Most of the parsing and stuff should happen here. We also want to put them in custom hooks as modern API tools like `axios-hooks` encourages us to do so
  - [More information can be found in the hooks sections](#hooks)

```
📦<Page>
 ┣ 📂hooks
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜use-multi-item.tsx
 ┃ ┗ 📜use-parse-pricing.tsx
 ┣ 📂...
 ┣ 📜<Page>.tsx
 ┗ 📜index.tsx
```

- `<Page>/test/`
  - (Coming Soon)

### Components Directory

```
📦react
 ┣ 📂...
 ┣ 📂components
 ┃ ┣ 📂test
 ┃ ┣ 📜DashboardNavigation.tsx
 ┃ ┣ 📜MainBody.tsx
 ┃ ┗ 📜index.ts
 ┗ 📜root.js
```

Components directory is where we put our reoccuring components.

- All of the components here must be imported in the index.ts. So it doesn't get messy when we import it to the page
- If the component is small enough, you can get away by just putting it in a single file.
- Bigger components can be put in its own folder. It should have the same name as the component.

```
📦react
 ┣ 📂...
 ┣ 📂components
 ┃ ┣ 📂...
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜Body.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┣ 📜...
 ┃ ┣ 📜Modal.tsx
 ┃ ┗ 📜index.ts
 ┗ 📜root.js
```

- If you're going to use a custom hooks for this, you should put it in the [hooks directory](#hooks-directory) with a format of `use-<component>.ts`
- Same goes with helpers. Put it in the [helpers directory](#helpers-directory). Make the helpers as generic as possible.

### Helpers Directory

```
📦react
 ┣ 📂...
 ┣ 📂helpers
 ┃ ┣ 📂test
 ┃ ┣ 📜format-string.ts
 ┃ ┗ 📜index.ts
 ┗ 📜root.js
```

- All of the commonly used functions should go here.
- It should not contain anything related to react.
- Make the directory flat as much as possible
- Import the helpers in the `index.ts`
- Avoid specific helpers for a component as much as possible. Make the helpers as generic as you can. If it cannot be avoided, use this format: `<component>-helpers.ts`.

### Hooks Directory

```
📦react
 ┣ 📂...
 ┣ 📂hooks
 ┃ ┣ 📂test
 ┃ ┣ 📜use-notifications.ts
 ┃ ┗ 📜index.ts
 ┗ 📜root.js
```

- We should put our custom, reusable hooks here. It can also include hooks that is specific for a component.
- Make the directory flat as much as possible
- Import the hooks in the `index.ts`

## Naming

- General Rules

  - Avoid abbreviation. It's fine to have long names as it helps when other people searches for your code.
  - Follow the meta. So devs that came from other languages have an idea of what the data represents

- Extensions:
  - `*.tsx` for components.
  - `*.ts` for hooks, helpers, and directory indexes (`index.ts`)
- File names:
  - Always use `kebab-case` for file names. That includes images, json, and other files.
  - Components are exceptions. Use `PascalCase` for components.
  - The names are usually similar on what we're exporting
  - **Components**: `MyComponent.tsx`
  - **Hooks**: `use-my-app.tsx`. Always prefix it with `use-`
  - **API**: `api.ts`. We'll keep all our api calls inside and named export them.
  - **Constants**: `constants.ts`.
  - **Helpers**: `format-something.ts`. Preferably indicates action in the name alone.
  - **Context**: `user-information.ts`. This should be named as generic as possible.
- Literals and Functions

```javascript
/**
 * "Strings", Numbers, {Objects}, [Arrays]
 *
 * Usually comes in camelCase
 */
const myVariable

/**
 * Boolean
 *
 * camelCase
 * Always prefixed by `is` or `isNot`
 */
const isValid

/**
 * Functions
 *
 * camelCase
 * Should always named by its purpose through action words
 * Action first before the context
 */

// ❌ bad
const detailsChange = () => null
// ✅ good
const changeDetails = () => null

/**
 * Constant
 *
 * UPPER_CASE_SNAKE_CASE
 */
const MOCK_PLAN_DETAILS
```

- Component Names:
  - Will always be formatted as `PascalCase`
  - Be literal. `ToothButton` will always be better than `DentistButton`
  - Name components by combining their appearance, context, and purpose
  - Components that are associated with other components should have the same prefixes.

```javascript
// ❌ bad
const CalendarPicker
// ✅ good
const CalendarDatePicker

// ❌ bad
const MenuButton
// ✅ good
const MenuToggle

// ❌ bad
const SearchBar
// ✅ good
const UserTableSearchBar
```

- Hooks
  - Comes in camelCase
  - Always prefixed with `use`

```javascript
const useDataTable = () => null
```

- Types (TypeScript)
  - Always in PascalCase
  - Avoid abbreviations
  - Usually it has the same name of the variables/functions/components suffixed with `-Types` at the end
  - A component might require you another types. Example, variables in GraphQL. Or params in your API fetcher. We usually add `-Vars` for both.
  - Will add more special cases in the future

```typescript
// ❌ bad
interface IDataTable {...}
// ❌ bad
interface DTableTypes {...}
// ✅ good
interface DataTableTypes {...}

const DataTable: React.FC<DataTableTypes> = () => null

```

```typescript
interface GetDataTableTypes {...}
interface GetDataTableVars {...}

const GetDataTable = useAxios<GetDataTableTypes, GetDataTableVars>({...})
```

## Comments

> Modern React, TypeScript intellisense and functional programming kinda solves the comments dillema for us. Usually, declarative naming of things explains themselves enough. Hovering on functions, types, and components usually gives you everything you need to know via Intellisense. But sometimes, we'll need to explain some things that might be confusing. ~~Most of the time it's your code that needs to be fixed lol~~.

Here's some pointers for adding comments in the project

- [We highly encourage everyone to use Better Comments extension for VSCode.](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- `Better Comments` colors your comments so you'll know the context at a glance. Please use it regularly.
- Avoid commenting obvious things, especially if the function/method names explain themselves already

```javascript
❌❌❌ PLS DONT ❌❌❌
// ? This gets the percentage of the insurance and round it up
const bonePercentage = Math.round((insuranceBalance / totalInsurance) * 100)
```

- Notes[❔] and warnings[❗] should be commented if the particular code does not make sense in a glance

```jsx
{
  // ! For some reason this particular library requires ref but doesn't really needed it
}
;<Textfit ref={undefined} mode='single'>
  {name}&apos;s
</Textfit>
```

- Sometimes you want to walk through your code. We encourage you to put some numeric bullets to it.

```typescript
  /**
   * How the computation works:
   * 1. User selects an add-on. The useEffect for setFees will be notified
   */
  useEffect(() => {
    // 2. Filter the addons that has the selected ids.
    //    This will give us FeesTypes type of array by just passing fees property from the addOns in the map
    setFees(...)
  }, [selectedAddOnsId])

  useEffect(() => {
    // 3. After fees is updated, this useEffect will be notified

    // 3.1. monthlyCoverageCost + summation of (fees[].addedCost)
    setTotalMonthlyCoverage(
      fees.reduce<number>(...)
    )

    // 3.2. currentPlanCoverage + summation of (fees[].additionalFromBasic)
    setTotalAnnualCoverage(
      fees.reduce<number>(...)
    )
  }, [fees])

  useEffect(() => {
    // 4. This useEffect will trigger if there's changes in totalAnnualCoverage and totalMonthlyCoverage

    // 4.1. Finally, override both coverage by using setPlanDetails from the container to update the UI.
    setPlanDetails(...)
  }, [totalAnnualCoverage, totalMonthlyCoverage])
```

## TS Typing

- [We follow React + TypeScript Cheatsheets in the project](https://github.com/typescript-cheatsheets/react). Everything that you need to know for our implementation of TS should be there.
- **Interfaces and types should always be initialized in the file where it was first used.** We don't really need to export the types to a separate for our usage.
- **Interface/Types that is associated with the variable/functions/components should be right at the top of them by default**
- Export the types directly in the file. **Always import types from the top of the directory layer not the other way around**

## Components and State Management

We highly recommend you to read the following. Most of our conventions and coding styles are greatly explained in this articles

- [React SOLID Principle Application](https://medium.com/docler-engineering/applying-solid-to-react-ca6d1ff926a4).
- [Presentational/Container Pattern. The code isn't updated to the latest version but it's still relevant](https://scotch.io/courses/5-essential-react-concepts-to-know-before-learning-redux/presentational-and-container-component-pattern-in-react)
- [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react)
- [I recommend you to check out kentcdodds blogs. It will definitely help you a lot in your react journey](https://kentcdodds.com/blog)

## 3rd Party Libraries

> 3rd Party Libraries undeniably solves a lot of our problems. But we consider it as a double edge sword. Sometimes it's a god send for our problems. And sometimes it just breaks the codebase entirely after upgrading the dependencies.

These are the things you should consider before using any libraries:

- **Is the library still actively maintained?**
  - This is the single, most important thing when we consider adding a library in the project.
  - We will always want the most recent libraries for our project, as we constantly update our stack.
  - Always check out the library's github page
  - **Avoid projects that has updates that is longer than 1 year. A library stagnant that long is a dead project.**
- **Does anyone know you'll be using this library?**
  - Having second opinion is always good
  - Another dev might have created the solution before
  - Also you might be overthinking when you thought we needed it.
- **Can we do it on our own?**
  - Sometimes, a component is small enough that we can create something similar in a reasonable timeline.
  - We will always have a full control of what features we will want if we make a custom component on our own.
  - You can make it an opensource library and you might blow up overnight 🎊
- **Does it support TypeScript?**
  - A library without TS is no bueno for us. We don't want to type for them. We want to spend our energy elsewere
- **Is it standalone?**
  - **YOU WILL NEVER EVER WANT TO INSTALL REACTSTRAP JUST TO USE THE MODAL!!**
  - Always consider relatively small and lightweight libraries for your needs
- **Does it make sense?**
  - A library isn't always the solution you're looking for. Always look for alternatives. Sometimes, you just need some ⭐CSS magic⭐

## Helpers

> Helpers are just JavaScript functions. If you have the opportunity to seperate a non-react logic, you should always consider putting it as a helper function.

- Helper functions consist of these operations
  - String Manipulations
  - LocalStorage helpers
  - Configurations getter
  - Specific Maths
  - Array Manipulations
  - Etc.
- They should be as generic as possible
- It shouldn't have anything related to React
- Separate them by files based on their purpose
- Combine related files by categories. Something like string manipution functions should go to `format-strings.ts` and LocalStorage operations should go to `localstorage-modifiers.ts`

## Hooks

> These articles and videos are great resources for hooks. They'll explain everything about hooks to you better than we'll ever will

- [10 React Hooks Explained (Plus Build your own from Scratch) by Fireship [YouTube]](https://www.youtube.com/watch?v=TNhaISOUy6Q&t=1s)
- [Why React Hooks by Kent C. Dodds [YouTube]](https://www.youtube.com/watch?v=zWsZcBiwgVE&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)
- [Introduction to hooks by official React docs](https://reactjs.org/docs/hooks-intro.html)
- [Rules of Hooks by react docs](https://reactjs.org/docs/hooks-rules.html)
- [Building your own hooks by react docs](https://reactjs.org/docs/hooks-custom.html)

> We will also add some pointers for using some of these hooks

- `useState` and `useEffect` is the two most used hooks in the project
- Most of the time, `useState` does the job. For a more complex UI such as drag and drop lists, we might want to use `useReducer` for it.
- Make a habit of creating a custom hooks in your page. Separate the logic based on their purpose. Use as much custom hooks as based on how many you can separate.
- Obscure hooks like `useMemo`, `useCallback`, and `useRef` should not be abused. It will only add another layer of complexity to the project. They are there as "special" hooks and should be used sparingly. [Please read this article as to why we're not a fan of using them](https://kentcdodds.com/blog/usememo-and-usecallback)
