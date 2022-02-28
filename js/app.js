const phoneSearch=()=>{
    //search value access
   const search=document.getElementById('search-box')
  const searchText=search.value ;
  search.value=''
  const errorMsg= document.getElementById('errorMsg')
  errorMsg.innerText=''
//error handeling
if(searchText==''){
   
   errorMsg.innerHTML='Please Search Any Kinds Of Phone Name'
   return
}
else{
    //api access
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  .then(res=>res.json())
  .then(data=>displayData(data.data))
}
  
  
}
//function for display data

const displayData=(datas)=>{
    // console.log(datas);

    const searchResult=document.getElementById('search-result')
    searchResult.textContent=''
    //error handeling for wrong value
    const errorMsg= document.getElementById('errorMsg')

  errorMsg.innerText=''
    if(datas.length==0){
    
      errorMsg.innerHTML="Oops!Your Search Result isn't  found"
      return
    }
    else{
        datas.forEach(data=>{
            // console.log(data.phone_name);
            const div=document.createElement('div')
            div.classList.add('col')
            div.innerHTML=`
            <div class="card m-3">
            <img  class='img-fluid w-75' src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${data.phone_name}</h4>
              <h5 class="card-title">${data.brand}</h5>
              <button class="btn btn-success" onclick="details('${data.slug}')">Details</button>
              
            </div>
          </div>
        </div>
            `
            searchResult.appendChild(div)
        })
    }
    
   
}

const details=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res=>res.json())
    .then(data=>displayDetails(data.data))
}

const displayDetails=(details)=>{
// console.log(details);

    const phoneDetails=document.getElementById('details')
    if(details!=0 ){
        phoneDetails.innerHTML=`<h1 class='text-center fw-bold shadow=lg'>This Product Details is not available</h1>`
    }
    
    phoneDetails.innerHTML=`
    
    
    <div class="col-md-12 ">
    <img class="img-fluid" src="${details.image}" alt="" srcset="">
  <div class="card-body">
    <h5 class="card-title">${details.name}</h5>
    
       
            if (details.releaseDate!=0) {
                console.log('realsedate nai');
            }
        else{

        }
    
   
    
    <h5 class="text-center">MainFeatures</h5>
    <h6>ChipSet: ${details.mainFeatures.chipSet}</h6>
    <h6>DisplaySize:${details.mainFeatures.displaySize}</h6>
    <h6>Memory: ${details.mainFeatures.memory}</h6>
    <h5 class="text-center">Others</h5>
    <h6>Bluetooth: ${details.others.Bluetooth}</h6>
    <h6>GPS:${details.others.GPS}</h6>
    <h6>NFC: ${details.others.NFC}</h6>
    <h6>Radio:${details.others.Radio}</h6>
    <h6>USB: ${details.others.USB}</h6>
    <h6>WLAN: ${details.others.WLAN}</h6>
    
    
   
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>

    
    `
    


}