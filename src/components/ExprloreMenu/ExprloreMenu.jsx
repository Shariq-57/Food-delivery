// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react' 
import './ExprloreMenu.css'
import { menu_list } from '../../assets/assets'

function ExprloreMenu() {

    const [category, setCategory] = useState("All");

    return (
        <>
            <div className='explore-menu' id='explore-menu'>
                <h1>Explore our menu</h1>
                <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit fuga maxime dolorum corporis vitae animi, deserunt beatae tempora quam explicabo nisi suscipit distinctio.</p>
                <div className='explore-menu-list'>
                    {
                        menu_list.map((item, index) => {
                            return (
                                <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                                    <p> {item.menu_name} </p>
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
            </div>
        </>
    )
}

export default ExprloreMenu