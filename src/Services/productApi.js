
 export const GetCategoryMeals = async(url)=>{
    const response = await fetch(url)
    const res = await response.json()
    
    if (!response.ok) {
        console.log("API error");
        return "API error";
    }
    return res;
    
}
 export const GetRandomMeals = async()=>{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const res = await response.json()
    
    if (!response.ok) {
        console.log("API error");
        return "API error";
    }
    return res;
    
}
 export const GetPaticularCat = async(category)=>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const res = await response.json()
    
    if (!response.ok) {
        console.log("API error");
        return "API error";
    }
    return res;
    
}
 export const GetFoodDetails = async(url)=>{
    const response = await fetch(url)
    const res = await response.json()
    
    if (!response.ok) {
        console.log("API error");
        return "API error";
    }
    return res;
    
}