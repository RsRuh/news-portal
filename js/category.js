const loadCategory = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json();
    // console.log(data.data.news_category);
    return data.data.news_category;
}

const loadAllCategory = async () =>{

    const data = await loadCategory();

    const categoryField = document.getElementById('categoryList')

    data.forEach(catagoryName => {
        const li = document.createElement('li')
        li.innerHTML = `
        <a>${catagoryName.category_name}</a>
        `;
        categoryField.appendChild(li);
    });

    // console.log(data);
}


loadAllCategory();



const loadAllProducts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01')
    const data = await res.json();
    console.log(data);
    
}
loadAllProducts();
