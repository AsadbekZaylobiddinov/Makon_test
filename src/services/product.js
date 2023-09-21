import axios from 'axios'
import { useRoute } from 'vue-router'

export async function getAllProductsAsync(){

    var route = useRoute()

    var pageSize = 10

    var pageIndex = 1

    var url = `/Product?PageSize=${pageSize}&PageIndex=${pageIndex}&`

    var search = route.query.search

    var minPrice = route.query.MinPrice

    var maxPrice = route.query.maxPrice

    var currency = route.query.currency

    var sort = route.query.sort

    var category = route.query.Category

    var subCategories = sessionStorage.getItem("selectedSubCategories")

    var city = route.query.City

    var areas = sessionStorage.getItem("selectedAreas")

   

    if(search && search != '' && search.trim() != '' ){
        url += 'search=' + search + "&"
    }

    if(minPrice && minPrice != '' && Number(minPrice) != 0){
        url += 'MinPrice=' + minPrice + "&"
    }
    else{
        url += 'MinPrice=' + '0' + "&"
    }

    if(maxPrice && maxPrice != '' && Number(maxPrice) != 'max'){
        url += 'MaxPrice=' + maxPrice + "&"
    }

    if(sort && sort !=''){
        url += 'sort=' + sort + "&"
    }
    else{
        url += 'sort=' + 'productPrice&'
    }

    if(category && currency != ''){
        url += 'Category=' + category + '&'
    }

    if(subCategories && subCategories != ''){
        url += 'PodCategories=' + subCategories + '&'
    }

    if(city && city != ''){
        url += 'City=' + city + '&'
    }

    if(areas && areas != ''){
        url += 'Areas=' + areas + '&'
    }

    if(currency && currency != ''){
        if(currency == 'USD'){
            url += 'Currency=USD'
        }
        else if(currency == 'SUM'){
            url+='Currency=SUM'
        }
    }
    else{
        url+='Currency=SUM'
    }
    console.log(url)
    return axios.get(url)
}

export async function getProductById(id){

    var url = `/Product/${id}/?`
    
    var route = useRoute()

    var currency = route.query.currency

    if(currency && currency != ''){
        if(currency == 'USD'){
            url += 'currency=USD'
        }
        else if(currency == 'SUM'){
            url+='currency=SUM'
        }
    }
    else{
        url+='currency=SUM'
    }

    return axios.get(url)
}

export async function getUsersProducts(id){
    return axios.get(`/Product/users/${id}/products?PageSize=50&PageIndex=1`)
} 