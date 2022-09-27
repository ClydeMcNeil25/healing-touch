import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Navigation} from './Navigation'
import './styles/style.css'
import { About } from './About'
import { Contact } from './Contact'

export const App = () => (
	<>
		<BrowserRouter>
		<Navigation/>
			<Routes>
				<Route  path='/' element={<Home />} />
				<Route path='/about' element={<About/>}/>
				<Route path='/contact' element={<Contact/>}/>
				<Route path="*" element={<FourOhFour />} />
			</Routes>
		</BrowserRouter>

	</>
)