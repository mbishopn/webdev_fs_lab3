export default function Listing({pic, country, location, rating, price})
{
    
    return(
        <>
        <div className="Listing">
            <img src={pic} alt="" width="150"></img>
            <div>
                <h3>{country}</h3>
                <p>{location}</p>
                <p className={rating>4?"rgreen":"rred"}>{rating}&#9733;</p>
                <p>${price}/night</p>
            </div>
        </div>
        </>
    )
}