import { Header } from './features/layout/components/Header';
import { Content } from './features/layout/components/Content';
import { Footer } from './features/layout/components/Footer';
import { Article } from'./features/layout/components/Article';
import { Props } from'./features/layout/components/Props';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// npm install react-router-dom (comando instalar)
function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path='/inicio'element={<Content/>}></Route>
      <Route path='/articles'element={<Article/>}></Route>
      <Route path='/props'element={<Props/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;