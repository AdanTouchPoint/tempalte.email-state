import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setShowLoadSpin, setShowEmailForm) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    console.log(datos.data)
    const res = datos.data 
    const emails = res.map(el => {
        console.log(el.contact)
        return el.contact
    })
    setMp(emails)
    setShowLoadSpin(false)
    setShowEmailForm(false)
    // await console.log(datos)

}


export{
    fetchRepresentatives
}
