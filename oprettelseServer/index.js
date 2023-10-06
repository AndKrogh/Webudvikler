
function myPromise (resource) {
    new Promise((resolve,reject) => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`,{})
        .then((res)=> res.json())
        /* .then((res) => {
            return res.json();
        }) */
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log('catch', err);
        });
    });
}

myPromise( 'posts');