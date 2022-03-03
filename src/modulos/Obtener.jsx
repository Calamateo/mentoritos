import React from 'react'

function Obtener() {

    const [usuarios, setUsuarios] = React.useState([])
    const [getId, setId] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('http://localhost:8080/api/users/')
        const users = await data.json()
        // console.log(users)
        setUsuarios(users)

        const db = { datos: JSON.parse(localStorage.getItem('usuario')) }

        console.log(db.datos.uid);
        var registros = await usuarios.filter(info => info.uid === db.datos.uid)
        try {
            await setId(registros[0].id)
            await console.log(registros[0].id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='py-5 my-5 container'>
            <button
                onClick={fetchData}
                className='btn btn-dark'
            >
                holaaaaaa</button>
            <ul>
                {
                    usuarios.map(item => (
                        <li key={item.id}>
                            <p to={`/users/${item.id}`}>{item.uid} <br /> {item.email}<br />{getId}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Obtener