import cvicuData from '../../roomData'
import "./CVICU.css"
import { useState } from 'react'

const CVICU = () => {

  const [search, setSearch] = useState('')
  const [items, setItems] = useState(cvicuData)

  return (
    <div className='w-75 mx-auto'>
      <div className="w-100 d-block mx-auto text-center">
        <h1>CVICU ITEM LOCATOR</h1>
        <small>P0083</small>
      </div>
      <input className='inputStyle w-100 mt-4' placeholder=' Search...' onChange={(e) => setSearch(e.target.value)} />
      {items.filter(item =>
        item.name && item.name.toLowerCase().includes(search.toLowerCase())
      ).map((item, i) => {
        return <div key={i}>
          <div className="cardStyle card mt-4 w-75 d-block mx-auto" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">REF: {item.refNum}</h6>
              <p className="card-text">Sequence: {item.sequence}</p>
              <a href="#" className="card-link">#{i + 1}</a>
              <a href="#" className="card-link">See More</a>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default CVICU
