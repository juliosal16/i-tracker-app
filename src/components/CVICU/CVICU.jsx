import cvicuData from '../../roomData'
import "./CVICU.css"
import { useState } from 'react'
import Search from '../../assets/search.svg'
import { useNavigate } from 'react-router-dom'


const CVICU = () => {


  const [search, setSearch] = useState('')
  const [items, setItems] = useState(cvicuData)
  return (
    <div className="w-75 mx-auto">
      <div className="w-100 d-block mx-auto text-center text-white mt-3">
        <img src={Search} alt="Search icon" className="w-50" />
        <h1>CVI CU ITEM LOCATOR</h1>
        <small>P0083</small>
      </div>
      <input className="inputStyle w-100 mt-4" placeholder='Search by reference number, item name or sequence...' onChange={(e) => setSearch(e.target.value)} />
      {search.length === 0 ? (
        null
      ) : (
        items.filter(item => {
          const term = search.toLowerCase();
          const nameMatch = item.name?.toLowerCase().includes(term);
          const refNumMatch = item.refNum?.toString().toLowerCase().includes(term);
          const sequenceMatch = item.sequence?.toString().toLowerCase().includes(term);
          return nameMatch || refNumMatch || sequenceMatch;
        }).length < 1 ? (
          <div className="mt-4 w-75 d-block mx-auto text-center p-2 text-center text-white" style={{ width: "18rem" }}>
            <h2>❌ ITEM NOT FOUND ❌</h2>
            <p>Please reach out to our team if there is an issue</p>
          </div>
        ) : (
          items.filter(item => {
            const term = search.toLowerCase();
            const nameMatch = item.name?.toLowerCase().includes(term);
            const refNumMatch = item.refNum?.toString().toLowerCase().includes(term);
            const sequenceMatch = item.sequence?.toString().toLowerCase().includes(term);
            return nameMatch || refNumMatch || sequenceMatch;
          }).map((item, i) => (
            <div className="cardStyle card mt-4 w-75 d-block mx-auto text-center" key={i}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Sequence: {item.sequence}</h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">REF: {item.refNum}</h6>
                {/* <button className="btn btn-light mt-3 d-block mx-auto w-75" onClick={() => console.log(i)}>View More</button> */}
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
}

export default CVICU;
