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

1:36:12