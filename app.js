const search = ()=>{
    
    // const input = document.querySelector("#search-item");
    // const filter = input.value.toUpperCase();

    // const product = document.querySelectorAll(".product");

    // product.forEach((el) => {
    //     const text = el.textContent.toUpperCase();
    //     el.style.display = text.includes(filter) ? "":"none";
    // });
    
    const searchBox = document.getElementById("search-item").value.toUpperCase();
   
    //Array of all the items in the list
    const product = document.querySelectorAll(".product");
    const productName = document.getElementsByTagName("h2");

    for(let i=0; i<productName.length; i++){

        let match = product[i].getElementsByTagName('h2')[0];
        

        if(match){
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}
