import React from "react";
import {createPortal} from "react-dom";
import {Link} from "react-router-dom";

function ModalValidCommande() {
  return createPortal(<>
   < div className = "modal fade show" tabIndex = "-1"
    role = "dialog" style = {{ display: "block" }} > <div className="modal-dialog modal-sm modal-md modal-lg .modal-fullscreen-md-down modal-width">
    <div className="modal-content">
      <div className="modal-body">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{
            float: "right",
            margin: "2px 5px 5px 5px",
            background: "none",
            outline: "none",
            border: "none",
            width: "50px",
            height: "50px"
          }}>
          <span aria-hidden="true" >
            &times;
          </span>
        </button>
        <div className="and-message-cheked">
          <h1>thank you<br/> for your order</h1>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div className='container-checked'>
        <div className="card-checked">
          <div className="shopping-check">
            <img src="/assets/cart/casque-noir.jpg"></img>
            <div>
              <h6>XX99 MK II</h6>
              <p>$15552</p>
            </div>
            <p>x1</p>
          </div>
          <div className="line-checked"></div>
          <p>
            and 2 others items</p>
          </div>
          <div className="count-total-cheked">
            <h6>Grand total</h6>
            <p>$ 5456</p>
          </div>
        </div>
        <Link to="/" style={{
            width: "250px",
            backgroundColor: "#D87D4A",
            outline: "none",
            border: "none",
            marginLeft: "5px", marginTop:'25px', height:'40px'
          }} type="button" className="btn btn-secondary btn-orange-responsive" data-dismiss="modal" >
          Back home
        </Link>
      </div>
    </div>
  </div>
</div> < div className = "modal-backdrop fade show" > </div> </>,
        document.body
    );
}

export default ModalValidCommande;
