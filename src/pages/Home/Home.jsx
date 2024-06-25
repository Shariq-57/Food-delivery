// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExprloreMenu from '../../components/ExprloreMenu/ExprloreMenu'
import Food_Display from '../../components/Food Display/Food_Display';

function Home() {
    const [category, setCategory] = useState("All");
    return (
        <>
            <div>
                <Header />
                <ExprloreMenu category={category} setCategory={setCategory} />
                <Food_Display category={category} />
            </div>
        </>
    )
}

export default Home