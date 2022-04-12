import React, {useState} from 'react'
import { Star } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./SearchResult.css";

function SearchResult({img,location,title,description,star,price,total}) {
  const [like,setLike] = useState(false)
function likeResult(){
  setLike(!like)
}

  return (
    <div className='searchResult'>
      <img src={img} alt="image" />

      <FavoriteIcon className='searchResult__heart' onClick={likeResult} style={{color : like ? "red" : "gray"}}/>
      <div className="searchResult__info">
      <div className="searchResult__infoTop">
        <p> {location} </p>
        <h3>{title}</h3>
        <p>______</p>
        <p>{description}</p>

      </div>
      <div className="searchResult__infoBottom">
      <div className="searchResult__stars">
        <Star className='searchResult__star'/>
        <p> <strong>{star}</strong> </p>
      </div>
<div className="searchResult__price">
  <h3>{price}</h3>
  <p>{total}</p>
</div>
      </div>
      </div>
    </div>
  )
}

export default SearchResult
