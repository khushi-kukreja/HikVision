import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

console.log("🔍 Component mounted");

const SetupAmount = () => {



    // const [noOfProduct, setnoOfProduct] = useState(1);
    const { setupID } = useParams();
    const [setupInfo, setSetupInfo] = useState(null);
    const [setupItems, setSetupItems] = useState([]);
    const { getCCTVProducts } = useContext(AppContext);

    useEffect(() => {
        const fetchSetupData = async () => {
            const found = getCCTVProducts.find(setup => setup.id === Number(setupID));
            if (found) {
                setSetupInfo(found);
                const updatedItems = (found.includedProducts || []).map(item => ({
                    ...item,
                    quantity: 1
                }));
                setSetupItems(updatedItems);
            }
        };
        fetchSetupData();
    }, [getCCTVProducts, setupID]);

    const incrementQuantity = (index) => {
        const updated = [...setupItems];
        updated[index].quantity += 1;
        setSetupItems(updated);
    };

    const decrementQuantity = (index) => {
        const updated = [...setupItems];
        if (updated[index].quantity > 1) {
            updated[index].quantity -= 1;
            setSetupItems(updated);
        }
    };

    const removeProduct = (index) => {
        const updated = [...setupItems];
        updated.splice(index, 1);
        setSetupItems(updated);
    };

    const subtotal = setupItems.reduce((sum, item) => sum + item.offerprice * item.quantity, 0);
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;

    if (!setupInfo) return <div>Loading...</div>;

    return (
        <>
            <div className='flex flex-col md:flex-row'>
                <div className=' flex flex-col w-full md:w-2/3 bg-[#F9F9F9AA] p-5'>
                    <div className='my-5 relative'>
                        <input type="search" className='border w-full p-1 rounded-xl border-stone-400 pl-10 ' placeholder='search'></input>
                        <img src={assets.searchicon} alt="" className='w-6 absolute left-2 bottom-1' />
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        {
                            setupItems.length === 0 ? (
                                <p>No Products added.....</p>) :
                                (
                                    setupItems.map((item, index) => (
                                        <div className='w-full border rounded-2xl shadow-[0_0_10px_rgba(0,_0,_0,_0.5)] flex flex-row justify-between items-center py-3 px-3' key={index}>
                                            <div className='flex items-center'>
                                                <div className=' mr-3'>
                                                    <img src={item.image || setupInfo.image} alt="" className='w-20 rounded-lg border p-2' />
                                                </div>
                                                <div className='font-inria text-[16px]'>
                                                    <p>{item.name}</p>
                                                    <p className='text-[14px]'>{item.feature} </p>
                                                    <p className='text-[#004CB0]  text-[14px]'>&#8377; {item.offerprice}</p>
                                                </div>
                                            </div>
                                            <div className='flex font-inria'>
                                                <p className='text-[#004CB0] text-[18px] mr-4'>&#8377; {item.offerprice * item.quantity}</p>
                                                <div className='flex mr-4 border border-stone-400 rounded-lg text-[18px] font-bold'>
                                                    <p className='border-r   border-stone-400 px-2 cursor-pointer' onClick={() => incrementQuantity(index)}>+</p>
                                                    <p className='border-r   border-stone-400 px-2' >{item.quantity}</p>
                                                    <p className='px-2 cursor-pointer' onClick={() => decrementQuantity(index)}>-</p>
                                                </div>
                                                <button className='border border-[#FFCBCB] rounded-lg text-[#FF7A7A] px-5 text-[12px]' onClick={() => removeProduct(index)}>Remove</button>
                                            </div>
                                        </div>
                                    ))
                                )}

                    </div>
                </div>


            <div className='p-10 w-full md:w-1/3 font-inria '>
                <h1 className='text-center  text-2xl'>Summary</h1>
                <div className='mt-10 flex flex-col gap-1'>
                    <div className='flex justify-between items-center'>
                        <p>SubTotal</p>
                        <p>&#8377; {subtotal}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>Taxes</p>
                        <p>&#8377; {tax}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>Total</p>
                        <p>&#8377; {total}</p>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}

export default SetupAmount
