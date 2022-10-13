import React from 'react'
const Navbar = ({filterItem,menuList}) => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#"
      ><img
        id="MDB-logo"
        src="https://img.freepik.com/free-vector/restaurant-logo_23-2148558726.jpg?w=1060&t=st=1665653012~exp=1665653612~hmac=2776038db9a889838a3bcede10f66f4d765572c5d303674438efda1715d8b1c2"
        alt=" Logo"
        draggable="false"
        height="30"
    />Food Hub</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto align-items-center">
        {
            menuList.map((currElem)=>{
                console.log(currElem);
                return(
                    <li class="nav-item">
          <a class="nav-link mx-2" title="Breakfast" href="#!" onClick={() => filterItem(currElem)}>{currElem}</a>
        </li>
                );
            })
        }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar