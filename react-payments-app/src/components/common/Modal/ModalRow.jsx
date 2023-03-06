import { useEffect, useState } from 'react';

const ModalRow = ({ data, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleCompanySelected = (e) => {
    const selectedId = e.target.parentNode.id;
    setSelectedId(selectedId);
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    onClick(isClicked, selectedId);
  }, [isClicked, selectedId]);

  return (
    <div className='flex-center'>
      {Array.isArray(data)
        ? data.map((company) => (
            <div
              key={company.id.toString()}
              id={company.id}
              className='modal-item-container'
              onClick={handleCompanySelected}
            >
              <div className='modal-item-dot'></div>
              <span className='modal-item-name'>{company.name}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default ModalRow;
