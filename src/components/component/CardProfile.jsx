import React from 'react'
import gochi from '../../assets/img/GOCHI.svg';

const CardProfile = () => {
  return (
    <div class="col">
        <div class="card shadow-sm"> 
            <img class="bd-placeholder-img card-img-top" src={gochi} alt="gochi"/>
            <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardProfile