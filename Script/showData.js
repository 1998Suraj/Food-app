async function getData(url){

    let res = await fetch(url);
    let data = await res.json();

    return data.meals;
}

function append(data,container){
    console.log("Data: ",data);
    container.innerHTML = null;
    data.forEach(({strMeal,strMealThumb,strYoutube}) => {

        let div = document.createElement('div');
        div.id = "d";

        let p = document.createElement('p');
        p.innerHTML = strMeal;

        let img = document.createElement('img');
        img.src = strMealThumb;

        let link = document.createElement('a');
        link.href = strYoutube;

        div.append(img,p,link);
        container.append(div);
    });
}
export {getData,append};