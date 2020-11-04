
function get(id){
    return document.getElementById(id);
}
function getValue(id){
    return document.getElementById(id).value;
}
function filterProduct(data,inputValue,by){
    return data.filter(x=>{
        x.by.indextOf(/inputValue/i)!==-1;
    })
}

function creatOneProduct(data){
    let innerElement = [
        createAndAddElement({element:"div",innerElement:"",attribute:{class:"productImg"}}),
        createAndAddElement({element:"h3",innerElement:`${data.name}`,attribute:{className:"productName"}}),
        createAndAddElement({element:"h3",innerElement:`${data.price}`,attribute:{className:"productPrice"}}),
        createAndAddElement({element:"h3",innerElement:`${data.category}`,attribute:{className:"productCategory"}}),
        createAndAddElement({element:"p",innerElement:`${data.detil}`,attribute:{className:"productDetil"}}),
        createAndAddElement({element:"button",innerElement:"Add in myCar",attribute:{className:"productbutton"}}),
    ]
    return createAndAddElement({element:"div",innerElement:innerElement,attribute:{className:"onnProduct"}});
}

function crateProducts(data,continer){
    while(continer.firstChild){
        continer.removeChild(continer.lastChild);
    }
    data.forEach(x=>{
        creatOneProduct(x)
    });
}
