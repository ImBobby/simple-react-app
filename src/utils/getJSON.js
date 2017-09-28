
const getJSON = (url) => new Promise((resolve, reject) => {
    fetch(url).then(res => res.json()).then(resolve).catch(reject)
})

export default getJSON