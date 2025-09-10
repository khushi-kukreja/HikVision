import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { categoryProducts, cctvProducts } from '../../assets/assets';


const Category = () => {

    const navigate = useNavigate();
    const { type } = useParams();
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [FilterType, setFiltertype] = useState([]);
    const [selectedSubCategory, setSelectedSubcategory] = useState(null);

    const applyFilter = useCallback(() => {
        let filtered = [];
    
        if (type) {
            filtered = categoryProducts.filter(c => c.type === type);
            if (selectedSubCategory) {
                filtered = filtered.flatMap(c => c.subcategories ?.filter(sub => sub.name === selectedSubCategory) || [] );
            }
        } else {
            filtered = categoryProducts;
        }
    
        setFiltertype(filtered);
    }, [type, selectedSubCategory]);

    useEffect(() => {
        applyFilter();
    }, [applyFilter]);

    const uniqueCategories = Array.from(
        new Map(categoryProducts.map(c => [c.type, c])).values()
      );

    return (
        <>
            <div className='flex m-5 flex-col md:flex-row'>

                <div className='w-full mb-5 md:mb-0 md:w-[20%] border-2 border-[#9b9b9b93] rounded-md p-3 pb-20 self-start font-bold'>
                    <ul className='p-2 font-inria'>
                        {
                            uniqueCategories.map((item, index) => {
                                return (
                                    <li className='border-b border-[#d0d0d09e]' key={index}>
                                        <p className={`border-b border-[#d0d0d09e] pb-2 ${type === item.type ? "bg-[#95C3FF] px-2 rounded-md font-bold" : ""}`}
                                            onClick={() => { return type === item.type ? (navigate('/category'), setExpandedCategory(null), setSelectedSubcategory(null)) : (navigate(`/category/${item.type}`), setExpandedCategory(expandedCategory === item.type ? null : item.type), setSelectedSubcategory(null)) }}>{item.name}</p>



                                        {expandedCategory === item.type && (
                                            <ul className="p-3 flex flex-col gap-y-1 text-gray-500">
                                                {item.subcategories?.map((sub, i) => (
                                                    <li
                                                        key={i}
                                                        onClick={() => setSelectedSubcategory(sub.name)}
                                                        className={`cursor-pointer ${selectedSubCategory === sub.name
                                                            ? "text-black font-semibold"
                                                            : "hover:text-black"
                                                            }`}
                                                    >
                                                        {sub.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                             })}

                    </ul>
                    
                </div >

                <div className='md:grid md:grid-cols-[repeat(auto-fit,minmax(250px,350px))] gap-10 md:mx-5 md:w-[80%]'>
                    {
                        FilterType.map((item, index) => (
                            <div key={index} className='border border-[#00000040] mb-5 md:mb-0  font-inria shadow-custom' >
                                <div className='bg-[#F9F9F9] p-4'>
                                    <img src={item.image} alt="" className='w-full' />
                                </div>

                                <div className='flex flex-col gap-y-1 p-3 mb-8'>
                                    <p>{item.model}</p>
                                    <p>{item.feature}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    )
}

export default Category
