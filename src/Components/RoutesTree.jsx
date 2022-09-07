import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Journal from './Pages/Journal'
import Edit from './Pages/Edit'
import View from './Pages/View'
import Entry from './Pages/Entry'
import About from "./Pages/About";

function RoutesTree(){
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/entry' element={<Entry/>}/>
                <Route path='/edit' element={<Edit/>}/>
                <Route path='/view' element={<View/>}/>
                <Route path='/journal' element={<Journal/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    )
}

export default RoutesTree;