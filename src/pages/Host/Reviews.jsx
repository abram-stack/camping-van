import reviewImage from '../../assets/images/reviews-graph.png'
import { BsStarFill } from 'react-icons/bs';

export default function Reviews() {

  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];
  return (
    <>
      <div className='review-container '>
        <div className='review-header'>
          <h1>Your reviews</h1>
          <p>last 30 days</p>
        </div>
        <img src={reviewImage} className='review-image' />
        <h3>Reviews({reviewsData.length})</h3>
        {reviewsData.map((review) => (
          <div key={review.id} className='review'>
            <div className='review-stars'>
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className='review-star' key={i}/>
            ))}
            </div>
            <div className='review-info'>
              <p>{review.name}</p>
              <p className='review-date'>{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}