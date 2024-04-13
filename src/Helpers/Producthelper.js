import { BASE_URL } from "../enums"

export async function fetchProducts(category,subcategory){

    const category_ = category.toLowerCase();
    const subcategory_ = subcategory.toLowerCase().replace(/\s/g, "")

    const response = await fetch(`${BASE_URL}${category_}/${subcategory_}`,{
        method:'GET'
    })

    const result = await response.json()

    return result
}

export async function fetchProduct(category,subcategory,id){

    const category_ = category.toLowerCase();
    const subcategory_ = subcategory.toLowerCase().replace(/\s|&/g, "")

    const response = await fetch(`${BASE_URL}${category_}/${subcategory_}/${id}`,{
        method:'GET'
    })

    const result = await response.json()

    return result
}