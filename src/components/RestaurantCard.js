import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating,cuisines, costForTwo, sla } = resData?.data || resData?.info;
    return (
        <div className="m-4 p-4 w-[220px] bg-gray-100 rounded-lg hover:bg-gray-400">
            <img className="rounded-lg h-[200px] w-[200px]"
                alt="res-logo"
                src={`${CDN_URL}${cloudinaryImageId}`}
            />
            <h3 className="font-bold py-4 text-lg truncate" title={name}>
                {name}</h3>
            <h4 className="truncate" title={cuisines.join(", ")}>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;