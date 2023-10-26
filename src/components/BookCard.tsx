import { useState } from "react"; 
import Modal from "./Modal";

interface BookCardProps {
    title: string;
    price: number;
    imageUrl: string;
    author: string;
    description: string;
  }

  const BookCard: React.FC<BookCardProps> = ({ title, author, description, imageUrl, price }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleCardClick = () => {
      setIsModalOpen(true);
    };

    return (
        <div className=" bg-gray-100 flex flex-col justify-center">
            <div className="relative flex flex-wrap justify-center">
      
            <div className="relative max-w-sm min-w-[200px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer" onClick={handleCardClick}>
                <div className="overflow-x-hidden rounded-2xl relative">
                <img className="h-80 rounded-2xl w-full object-cover" src={`data:image/png;base64,${imageUrl}`}></img>
                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </p>
                </div>
                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                <div>
                    <p className="text-lg font-semibold text-gray-900 mb-0">{title}</p>
                    <p className="text-md text-gray-800 mt-0">LKR {price}</p>
                </div>
                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
            </div>
          </div>  
        </div>
      
      {isModalOpen && (
        <Modal
          title={title}
          author={author}
          description={description}
          imageUrl={imageUrl}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      </div>
    );
};

export default BookCard;