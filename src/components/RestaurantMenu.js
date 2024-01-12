import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="m-4 p-4 bg-gray-50 rounded-lg">
            <h1 className="font-extrabold">{name}</h1>
            <p className="font-bold mb-5">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards?.length && itemCards.map(item => (
                    <li className="font-medium" key={item?.card?.info?.id}>
                        {item?.card?.info?.name} = Rs. {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;