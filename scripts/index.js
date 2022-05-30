// Add the coffee to local storage with key "coffee"

let url='https://masai-mock-api.herokuapp.com/coffee/menu';
// console.log(url)
let collect;
async function getdata(){
    try{
        let user= await fetch(url);

        let collect= await user.json();
        console.log(collect);
        append(collect.data);
    }
    catch(err){
        console.log(err);
    }
}
getdata();
// append(collect.data);

// console.log("aman")
function append(data){
    data.forEach(function(el){
        let box=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image;
        let price=document.createElement("p");
        price.innerText=el.price;
        let type=document.createElement("p");
        type.innerText=el.title;
    

        let btn=document.createElement("button");
        btn.innerText="add to bucket";

        box.append(image,price,type,btn)
        document.querySelector("#menu").append(box);
       



    });
    append(data);

}




