# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Includes the latest version of following NPM packages:

- Typescript
- Redux Toolkit
- React Router DOM

### Directory Structure

- assets
  - audio
  - data
  - fonts
  - images
  - styles
  - video
- components
- configs
- layouts
- context
- helpers
- hooks
- interfaces
- languages
- pages
- services
- redux

### Assets

As the name says, it contains assets of our project like images, styles, fonts, ...

### Components

Components are the building blocks of any react project. This folder consists of a collection of UI components like buttons, modals, inputs, etc., that can be used across various files in the project. Each component should consist of a test file to do a unit test as it will be widely used in the project.

### Configs

A place to store application configuration, for example: API url, default languages, routes, ...

### Layouts

This is just a special folder for placing any layout based components. This would be things like a sidebar, navbar, container, etc.

### Context

The context folder stores all your React context files that are used across multiple pages. I find on larger projects you will have multiple context you use across your application and having a single folder to store them is really useful.

### Helpers

It contains the reusable helper functions.

### Hooks

The hooks folder contains every single custom hook in your entire project. This is a useful folder to have in any size project since almost every project will have multiple custom hooks so having a single place to put them all is really useful.

### Interfaces

A place to store interfaces and types in Typescript.

### Languages

A place to store multi language files.

### Pages

The files in the pages folder indicate the route of the React application. Each file in this folder contains its route. A page can contain its subfolder. Each page has its state and is usually used to call an async operation. It usually consists of various components grouped.

### Services

It contains the http request function using axios or ...

### Redux

A place to store Redux files.
