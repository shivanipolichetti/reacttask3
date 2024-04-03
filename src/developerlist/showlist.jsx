import { employees } from "./list";


const ShowList=()=>{
    const  filterquery="reactdeveloper";
    const filterArray=(query)=>{
        return employees.filter(value=>value.designation==query&& value.salary>10000)

    }
    return(
           <>
           
         {
             filterArray("reactdeveloper").map(value=>
                <>
                <h5>Name:{value.name}</h5>
                <h5>Designation:{value.designation}</h5>
                <h5>Salary:{value.salary}</h5>
                </>
             
             )
         }
          {
             filterArray("angular developer").map(value=>
                <>
                <h5>Name:{value.name}</h5>
                <h5>Designation:{value.designation}</h5>
                <h5>Salary:{value.salary}</h5>
                </>
             
             )
         }
          {
             filterArray("nodejsdeveloper").map(value=>
                <>
                <h5>Name:{value.name}</h5>
                <h5>Designation:{value.designation}</h5>
                <h5>Salary:{value.salary}</h5>
                </>
             
             )
         }
          {
             filterArray("pythondeveloper").map(value=>
                <>
                <h5>Name:{value.name}</h5>
                <h5>Designation:{value.designation}</h5>
                <h5>Salary:{value.salary}</h5>
                </>
             
             )
         }
        </>
    )
}

export default ShowList;