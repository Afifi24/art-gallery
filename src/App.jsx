import Location  from './pages/Location'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/location' element={<Location/>}/>
        </Routes>
    </div>
  )
}

export default App