import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Services,
  Contact,
  EnglishContact,
  PolishContact,
  GermanContact,
  Error404,
} from './pages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />}>
          <Route path="us" element={<EnglishContact />} />
          <Route path="pl" element={<PolishContact />} />
          <Route path="de" element={<GermanContact />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
