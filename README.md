# PythonWAReact
Front end code of the PythonWebApp repo


The React app will have a homepage with two components, one would be the admin app and the other would be the main app.
To start off, we will use a template from https://getbootstrap.com/ and replace it in our App.tsx file.

Instead of importing all components from admin folder independently, use a react-router-dom instead. Install with this command:
```
npm i react-router-dom @types/react-router-dom
```

where the first part `react-router-dom` corresponds to the javascript code and the second `@types/react-router-dom` to the typescript version.
The react-router-dom wasn't added in the package.json by default, so copied it from the package-lock.json to dependecies section. The BrowserRouter was acting up, so I wrapped the `Route` element in a `Routes` element which rendered the homepage and the route successfully. 
**Update:** I wasted my time in adding react-router-dom to the PythonWAReact folder, which doesn't even need it since I'm working in the react-crud directory. X( Silly me.

### Setting up the Main app.

We add a template code from getbootstrap.com to create the Main page. A route is added to the App.tsx page, but the component is stuck to all the pages. For that the Navbar and menubar are placed in a wrapper component for Admin. 
Making a React component of the type PropsWithChildren makes it usable as a containing element like `<element></element>` instead of `<element />` and it can also contain other elements. 

Since we are using React v18, exact keyword is no longer required in routes. Routes are by default made exact so components should not be sticking on the page of another component. Move components into Admin. 

### Products CRUD
UseEffect is used in React to load some effect in the component. It takes 2 parameters: a function, that creates the effect and an array of dependencies. The dependecies are used only once in the useEffect function. If a variable is passed in as a dependency, the effect is called everytime the variable value changes.

`useEffect` is a React Hook that lets you synchronize a component with an external system. It accepts two arguments: a callback function and an optional dependency array. The second argument is optional. `useEffect(<function>, <dependency>)`. Some examples of side effects are: fetching data, directly updating the DOM, and timers. You can use useEffect to perform side effects in your components. 


### Building the Product Create page

When building the form to create a new product, the page refreshes by default upon clicking submit. To prevent this, use a SyntheticEvent which allows preventing the default refreshing of the page. 

A wrapper is created that allows loading different components on the home page while keeping the navigation bar and side bars intact.