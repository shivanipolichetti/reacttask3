import { items } from "./fruitsvegetable";


const Show=()=>{
   return(
    <>
    <h4>Fruits:</h4>
    {
        items.map(item=>(
            item.type=== "fruit" && (
                <p>{item.name}</p>
            )
        ))
    }
    <h4>Vegetables</h4>
    {
        items.map(item=>(
            item.type==="vegetable" && (
                <p>{item.name}</p>
            )
        ))
    }

    </>
   )

    
    
}

export default Show;