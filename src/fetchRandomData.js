// Make a request for a user with a given ID
import axios from "axios";

export function fetchRandomData(setData) {
    axios.get('https://random-data-api.com/api/users/random_user')
        .then(function (response) {
            // handle success
            console.log(response);
            if (response.status.toString().charAt(0) === '2' && response.data)
                setData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.error(error);
        });
}