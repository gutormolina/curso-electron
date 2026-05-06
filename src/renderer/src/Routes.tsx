import { Router, Route } from 'electron-router-dom'

import { Home } from './pages/home.js'
import { Detail } from './pages/detail.js'
import { Create } from './pages/create.js'
import { About } from './pages/about.js'
import { Layout } from './components/layout/index.js'

export function Routes(){
    return(
        <Router
            main={
                <Route path='/' element={ <Layout/> } >
                    <Route path='/' element={<Home/>} />
                    <Route path='/customer/:id' element={<Detail/>} />
                    <Route path='/create' element={<Create/>} />
                    <Route path='/about' element={<About/>} />
                </Route>
            }
        />
    )
}