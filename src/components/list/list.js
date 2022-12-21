import React from "react";
import "./list.css";
function List({list}){
    
    return(
       
            <div className="right">
                <input type="text" name="right-input" placeholder="Siyahı adını daxil edin"/><br/><br/>
            <ul>
                {
                    list?.map(item=>{
                        return(
                            <>
                            <div className="list-ul">
                                <li>{item}</li>
                            </div>
                            </>
                        )
                    })
                }
            </ul>
<button name="right-btn">siyahını yadda saxla</button>
</div>
            
        
    )
}
export default List;
