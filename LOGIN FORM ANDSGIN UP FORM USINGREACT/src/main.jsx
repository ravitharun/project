import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from"./Componenets/Form";
import Form2 from "./Componenets/Form2";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/Form2" element={<Form2 />} />
    </Routes>
  </BrowserRouter>
);
