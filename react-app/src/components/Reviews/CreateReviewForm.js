import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { createReviewThunk } from '../../store/review';
import { getAllReviewsThunk } from '../../store/review';


const ReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const businessId = useParams()
    const business = useSelector(state => (state.business))
    const user = useSelector(state => (state.session.user))

    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    const [errors, setErrors] = useState([])

    useEffect((e) => {
      dispatch(getAllReviewsThunk())
  }, [])


    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = {
          user_id: user.id,
          business_id: 1,
          review: review,
          rating: rating,
      }

      // const res = await dispatch(createReviewThunk(data))
      // if (res.ok) {
      //     history.push(`/businesses/${businessId}`)
      // } else {
      //     setErrors(res.data.errors)
      // }

      return dispatch(createReviewThunk(data))

    }


    return (
        <form onSubmit={handleSubmit}>
        <div className="create-review-container">
          <div className="create-review-input-container">
            <div className="create-review-input-container">
              <input className="create-review-input"
                type="text"
                placeholder='review'
                onChange={(e) => setReview(e.target.value)}
                required
              />
            </div>
            <div className="create-business-input-container">
              <input className="create-business-input"
                type="text"
                placeholder="rating"
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>
            <button name="submit" type="submit" className="submitButton">
              Create Review
            </button>
          </div>

        </div>
      </form>
    )
}





export default ReviewForm;
