import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
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

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return <h1>It seems you're offline. Please check your internet connection!!!</h1>
    }

    return (
        <div>
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black"
                        value={searchText}
                        onChange={(evt)=> setSearchText(evt.target.value)}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=> {
                         let fiteredRestaurant = listOfRestaurant.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            || restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFiteredRestaurant(fiteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurant.filter(res => res?.data?.avgRating > 4.4 || res?.info?.avgRating > 4.4);
                        setFiteredRestaurant(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            {listOfRestaurant.length === 0 ? <Shimmer /> :
                <div className="flex flex-wrap">
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