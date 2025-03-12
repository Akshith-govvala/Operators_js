import React from "react";
const Mobiles=()=>{
    const [mobiles,SetMobiles]=useState();
    const get_mobiles=async()=>{
        const res=await axios.get("http://localhost:8081/mobiles")
        const {data}=res;
        SetMobiles(data);
    }
    useEffect(()=>{
        get_mobiles();
    },[])
    return(
        <>
        <div className="parent">
            {
                mobiles.map((element,index)=>{
                    return(
                        <div className="child" key={index}>
                            <img src={element.pimage}/>
                            <h2>{element.pname}</h2>
                            <h4>{element.pcost}</h4>
                            <h4>{element.pqty}</h4>
                        </div>
                    );
                })
                    
            }
        </div>
        </>
    );
}
export default Mobiles;
