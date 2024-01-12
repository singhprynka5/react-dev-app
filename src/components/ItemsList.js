import { CDN_URL } from "../utils/constant";

const ItemsList = ({ items }) => {
    return (
        <div>
            {items.map(item => (
                <div
                    key={item?.card?.info?.id}
                    className="p-2 m2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info.name}</span>
                            <span>- ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <div className="text-xs">
                            {item?.card?.info.description}
                        </div>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute ">
                            <button className="p-1 mx-16 rounded-lg bg-black text-white shadow-lg">Add+</button>    
                        </div>
                        <img src={`${CDN_URL}${item?.card?.info?.imageId}`} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemsList;