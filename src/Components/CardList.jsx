import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CardList.css'

const CardList = ({ key, data, handleRemove }) => {
    console.log("currentcard", data);

    return (
        <div className='col-md-4 mt-2'>
            <div className='card '>
                <div key={key} className='card-body position-relative p-4 '>
                    <button className='dlt-btn btn text-danger fs-4' onClick={() => handleRemove(data.id)}>
                        <i className='fa fa-x'></i>
                    </button>
                    <h4>{data.title}</h4>
                    <p>{data.body}</p>
                </div>
            </div>
        </div>
    )
}

export default CardList
