import axios from 'axios';
import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react'
import './Search.css'


const Search = () => {
  const apiKey = "duZ5osAFw121sZrYULb5z3T5BWzt_fewu14Kzf5IsXo"
  const pageNumber = 0
  const [image, setImage] = useState("")
  const [result, setResult] = useState([])
  const [col, setCol] = useState(3)


  const handleChange = (e) => {
    setImage(e.target.value)
  }

  const handleSubmit = async () => {

    let url = `https://api.unsplash.com/search/photos/?query=${image}&page=${pageNumber}&client_id=${apiKey}&per_page=30`

    await axios.get(url).then((response) => {
      console.log(response)
      setResult(response.data.results)
    })
  }

  const SelectColumn = (e) => {
    setCol(e.target.value)
  }

  return (
    <>
      {/* Search input section begin */}

      <div className='search'>
        <form action="#" onSubmit={handleSubmit} type="submit">
        <h1 >Search free high-resolution photos</h1>
          <div className="search-box">
            <input onChange={handleChange} type="text" placeholder="Enter your search keyword" />
            <select className=" form-control" onChange={SelectColumn}>
              <option disabled>Column</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option defaultValue value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </form>
      </div>

      {/* Search input section end */}

    {/* ITEMS START */}

      <Grid columns={col} divided>
        {
          result.map((image) => (
            <div className="column card-column" key={image.id}>
              <div className="ui fluid card">
                <div className="image ">
                  <a target='_blank' rel="noreferrer" href={image.urls.regular} download><img className='card-image' alt={image.alt_description} src={image.urls.regular} /></a>
                </div>
                <div className="content">
                  <i className="fas fa-heart"></i>
                  <span>{image.likes}</span>
                </div>
              </div>
            </div>
          ))
        }
      </Grid>

      {/* ITEMS END */}
    </>
  )
};

export default Search;