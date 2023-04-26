// React libs
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Global Styles
import './index.css'

// Context
import { AuthContextProvider } from './context/AuthContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Protected from './routes/Protected';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import AdminArea from './pages/AdminArea';
import Pizza from './pages/Pizza.jsx';
import NotFound from './pages/NotFound.jsx';
import SignUp from './pages/SignUp';
import EditPizza from './pages/EditPizza';
import NewPizza from './pages/NewPizza';
import Cart from './pages/Cart';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <AuthContextProvider>
        <Header />
        <Routes>

          {/* Proteced Routes */}
          <Route path='/' element={<Protected> <Home />  </Protected>}></Route>
          <Route path='/pizza/:id' element={<Protected><Pizza /> </Protected>}></Route>
          <Route path='/edit_pizza/:id' element={<Protected><EditPizza /> </Protected>}></Route>
          <Route path='/new_pizza' element={<Protected><NewPizza /> </Protected>}></Route>
          <Route path='/admin_area' element={<Protected> <AdminArea /></Protected>}></Route>
          <Route path='/cart' element={<Protected> <Cart /></Protected>}></Route>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/*' element={<NotFound />}></Route>

        </Routes>
        <Footer />
      </AuthContextProvider>

    </BrowserRouter>
  </React.StrictMode >,
)
