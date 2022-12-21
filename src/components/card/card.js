import React from 'react';
import "./card.css";
function Card({movieData,list,setList}) {
const addToListData=(title)=>{
    setList([...list,title]);
  console.log(title);
}

return(
    <>
    {
        movieData?.map(item=>{
           return(
           <>
                <div className='card-poster'> 
            <img src={item.Poster}/>
           </div>
           <div className='card-title'>
               <p>{item.Title} ({item.Year})</p>
               <button onClick={()=>{addToListData(item.Title)}}>siyahıya əlavə et</button>
           </div>
          </>
           )

        })
    }
    
    </>
)


}
export default Card;