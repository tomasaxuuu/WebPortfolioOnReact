import React from "react"
import "../src/styles/index.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { Portfolio } from "./pages/Portfolio";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ContactsPage } from "./pages/Contacts";
export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <div className="wrap">
            <Header />
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contacts' element={<ContactsPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

