import { useJwt } from "./jwt";

export function useCheckAuth() {
  
    function isAuth(f){

        let { decode } = useJwt()

        if(sessionStorage.getItem('makon__authentication__jwt__token')){
            let token = decode(sessionStorage.getItem('makon__authentication__jwt__token'))
            const date = new Date(token.exp * 1000); // Умножаем на 1000, так как JavaScript работает с миллисекундами, а Unix timestamp в секундах
  
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

              if(token.exp * 1000 <= Date.now()){
                sessionStorage.setItem('makon__authentication__status__secret' , 401)
                return 401;
              }
              else{
                sessionStorage.setItem('makon__user__id',token.Id)
                sessionStorage.setItem('makon__user__name',token.Name)

                sessionStorage.setItem('makon__authentication__status__secret' , 200)
                if(f == true){
                  return {
                    userId: token.Id,
                    token: token
                  }
                }
                else{
                  return 200;
                }
              } 
            }
            else{
              sessionStorage.setItem('makon__authentication__status__secret' , 402)
              return 402;
            }
          }
    return {
      isAuth
    };
  }