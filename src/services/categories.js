import axios from 'axios'

export function getAllCategories(){
    return axios.get('/Category?PageSize=10&PageIndex=1');
}

export function getAllSubCategoriesByCategoryId(categoryId){
    return axios.get(`/PodCategory/categories/${categoryId}`)
}