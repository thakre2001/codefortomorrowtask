import React, { useEffect, useState } from 'react'
import CardList from './CardList'
import axios from 'axios'

const DynamicCardListing = () => {
    const [cardData, setCardData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                console.log(res);

                if (res.status === 200) {
                    setTimeout(() => {
                        setCardData(res.data)
                        setLoading(false)
                    }, 5000);
                }
            } catch (error) {
                setLoading(false)
            }

        }
        fetchData()
    }, [])

    const cardsOnPage = 6;
    const indexLast = currentPage * cardsOnPage
    const indexFirst = indexLast - cardsOnPage
    const currentCards = cardData.slice(indexFirst, indexLast)

    const totalPages=Math.ceil(cardData.length/cardsOnPage)

    const handleRemove = (id) => {
        setCardData(cardData.filter((data) => data.id !== id))
    }

    if(loading) return <h2>Loading...</h2>

    return (
        <div className='d-flex gap-4 flex-column justify-content-evenly align-items-center'>
            <div className="container row d-flex justify-content-between align-items-stretch bg-light p-4 ">
                {
                    currentCards.map((data) => (
                        <CardList key={data.id} data={data} handleRemove={handleRemove} />
                    ))
                }
            </div>
            <div className='mt-3 d-flex gap-5'>
               {
                Array.from({length:totalPages},(_,i)=>(
                    <button className='btn btn-warning btn-circle' onClick={()=>setCurrentPage(i+1)}>
                        {i+1}
                    </button>
                ))
               }
            </div>
        </div>
    )
}

export default DynamicCardListing
