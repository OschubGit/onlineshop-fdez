import React from 'react'
import Alert from '../components/alerts/Alert'
import { categories } from '../utils/categories'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const NoProducts = ({ alert, title }) => {
  return (
    <div className="c-container grid noProducts">
      <div className="col-12">
        <Alert className="alert alert-info">{alert}</Alert>
      </div>
      <div className="col-12">
        <div>
          <h3>{title}</h3>
          <ArrowForwardIcon />
        </div>
      </div>
      {categories.map((m, index) => (
        <div
          key={index}
          className="col-4 col-xxs-4 col-xs-3 col-sm-4 col-md-5 col-xl-3"
        >
          <div className="noProducts_related">
            <Link to={`/category/${m.category}`}>{m.category}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NoProducts
