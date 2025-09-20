import React, { useEffect, useState } from 'react'
import CardList from './CardList'
import axios from 'axios'

const DynamicCardListing = () => {
    const [cardData, setCardData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(res);

            if (res.status === 200) {
                setCardData(res.data)
            }

        }
        fetchData()
    }, [])

    const cardsOnPage = 6;
    const indexLast = currentPage * cardsOnPage
    const indexFirst = indexLast - cardsOnPage
    const currentCards = cardData.slice(indexFirst, indexLast)

    const handleRemove = (id) => {
        setCardData(cardData.filter((data) => data.id !== id))
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }


    return (
        <div className='d-flex flex-column justify-content-evenly align-items-center'>
            <div className="container row d-flex justify-content-between align-items-stretch bg-light p-4 ">
                {
                    currentCards.map((data) => (
                        <CardList key={data.id} data={data} handleRemove={handleRemove} />
                    ))
                }
            </div>
            <div className='mt-3 d-flex gap-5'>
                {
                    currentPage > 1 && (
                        <button className='btn btn-secondary px-4' onClick={prevPage}>Prev</button>
                    )
                }
                {
                    currentCards.length === 6 && (
                        <button className='btn btn-secondary px-4' onClick={nextPage}>Next</button>
                    )
                }
            </div>
        </div>
    )
}

export default DynamicCardListing
