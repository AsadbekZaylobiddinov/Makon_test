import axios from 'axios'
import { useCheckAuth } from '../composables/checkAuth'

let auth = useCheckAuth()

export async function addToFavouriteProduct(productId){

    let response = auth.isAuth(true)

    return axios.post('/FavouriteProduct',{
        userId: response.userId,
        productId: productId
    },
    {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('makon__authentication__jwt__token')}` 
        }
    })
}

export async function getAllFavouriteProducts(){
    return axios.get('/FavouriteProduct?PageSize=10&PageIndex=1',
    {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('makon__authentication__jwt__token')}` 
        }
    })
}

export async function deleteFavouriteProductById(id){
    return axios.delete(`/FavouriteProduct/${id}`,
    {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('makon__authentication__jwt__token')}` 
        }
    })
}