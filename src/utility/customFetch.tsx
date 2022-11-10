let is_ok = true;
let url = '../inventory.json'

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {

        // fetch(url).then(response => console.log('res:', response))

        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                reject("Error in the customFetch :(");
            }
        }, time);
    });
}

export default customFetch;