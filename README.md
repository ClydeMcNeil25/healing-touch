# healing-touch
This is a website for Daniel’s Healing Touch
# React SpinUp.
## Prerequisites.
* `node` and `npm` are installed.
## Adding React To an Existing Project.
1. `cd` into the project and run `npx create-react-app frontend`.
2. Replace the `./frontend/package.json` created in step1 with the `./frontend/package.json` in this project.
3. Run `rm -rf node_modules package-lock.json` in `/frontend`.
4. Run `npm install` in `/frontend`.
5. Delete every file in `frontend/src`.
6. Create a new file called `frontend/src/ui/App.js` with the content below.
```jsx
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const App = () => ( <h1 className="text-info">Is this thing on?</h1> );
```
7. Create a new file called `/frontend/src/index.js` with the content bellow
```jsx
import {createRoot} from "react-dom/client"
import { App } from './ui/App'

const container = document.getElementById('root')
const rootContainer = createRoot(container)
rootContainer.render(<App />);
```
## Adding React Router To A Project.
1. Create a new Component called Home in `/frontend/src/ui/Home.js` with the content below.
```jsx
import React from "react"

export const Home = () => {
   return (
      <>
         <h1>Home</h1>
      </>
   )
}
```
2. Create a new component called FourOhFour in `/frontend/src/ui/FourOhFour.js` with the content below.
```jsx
import React from "react"

export const FourOhFour = () => {
   return (
      <>
         <h1>Y U NO FIND</h1>
      </>
   )
};

```
3. Rewrite `/frontend/src/ui/App.js` with the content below.
```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'

export const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route  path='/' element={<Home />} />
				<Route path="*" element={<FourOhFour />} />
			</Routes>
		</BrowserRouter>

	</>
)
```