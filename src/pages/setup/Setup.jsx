import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from "../../context/AppContext"

const Setup = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [Filtertype, setFiltertype] = useState([]);
  // const [showFilter,setShowFilter]=useState(false);
  const [subcategory, setSubcategory] = useState(false);

  const { getCCTVProducts } = useContext(AppContext);

  const applyFilter = useCallback(() => {
    if (type) {
      setFiltertype(getCCTVProducts.filter(cctvtype => cctvtype.type === type));
    }
    else {
      setFiltertype(getCCTVProducts);
    }
  }, [getCCTVProducts, type])

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  return (
    <>
      <div className='flex m-5 flex-col md:flex-row'>
        <div className='w-full mb-5 md:mb-0 md:w-[20%] border-2 border-[#9b9b9b93] rounded-md p-3 pb-20 self-start font-bold'>
          <ul className='p-2 font-inria'>
            <li className='border-b border-[#d0d0d09e]'>
              <p className={`border-b border-[#d0d0d09e] pb-2 ${type === "Dome" ? "bg-[#95C3FF] px-2 rounded-md font-bold" : ""}`} onClick={() => { type === 'Dome' ? navigate('/setup') : navigate('/setup/Dome'); console.log(subcategory); setSubcategory(!subcategory) }}>Dome Camera</p>
              <ul className={`p-3 flex flex-col gap-y-1 text-gray-500 ${subcategory ? "visible" : "hidden"}`}>
                <li>SubCategory 1</li>
                <li>SubCategory 2</li>
                <li>SubCategory 3</li>
                <li>SubCategory 4</li>
              </ul>
            </li>
            <li className={`border-b border-[#d0d0d09e] py-2 ${type === "Bullet" ? "bg-[#95C3FF] px-2 rounded-md font-bold" : ""}`} onClick={() => { type === 'Bullet' ? navigate('/setup') : navigate('/setup/Bullet') }}>Bullet Camera</li>
            <li className={`border-b border-[#d0d0d09e] py-2 ${type === "PTZ" ? "bg-[#95C3FF] px-2 rounded-md font-bold" : ""}`} onClick={() => { type === 'PTZ' ? navigate('/setup') : navigate('/setup/PTZ') }}>PTZ Camera</li>
            <li className={`border-b border-[#d0d0d09e] py-2 ${type === "Spy" ? "bg-[#95C3FF] px-2 rounded-md font-bold" : ""}`} onClick={() => { type === 'Spy' ? navigate('/setup') : navigate('/setup/Spy') }}>Spy Camera</li>
            <li className={`border-b border-[#d0d0d09e] py-2 ${type === "xxxx" ? "bg-[#95C3FF] px-2 rounded-md font-bold" : ""}`} onClick={() => { type === 'xxxx' ? navigate('/setup') : navigate('/setup/xxxx') }}>xxxx</li>
            <li className={`border-b border-[#d0d0d09e] py-2 ${type === "xxx" ? "bg-[#95C3FF] px-2 rounded-md font-bold" : ""}`} onClick={() => { type === 'xxx' ? navigate('/setup') : navigate('/setup/xxx') }}>xxx</li>
          </ul>
        </div>

        <div className='md:grid md:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-6 md:mx-5 md:w-[80%] '>
          {
            Filtertype.map((item, index) => (

              <div key={index} className=' bg-[#95C3FF] rounded-2xl relative p-1 h-[200px] mb-5 md:mb-0' onClick={() => navigate(`/setup/id/${item.id}`)} >
                <div className='flex justify-start items-start mb-2 '>
                  <img src={item.brand} alt='brandname' className='w-28 object-contain' />
                </div>

                <div className='flex absolute top-2 right-0 rounded-full'>
                  <img src={item.image} alt="camera" className='w-36 object-contain -mr-12 ' />
                  <img src={item.image} alt="camera" className='w-32 object-contain -mr-12' />
                  <img src={item.image1} alt='setup' className='w-28 object-contain' />
                </div>

                <div className='flex absolute bottom-2 right-3 gap-2 font-inter'>
                  <p className='line-through'>&#8377;{item.price}</p>
                  <p>&#8377;{item.offerprice}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Setup
