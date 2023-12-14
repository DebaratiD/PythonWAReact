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
1:42:08