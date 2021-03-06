const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tinParam = urlParams.get('tinToken');

const verifytinNumber = async() => {
    const routes = new Routes;
    const url = `${routes.apiOrigin}${routes.apiVersion}${routes.verifyTin}`;

    try{
        const response = await fetch(url, {
            method: 'GET',
            headers:{
             'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        if (data.status === 'Success'){
            // Alert Success Message 
        }else {
            alertify.set('notifier','position', 'top-center');
            alertify.error(data.message)
        }


    }catch(error){
        console.log(error)
        alertify.set('notifier','position', 'top-center');
        alertify.error('Something went wrong please try again later')
    }

}
verifytinNumber();