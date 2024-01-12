import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API_URL } from "../utils/constant";

const Body = () => {
    const [ listOfRestaurant, setListOfRestaurant ] = useState([]);
    const [ fiteredRestaurant, setFiteredRestaurant ] = useState([]);
    const [ searchText, setSearchText ] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    fetchData = async () => {
        let data = await fetch(RESTAURANT_LIST_API_URL);
        const json = await data.json();
        const resList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(resList);
        setFiteredRestaurant(resList);
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={(evt)=> setSearchText(evt.target.value)}
                    />
                    <button onClick={()=> {
                         let fiteredRestaurant = listOfRestaurant.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            || restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFiteredRestaurant(fiteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(res => res?.data?.avgRating > 4.4 || res?.info?.avgRating > 4.4);
                    setFiteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            {listOfRestaurant.length === 0 ? <Shimmer /> :
                <div className="res-container">
                    {fiteredRestaurant.map(restaurant => (
                        <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))}
                </div>
            }
        </div>
    )
}

export default Body;