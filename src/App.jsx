import "./style.css"
export default function App() {
  return(
    < >
  <form className="new-item-form">
    <div className="form-info">
      <label className="label-form" htmlFor="item">New Item</label>
      <input className="input-item" type="text" id="item"/>
      <button className="btn">Add</button>
    </div>
  </form>
  <h1 className="title">Todo List</h1>
  <ul>
    <li>
      <label >
        <input type="checkbox" name="" id="" />
        item 1
      </label>
      <button className=" btn-danger">Delete</button>
    </li>
    <li>
      <label >
        <input type="checkbox" name="" id="" />
        item 2
      </label>
      <button className=" btn-danger">Delete</button>
    </li>
    <li>
      <label >
        <input type="checkbox" name="" id="" />
        item 3
      </label>
      <button className=" btn-danger">Delete</button>
    </li>
  </ul>
</>
  )

    
}