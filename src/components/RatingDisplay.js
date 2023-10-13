import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const RatingDisplay = ({ rating }) => {
  const numericRating = parseFloat(rating);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= numericRating) {
      stars.push(<StarIcon key={i} className="text-yellow-500 text-2xl" />);
    } else {
      stars.push(<StarBorderIcon key={i} className="text-yellow-500 text-2xl" />);
    }
  }

  return (
    <div className="flex items-center">
      {stars}
    </div>
  );
};

export default RatingDisplay;
