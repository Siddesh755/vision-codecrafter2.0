import React from 'react';

const AdminIcon = ({data}) => {
 
  const firstLetter = data.name.charAt(0);
  
  return (
    <div className=''>
    <div className="flex flex-col items-center mt-2">
      
      <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-3">
        <span className="text-white text-4xl font-medium">{firstLetter}</span>
      </div>
      
      
      <h2 className="text-gray-700 text-lg font-medium">{data.name}</h2>
    </div>
    </div>
  );
};

export default AdminIcon;