import React, {useState} from 'react'

function Home(){

    const [names, setNames] = useState(['Justin', 'Kathleen', 'Audrey', 'Holly'])

    const removeLastPerson = () => {
        setNames(oldList => {
            let newList = [...oldList]
            newList.pop()
            console.log(newList)
            return newList            
        })
    }

    return  <>
                <div className='home-container'>
                    <section>
                        <h1>Homepage</h1>
                        <p>Example using 'useState' object and pop method for an array</p>
                        <div>
                            <button onClick={removeLastPerson}>Remove Last Person</button>
                        </div>
                    </section>
                    <ul>
                        {
                            names.map((name, i) => {
                                return (
                                    <li key={i}><span> - </span><i>{name}</i></li>                                
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                </div>
            </>    
}

export default Home