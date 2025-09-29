import React, { useState } from 'react'

const AccordianItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div className='border-b'>
            <button onClick={onClick} className="w-full flex justify-between items-center py-3 px-4 text-left font-semibold text-gray-800 hover:bg-gray-100">
                {title}
                <span>{isOpen ? "-" : "+"}</span>
            </button>

            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen p-4 bg-gray-50" : "max-h-0"
                }`}>
                {children}
            </div>
        </div>
    )
}

const ContactUs = () => {

    const [openIndex, setOpenIndex] = useState([]);
    const toggleAccordian = (index) => {
        setOpenIndex(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const [nestedOpen, setNestedOpen] = useState([]);
    const toggleNested = (index) => {
        setNestedOpen(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    }

    return (
        <>
            <div className='m-10 flex flex-col gap-10'>
                <div className='bg-gray-200 p-5 flex gap-6 flex-col'>
                    <h1 className='text-4xl font-bold text-center font-inria'>Privacy Policy</h1>
                    <p className='text-center font-inter'>Our Privacy Policy was updated on Sep 26, 2025.</p>

                    <div>
                        <AccordianItem title={"About Us"} isOpen={openIndex.includes(0)} onClick={() => toggleAccordian(0)} >
                            <p>Aome Pvt. Ltd., Your privacy very seriously. This Privacy Policy is designed with your needs in mind, and it is important that you have a comprehensive understanding of our personal information collection and usage practices, while ensuring that ultimately, you have control of your personal information provided to Aome.</p>
                        </AccordianItem>
                    </div>


                    <div>
                        <AccordianItem title={"About this Privacy Policy"} isOpen={openIndex.includes(1)} onClick={() => toggleAccordian(1)}>
                            <p>This Privacy Policy explains how Aome collects, uses, discloses, processes and protects any personal information that you give us or that we collect from you. Should we ask you to provide certain information by which you can be identified when you use the services on our platform, it will only be used in accordance with this Privacy Policy and/or our terms and conditions for users. Under this Privacy Policy, “personal information” means information that can be used to directly or indirectly identify an individual, either from that information alone or from that information combined with other information.</p>
                        </AccordianItem>
                    </div>

                    <div>
                        <AccordianItem title="TRUSTe – Information We Collect"
                            isOpen={openIndex.includes(2)}
                            onClick={() => toggleAccordian(2)}>

                            <AccordianItem title={"1. What information is collected by us and how do we use it?"} isOpen={nestedOpen.includes(0)} onClick={() => toggleNested(0)}>
                                <p>In order to provide our services to you, we will ask you to provide personal information that is necessary to provide those services to you. We will only collect the information that is necessary for its specified, concrete, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes. You have the right to choose whether or not to provide the information we have requested, but in most cases, if you do not provide your personal information, we may not be able to provide you with our services or respond to your queries.</p>
                            </AccordianItem>

                            <AccordianItem title={" 1.1.1 Information you provide to us"} isOpen={nestedOpen.includes(1)} onClick={() => toggleNested(1)}>
                                <p>We may collect any personal information you provide to us, which is necessary for the service you choose. For example, you may provide your CCTV SERV Account information when you log in; you may provide us your email address if you wish to receive news or updates from us; you may provide us your mobile phone number, address, name, postal code, order, invoicing details if you use retailing services.Other purposes with your consent.</p>
                            </AccordianItem>
                        </AccordianItem>

                        <AccordianItem title={"Here are more detailed examples on how we use your information (which may include personal information):"} isOpen={openIndex.includes(3)} onClick={() => toggleAccordian(3)}>
                            <p className='py-1'>Processing your purchase order. Information related to e-commerce orders is used for processing the purchase order and related after-sales services, including customer support and re-delivery. In addition, the order number will be used to cross-check the order with the delivery partner as well as to record delivery of the parcel. Recipient information, including name, address, phone number and postal code will be used for delivery purposes. Your email address is used to send you parcel tracking information. A list of purchased items is used for printing an invoice and enables the customer to see which items are in the parcel.
                            </p>
                            <p className='py-1'>Collecting user feedback. The feedback you choose to provide is valuable in helping Xiaomi make improvements to our services. In order to follow up on the feedback you have chosen to provide, Xiaomi may correspond with you using the personal information that you have provided and keep records of this correspondence for problem solving and service improvement.
                            </p>
                            <p className='py-1'>
                                Sending notices. From time to time, we may use your personal information to send important notices, such as notices about purchases and changes to our terms, conditions, and policies. Since such information is critical to your interaction with Xiaomi, it is not recommended that you refuse to receive such information.
                            </p>
                            <p className='py-1'>We may combine this information with other information (including information across different services or devices such as computers, mobile phones, and other connected devices) to provide and improve our services, and content. For example, we may use your Mi Account details in all services you use that require a Mi Account. Furthermore, in order to improve your experience and our services, while complying with relevant laws and regulations or with your consent, we may sort out information from different services or equipment from you or related to you to form a label, to provide suggestions, customized content, and personalized features. <br /><span className='font-semibold'>For example,</span>  using your search history in the browser to recommend products or services which you would be interested on mi.com. And according to the reasons for the aforementioned combination and the requirements of applicable laws, we will provide you with specific control mechanisms for such combination. You have the right to opt-out of receiving direct marketing from us and automated decision-making, etc. In order to exercise these rights, you can contact us at <a href=" https://privacy.mi.com/support" className='text-blue-700'>https://privacy.mi.com/support</a>  or refer to the control mechanisms described in the separate privacy policy for each product. Please also see “Your rights” below.
                            </p>
                        </AccordianItem>

                        <AccordianItem title={"YOUR RIGHTS"} isOpen={openIndex.includes(4)} onClick={() => toggleAccordian(4)}>
                            <p>You have the right to be provided with clear, transparent and easily understandable information about how we use your personal information and your rights. This is why we are providing you with the information in this Privacy Policy.
                            </p> <br />
                            <p>
                                If you have any comments or questions about this Privacy Policy or any questions relating to Aome’s collection, use, or disclosure of your personal information, please contact us at the address below referencing “Privacy Policy”. When we receive privacy or personal information questions about access/download requests, we have a professional team to solve your problems. If your question itself involves a significant issue, we may ask you for more information. If you are not satisfied with the response you received, you can hand over the complaint to the relevant regulatory authority in your jurisdiction. If you consult us, we will provide information on the relevant complaint channels that may be applicable based on your actual situation.

                            </p><br />
                            <p>
                                Thank you for taking the time to read our Privacy Policy!
                            </p>
                        </AccordianItem>
                    </div>
                </div>
            </div>

            <div className='m-10'>
                <h1 className='text-center font-inria text-3xl py-3'>Contact Us</h1>
                <div className='text-center font-inter bg-gray-100 p-4 flex flex-col gap-2'>
                    <h2 className='font-cinzel text-xl'>AOME Pvt. Ltd.</h2>
                    <p><span className='font-semibold'>Head Office :</span> Pragatipath Near Oneplus Service Center Baliyari Road Waidhan Distt - Singrauli Mp. 486886</p>

                    <p> <span className='font-semibold'>Query :</span> <a href="mailto:aomecustomercare@gmail.com" className='text-blue-600 hover:underline'>aomecustomercare@gmail.com</a>
                    </p>
                    <p><span className='font-semibold'>Support :</span> <a href="mailto:aomecustomercare@gmail.com" className='text-blue-600 hover:underline'> aomecomplaint@gmail.com </a>
                    </p>
                    <p><span className='font-semibold'>Contact us :</span>
                        <a href="tel:8962621011" className="text-blue-600 hover:underline"> 8962621011</a>,
                        <a href="tel:9630421298" className="text-blue-600 hover:underline"> 9630421298</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactUs
