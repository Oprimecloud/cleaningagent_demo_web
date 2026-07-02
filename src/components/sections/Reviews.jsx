import { useBrand } from '../../context/BrandContext';
import { Star } from 'lucide-react';

const Reviews = () => {
  const { brandData } = useBrand();
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {brandData.reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic">"{rev.text}"</p>
              <p className="mt-4 font-bold text-sm">- {rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reviews;