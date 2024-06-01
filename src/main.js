async function getData(){
 try {
    let res = await fetch("https://serverless-eight-peach.vercel.app/")
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