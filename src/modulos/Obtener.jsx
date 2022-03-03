import React from 'react'

function Obtener() {

    const [usuarios, setUsuarios] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('http://localhost:8080/api/students/')
        const users = await data.json()
        // console.log(users)
        setUsuarios(users)
    }

    return (
        <div className='py-5 my-5'>
            <ul>
                {
                    usuarios.map(item => (
                        <li key={item.id}>
                            <p to={`/users/${item.id}`}>{item.idStudent} <br /> {item.about}<br />{item.uid}<br />{item.education}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Obtener