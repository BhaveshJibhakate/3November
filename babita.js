//this is babita file
//this is for testing

function fetchdata() {

   fetch("https://fakestoreapi.com/products")
   .then((response)=>{
      if(!response.ok){
        throw new Error("network does not responded with proper response");
        
         } console.log(response.statusText);
      
       return response.json();
   })
   .then((data)=>{
    console.log("this is the response of the api",data);
    
   })
   .catch((error)=>{
    console.log("somethingggggggg went wrong",error);
    
   });
   

}

fetchdata()



async function fetchdata2(){
  
    try {

        const response=await fetch("someurl")
        if(!response.ok) {
            console.log("network does not responded with ok");
            return;
        }
        const data=await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("something went wrong",error);
        
    }   
    


}
