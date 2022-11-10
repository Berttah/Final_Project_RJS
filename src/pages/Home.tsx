import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../components/containers/Main/Main"

import SeasonContainer from "../components/containers/Season/SeasonContainer";
import Details from "../components/containers/Details/Details"

import NavBar from "../components/containers/NavBar/NavBar";
import Footer from "../components/containers/Footer/Footer";

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/Spring' element={<SeasonContainer color="#F8FFF4" season={1} />} />
                    <Route path='/Spring/:id' element={<Details color="#F8FFF4" season={1} />} />

                <Route path='/Summer' element={<SeasonContainer color="#FFF7FD" season={2} />} />
                    <Route path='/Summer/:id' element={<Details color="#FFF7FD" season={2} />} />

                <Route path='/Autumn' element={<SeasonContainer color="#FFF6EB" season={3} />} />
                    <Route path='/Autumn/:id' element={<Details color="#FFF6EB" season={3} />} />

                <Route path='/Winter' element={<SeasonContainer color="#EBFEFF" season={4} />} />
                    <Route path='/Winter/:id' element={<Details color="#EBFEFF" season={4} />} />

                {/* <Route path='/Cart' element={CartView} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Home;