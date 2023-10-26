import React from 'react';

interface ModalProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, author, description, imageUrl, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>

      <div className="modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto relative flex"> 
        <div className="modal-image">
          <img className="h-[600px] w-[500px]" src={`data:image/png;base64,${imageUrl}`} alt={title} />
        </div>

        <div className="modal-details w-1/2 p-6">
          <div className="modal-close absolute top-0 right-0 cursor-pointer mt-4 mr-4 text-gray-700 text-xl z-50" onClick={closeModal}>
            <span>&times;</span>
          </div>

          <h2 className="text-xl font-bold mb-3">{title}</h2>
          <p className="text-gray-700 mb-4">By {author}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
