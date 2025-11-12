import cvicuData from '../../roomData'
import "./CVICU.css"
import { useState } from 'react'
import Search from '../../assets/search.svg'
import { useNavigate } from 'react-router-dom'


const CVICU = () => {

  const nav = useNavigate()

  const [search, setSearch] = useState('')
  const [items, setItems] = useState(cvicuData)

  return (
    <div className='w-75 mx-auto'>
      <div className="w-100 d-block mx-auto text-center text-white mt-3">
        <img src={Search} alt="Search icon" className='w-50' />
        <h1>CVICU ITEM LOCATOR</h1>
        <small>P0083</small>
      </div>
      <input className='inputStyle w-100 mt-4' placeholder=' Search...' onChange={(e) => setSearch(e.target.value)} />
      {items.filter(item =>
        item.name && item.name.toLowerCase().includes(search.toLowerCase())
      ).map((item, i) => {
        return <div key={i}>
          <div className="cardStyle card mt-4 w-75 d-block mx-auto p-2 text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title ">{item.name}</h5>

              <h6 className="card-subtitle mb-2 text-body-secondary">Sequence: {item.sequence}</h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">REF: {item.refNum}</h6>
              {/* <a href="#" className="card-link">#{i + 1}</a>
              <a href="#" className="card-link">See More</a> */}
              {/* <button className='mainBtn' onClick={(e) => nav(`/singleDate/${date._id}`)}>View</button> */}
              <button className='btn btn btn-outline-light mt-3 d-block mx-auto w-100' onClick={(e) => console.log(i)}>View More</button>


            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default CVICU
