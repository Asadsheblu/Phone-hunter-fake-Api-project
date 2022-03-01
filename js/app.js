//spinner function
const toggler=disPlayStyle=>{
    const spinner=document.getElementById('spinner')
    spinner.style.display=disPlayStyle
}



const phoneSearch=()=>{
    //search value access
   const search=document.getElementById('search-box')
  const searchText=search.value ;
  search.value=''
  const errorMsg= document.getElementById('errorMsg')
  errorMsg.textContent=''
  toggler('block')
//error handeling
if(searchText===''){
   
   errorMsg.innerHTML='Please Search Any Kinds Of Phone Name'
   toggler('none')
   return
}
else{
    //api access & get data from search box
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  .then(res=>res.json())
  .then(data=>displayData(data.data))
}
  
  
}
//function for display data

const displayData=(datas)=>{
  // console.log(datas);
    //spinner function call
    toggler('block')
    const searchResult=document.getElementById('search-result')
    searchResult.textContent=''
    //error handeling for wrong value
    const errorMsg= document.getElementById('errorMsg')

  errorMsg.innerText=''
    if(datas.length==0 || typeof datas=='number'){
    
      errorMsg.innerHTML="Oops!Your Search Result isn't  found"
      toggler('none')
      return
    }
    else{
        datas.slice(1,21)?.forEach(data=>{
            
           
            const div=document.createElement('div')
            div.classList.add('col')
            div.innerHTML=`
            <div class="card m-3 shadow-lg bg-light">
            <img  class='img-fluid w-75' src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">Name:${data.phone_name}</h4>
              <h5 class="card-title">Brand:${data.brand}</h5>
              <button  class="btn btn-success" onclick="details('${data.slug}')"><a class=" text-decoration-none text-light" href="#details">Details</a></button>
              
            </div>
          </div>
        </div>
            `
            searchResult.appendChild(div)
        })
        //stop spinner
        toggler('none')
    }
    
   
}
//details function
const details=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res=>res.json())
    .then(data=>displayDetails(data.data))
}

const displayDetails=(details)=>{
// console.log(details);

    const phoneDetails=document.getElementById('details')
    
    phoneDetails.textContent=''
    const div=document.createElement('div')
    
    div.innerHTML=`
    
    <div id="details" class="card mb-3" style="max-width: 540px;">
                
   
    <div class="row g-0 ">
                  
               
          <div class="col-md-4">
          <img class="img-fluid text-center" src="${details.image}" alt="" srcset="">
               </div>
               <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Name:${details.name}</h5>
                    <h5 class="card-title">${details.releaseDate ? details.releaseDate : "no release date found"}</h5>
                    <h5 class="text-center">MainFeatures</h5>
                    <h6>ChipSet: ${details.mainFeatures.chipSet}</h6>
                    <h6>DisplaySize:${details.mainFeatures.displaySize}</h6>
                    <h6>Memory: ${details.mainFeatures.memory}</h6>
                    <h6 class="text-center">Sensor</h6>
                    <h6> ${details.mainFeatures.sensors}</h6>
                   
                    <h5 class="text-center">Others</h5>
                    <h6>Bluetooth:${details.others?.Bluetooth}</h6>
                    <h6>GPS:${details.others.GPS}</h6>
                    <h6>NFC: ${details.others.NFC}</h6>
                    <h6>Radio:${details.others.Radio}</h6>
                    <h6>USB: ${details.others.USB}</h6>
                    <h6>WLAN: ${details.others.WLAN}</h6>
                    </div>
            </div> 
         </div>
         </div>
`   
phoneDetails.appendChild(div)
}