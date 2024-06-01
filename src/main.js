async function getData(){
 try {
    let res = await fetch("http://localhost:4000/")
    let data = res.json()
    return data
 } catch (error) {
    console.error('Error fetching data', error)
 }
}

document.getElementById('button').addEventListener('click',async() =>{
    const data = await getData()
    document.getElementById('h').innerHTML = data.message
})