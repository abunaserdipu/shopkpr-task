import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
           <div class="banner" id="banner">
      <div class="content">
        <h2>Shopkpr</h2>
        <p>
          Welcome in our awesome website!
        </p>
        <Link to="/dash-board/admin/manage-user" className="btn">Visit Home Page</Link>
      </div>
    </div> 
        </>
    )
}

export default LandingPage
