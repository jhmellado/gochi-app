import React from 'react'
import CardCultivo from './CardCultivo'

const Album = () => {
  return (
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <CardCultivo/>
            </div>
        </div>
    </div>
  )
}

export default Album