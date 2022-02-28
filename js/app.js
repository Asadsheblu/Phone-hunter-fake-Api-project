const phoneSearch=()=>{
    //search value access
   const search=document.getElementById('search-box')
  const searchText=search.value ;

  //api access
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  .then(res=>res.json())
  .then(data=>displayData(data.data))
  
}
//function for display data

const displayData=(datas)=>{
    // console.log(datas.brand);

    const searchResult=document.getElementById('search-result')
    datas.forEach(data=>{
        // console.log(data.phone_name);
        const div=document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
        `
        searchResult.appendChild(div)
    })
}