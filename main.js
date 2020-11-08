
function get(id){
    return document.getElementById(id);
}
function getValue(id){
    return document.getElementById(id).value;
}
function filterProductByName(data,inputValue){
    return data.filter((x)=>{if(x.name.search(inputValue) !== -1){return x}})
}
function filterProductByPrice(data,inputValue){
    return data.filter((x)=>{if(x.price <= inputValue){return x}})
}
function filterProductByCategory(data,inputValue){
    return data.filter((x)=>{if(x.category <= inputValue){return x}})
}

function creatOneProduct(data){
    let innerElement = [
        createAndAddElement({element:"div",innerElement:[createAndAddElement({element:"img",innerElement:"",attribute:{src:`${data.imageLink}`,class:"imgProduct"}})],attribute:{class:"productImg"}}),
        createAndAddElement({element:"h3",innerElement:`${data.name}`,attribute:{class:"productName"}}),
        createAndAddElement({element:"h3",innerElement:`${data.price}`,attribute:{class:"productPrice"}}),
        createAndAddElement({element:"h3",innerElement:`${data.category}`,attribute:{class:"productCategory"}}),
        createAndAddElement({element:"p",innerElement:`${data.detil}`,attribute:{class:"productDetil"}}),
        createAndAddElement({element:"button",innerElement:"Add in myCar",attribute:{class:"productbutton"}}),
    ]
    return createAndAddElement({element:"div",innerElement:innerElement,attribute:{class:"oneProduct"}});
}

function createProducts(data,continer){
    while(continer.firstChild){
        continer.removeChild(continer.lastChild);
    }
    data.forEach(x=>{
        continer.append(creatOneProduct(x))
    });
}
createProducts(myProduct,get("products"))

console.log(document.getElementsByClassName("oneProduct"))

