import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import AddPost from './pages/AddPost';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';
import DefaultLayout from './component/DefaultLayout';
import AlertContext from './contexts/AlertContext';

function App() {

  return (
    <>
      <AlertContext.Provider value={{ message: "Ciao" }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Homepage />} />
              <Route path="chi-siamo" element={<ChiSiamo />} />
              <Route path="/add-post" element={<AddPost />} />
              <Route path="/post-detail" element={<PostDetail />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertContext.Provider>
    </>
  )
}

export default App
