import { useEffect, useState } from "react"
const usePagination=(data)=>{
    const [paginatedData, setPaginated]=useState([]);
    const [page, setPage]= useState(1);
    let pagePerItem=10;
    useEffect(()=>{
        if(data.length>0){
            let generatedData= data.slice(page*pagePerItem -pagePerItem, page*pagePerItem);
             console.log("generatedData inner", generatedData);
             
            setPaginated(generatedData);
         }
    },[page, data]);
    return {paginatedData, page, setPage}
}
export default usePagination;