import React from 'react';

const AdminDetailsCard = ({data}) => {
  return (
   
    <div className=" px-4">
      <div className=" g-x-6 g-y-6">
        
        <div className="space-y-1 ">
          <label className="block text-sm text-[#10002B] uppercase">NAME</label>
          <div className="flex">
            <input 
              type="text"
              value={data.name}
              className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
              readOnly
            />
            
          </div>
        </div>
        
        
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">PAN</label>
          <input 
            type="text"
            value={data.pan}
            className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>
        
        
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">DATE OF BIRTH (DD/MM/YYYY)</label>
          <input 
            type="text"
            value="29/02/1996"
            className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>
        
        
        
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">GENDER</label>
          <input 
            type="text"
            value={data.gender}
            className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>
        
       
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">MOBILE NUMBER</label>
          <div className="flex">
            <input 
              type="text"
              value={data.phone}
              className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
              readOnly
            />
            
          </div>
        </div>
        
       
        
        
        
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">EMAIL</label>
          <div className="flex">
            <input 
              type="text"
              value={data.email}
              className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
              readOnly
            />
            
          </div>
        </div>
        
        
        
        
        
      </div>
    </div>
  );
};

export default AdminDetailsCard;