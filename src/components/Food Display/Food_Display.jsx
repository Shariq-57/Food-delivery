// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './Food_Display.css'
import Food_item from '../Food_item/Food_item'
import { food_list } from '../../assets/assets'
// import { StoreContext } from '../context/StoreContext'


function Food_Display() {

    // const [food_list] = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>

            <div className='food-display-list'>
                {
                    food_list.map((item, index)=> {
                        return <Food_item key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    })
                }
            </div>
        </div>
    )
}

export default Food_Display