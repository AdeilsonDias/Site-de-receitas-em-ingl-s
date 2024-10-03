const searchForm = document.querySelector(".search_form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  async function getRevenues() {
    const revenues = document.querySelector(".revenues")
    const inputValue = event.target[0].value
    try {
      if (inputValue) {
        revenues.innerHTML=""
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
        const data = await response.json();
        const recipes = data.meals
        revenus(recipes,revenues)
             
      }else{
       
           revenues.innerHTML= `<h1>Campo inválido,coloque sua receita.</h1>`
        
      }
    } catch (err) {
           console.log (err,"Não foi possivel encontrar a sua receita.")
           revenues.innerHTML= `<h1> Receita inválida </h1>`
    }
 
  }
  getRevenues();
});

const revenus=(recepies,revenues)=>{
    recepies.forEach(element => {
    
        revenues.innerHTML+=`
        
        <div class="revenues">
          <h1> ${element.strMeal} </h1>
          <img src="${element.strMealThumb}" alt="${element.strMeal}">
        </div>

     `
        
    });
}
    

    
