import { StarRating } from './rating_stars';

interface CardProps {
  title: string;
  authors: string;
  rating: number;
}

export function Card({ title, authors, rating }: CardProps) {
  return (
    <div className="cards">
      <strong className="book-title">{title}</strong>
      <span>{authors}</span>
      <StarRating rating={rating} />
    </div>
  );
}
