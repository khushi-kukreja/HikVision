import logo from "./logo.png"
import profile_pic from "./profile_pic.png"
import carousel1 from "./caorusel1.jpg"
import carousel2 from "./caorusel2.jpg"
import hkvision from "./hkvision.png"
import left_arrow from "./left-arrow.png"
import right_arrow from "./right-arrow.png"
import camera from "./camera.jpg"
import camicon from "./cameraicon.png"
import care from "./care.png"
import fb from "./facebook.png"
import insta from "./insta.png"
import twitter from "./twitter.png"
import yt from "./youtube.png"
import dropdown from "./dropdown_icon.svg"
import cctv from "./cctv.jpg"
import setup from "./setup.png"
import setup1 from "./setup (2).png"
import searchicon from "./searchicon.png"
import menu from "./menu.png";
import category from "./categoryimg.png"

export const assets={
logo,
profile_pic,
hkvision,
left_arrow,
right_arrow,
camera,
camicon,
care,
fb,
insta,
twitter,
yt,
dropdown,
cctv,
setup,
setup1,searchicon,
menu,
category,
}

export const Carousel=[
    {
        logo:hkvision,
        pic:carousel1,
        price:99999,
        offerprice:99998
    },
    {
        logo:hkvision,
        pic:carousel2,
        price:99999,
        offerprice:99998
    },
    {
        logo:hkvision,
        pic:carousel1,
        price:99999,
        offerprice:99998
    },
    {
        logo:hkvision,
        pic:carousel2,
        price:99999,
        offerprice:99998
    },
    {
        logo:hkvision,
        pic:carousel1,
        price:99999,
        offerprice:99998
    }
]

export const trending=[
    {
       cam:camera,
       text:"4 MP Smart Hybrid Light with ColorVuFixed Turret Network Camera"
    },
    {
        cam:camera,
        text:"4 MP Smart Hybrid Light with ColorVuFixed Turret Network Camera"
     },
     {
        cam:camera,
        text:"4 MP Smart Hybrid Light with ColorVuFixed Turret Network Camera"
     },
     {
        cam:camera,
        text:"4 MP Smart Hybrid Light with ColorVuFixed Turret Network Camera"
     },
     {
        cam:camera,
        text:"4 MP Smart Hybrid Light with ColorVuFixed Turret Network Camera"
     },
     {
        cam:camera,
        text:"4 MP Smart Hybrid Light with ColorVuFixed Turret Network Camera"
     },
     {
        cam:camera,
        text:"4 MP Smart Hybrid Light with ColorVuFixed Turret Network Camera"
     },

]

export const quality=[
    {
        icon:camicon,
        heading:"Layered Security",
        para:"With layered security we ensure the safety of every unit we provide"
    },
    {
        icon:camicon,
        heading:"Layered Security",
        para:"With layered security we ensure the safety of every unit we provide"
    },
    {
        icon:camicon,
        heading:"Layered Security",
        para:"With layered security we ensure the safety of every unit we provide"
    },
    {
        icon:camicon,
        heading:"Layered Security",
        para:"With layered security we ensure the safety of every unit we provide"
    },
    {
        icon:camicon,
        heading:"Layered Security",
        para:"With layered security we ensure the safety of every unit we provide"
    },
    {
        icon:camicon,
        heading:"Layered Security",
        para:"With layered security we ensure the safety of every unit we provide"
    },

]    
    
export const cctvProducts = [
  {
    id: 1,
    name: "Dome Camera Setup",
    type: "Dome",
    price: 15000,
    offerprice: 13500,
    brand: hkvision,
    image: setup,
    image1: setup1,
    feature: "4 Dome Cameras | 2.4 MP Full HD | Night Vision",
    includedProducts: [
      {
        name: "Dome Camera",
        type: "Camera",
        quantity: 4,
        offerprice: 2000,
        feature: "2.4 MP | 1920x1080 | Night Vision"
      },
      {
        name: "DVR - 4 Channel",
        type: "DVR",
        offerprice: 3500,
        feature: "Supports up to 4 cameras | HDMI output"
      },
      {
        name: "1TB HDD",
        type: "Storage",
        offerprice: 3200,
        feature: "WD Purple | 24x7 recording"
      },
      {
        name: "Power Adapters",
        type: "Power Supply",
        offerprice: 1000,
        feature: "4 x 12V 2A power adapters"
      },
      {
        name: "Coaxial Cable (80m)",
        type: "Cable",
        offerprice: 1200,
        feature: "RG59 + DC combo cable"
      }
    ]
  },
  {
    id: 2,
    name: "Bullet Camera Setup",
    type: "Bullet",
    price: 16000,
    offerprice: 14500,
    brand: hkvision,
    image: setup,
    image1: setup1,
    feature: "4 Bullet Cameras | 2.4 MP | Outdoor Weatherproof",
    includedProducts: [
      {
        name: "Bullet Camera",
        type: "Camera",
        quantity: 4,
        offerprice: 2200,
        feature: "2.4 MP | 1920x1080 | Outdoor IR up to 60m"
      },
      {
        name: "DVR - 4 Channel",
        type: "DVR",
        offerprice: 3500,
        feature: "HDMI output | Motion detection recording"
      },
      {
        name: "1TB HDD",
        type: "Storage",
        offerprice: 3200,
        feature: "Surveillance grade | Long life"
      },
      {
        name: "Coaxial Cable (100m)",
        type: "Cable",
        offerprice: 1500,
        feature: "Shielded cable for outdoor use"
      },
      {
        name: "Power Adapters",
        type: "Power Supply",
        offerprice: 1000,
        feature: "4 x 12V 2A adapters"
      }
    ]
  },
  {
    id: 3,
    name: "PTZ Camera Setup",
    type: "PTZ",
    price: 25000,
    offerprice: 22999,
    brand: hkvision,
    image: setup,
    image1: setup1,
    feature: "2 PTZ Cameras | 2.4 MP | Pan-Tilt-Zoom | Remote Access",
    includedProducts: [
      {
        name: "PTZ Camera",
        type: "Camera",
        quantity: 2,
        offerprice: 7100,
        feature: "2.4 MP | Pan-Tilt-Zoom | Night Vision"
      },
      {
        name: "NVR - 8 Channel",
        type: "NVR",
        offerprice: 6200,
        feature: "Supports PTZ control | Remote mobile app access"
      },
      {
        name: "2TB HDD",
        type: "Storage",
        offerprice: 5400,
        feature: "Large storage capacity for long recordings"
      },
      {
        name: "PoE Injector",
        type: "Power Supply",
        offerprice: 1600,
        feature: "Power + Data via single cable"
      },
      {
        name: "CAT6 Ethernet Cable (100m)",
        type: "Cable",
        offerprice: 2000,
        feature: "High-speed data transfer for IP cameras"
      }
    ]
  },
  {
    id: 4,
    name: "Hidden/Spy Camera Setup",
    type: "Spy",
    price: 12000,
    offerprice: 10999,
    brand: hkvision,
    image: setup,
    image1: setup1,
    feature: "2 Hidden Cameras | Wireless | Local Storage",
    includedProducts: [
      {
        name: "Hidden/Spy Camera",
        type: "Camera",
        quantity: 2,
        offerprice: 7100,
        feature: "Mini size | Wireless | Night Vision"
      },
      {
        name: "DVR - 4 Channel",
        type: "DVR",
        offerprice: 3500,
        feature: "Compact DVR | Motion-based recording"
      },
      {
        name: "128GB MicroSD Cards",
        type: "Storage",
        offerprice: 1800,
        feature: "Local storage inside cameras"
      },
      {
        name: "Battery Pack",
        type: "Power Supply",
        offerprice: 1400,
        feature: "Rechargeable battery for wireless use"
      }
    ]
  },
  {
    id: 5,
    name: "Hidden/Spy Camera Setup",
    type: "Spy",
    price: 12000,
    offerprice: 10999,
    brand: hkvision,
    image: setup,
    image1: setup1,
    feature: "2 Hidden Cameras | Wireless | Local Storage",
    includedProducts: [
      {
        name: "Hidden/Spy Camera",
        type: "Camera",
        quantity: 2,
        offerprice: 7100,
        feature: "Mini size | Wireless | Night Vision"
      },
      {
        name: "DVR - 4 Channel",
        type: "DVR",
        offerprice: 3500,
        feature: "Compact DVR | Motion-based recording"
      },
      {
        name: "128GB MicroSD Cards",
        type: "Storage",
        offerprice: 1800,
        feature: "Local storage inside cameras"
      },
      {
        name: "Battery Pack",
        type: "Power Supply",
        offerprice: 1400,
        feature: "Rechargeable battery for wireless use"
      }
    ]
  },
  {
    id: 6,
    name: "PTZ Camera Setup",
    type: "PTZ",
    price: 25000,
    offerprice: 22999,
    brand: hkvision,
    image: setup,
    image1: setup1,
    feature: "2 PTZ Cameras | 2.4 MP | Pan-Tilt-Zoom | Remote Access",
    includedProducts: [
      {
        name: "PTZ Camera",
        type: "Camera",
        quantity: 2,
        offerprice: 7100,
        feature: "2.4 MP | Pan-Tilt-Zoom | Night Vision"
      },
      {
        name: "NVR - 8 Channel",
        type: "NVR",
        offerprice: 6200,
        feature: "Supports PTZ control | Remote mobile app access"
      },
      {
        name: "2TB HDD",
        type: "Storage",
        offerprice: 5400,
        feature: "Large storage capacity for long recordings"
      },
      {
        name: "PoE Injector",
        type: "Power Supply",
        offerprice: 1600,
        feature: "Power + Data via single cable"
      },
      {
        name: "CAT6 Ethernet Cable (100m)",
        type: "Cable",
        offerprice: 2000,
        feature: "High-speed data transfer for IP cameras"
      }
    ]
  },
  {
    id: 7,
    name: "Dome Camera Setup",
    type: "Dome",
    price: 15000,
    offerprice: 13500,
    brand: hkvision,
    image: setup,
    image1: setup1,
    feature: "4 Dome Cameras | 2.4 MP Full HD | Night Vision",
    includedProducts: [
      {
        name: "Dome Camera",
        type: "Camera",
        quantity: 4,
        offerprice: 2000,
        feature: "2.4 MP | 1920x1080 | Night Vision"
      },
      {
        name: "DVR - 4 Channel",
        type: "DVR",
        offerprice: 3500,
        feature: "Supports up to 4 cameras | HDMI output"
      },
      {
        name: "1TB HDD",
        type: "Storage",
        offerprice: 3200,
        feature: "WD Purple | 24x7 recording"
      },
      {
        name: "Power Adapters",
        type: "Power Supply",
        offerprice: 1000,
        feature: "4 x 12V 2A power adapters"
      },
      {
        name: "Coaxial Cable (80m)",
        type: "Cable",
        offerprice: 1200,
        feature: "RG59 + DC combo cable"
      }
    ]
  },
  {
    id: 8,
    name: "Bullet Camera Setup",
    type: "Bullet",
    price: 16000,
    offerprice: 14500,
    brand: hkvision,
    image: setup,
    image1: setup1,
    feature: "4 Bullet Cameras | 2.4 MP | Outdoor Weatherproof",
    includedProducts: [
      {
        name: "Bullet Camera",
        type: "Camera",
        quantity: 4,
        offerprice: 2200,
        feature: "2.4 MP | 1920x1080 | Outdoor IR up to 60m"
      },
      {
        name: "DVR - 4 Channel",
        type: "DVR",
        offerprice: 3500,
        feature: "HDMI output | Motion detection recording"
      },
      {
        name: "1TB HDD",
        type: "Storage",
        offerprice: 3200,
        feature: "Surveillance grade | Long life"
      },
      {
        name: "Coaxial Cable (100m)",
        type: "Cable",
        offerprice: 1500,
        feature: "Shielded cable for outdoor use"
      },
      {
        name: "Power Adapters",
        type: "Power Supply",
        offerprice: 1000,
        feature: "4 x 12V 2A adapters"
      }
    ]
  },
];

// categories.js
export const categoryProducts = [
  {
    id: 1,
    name: "Dome Camera",
    type: "Dome",
    price: 2200,
    offerprice: 2000,
    brand: "Hikvision",
    image: category,
    model:"DS-2CE10KF0T-LPTS",
    feature: "2.4 MP | 1920x1080 | Up to 60m Range",
    subcategories: [
      {
        id: 101,
        name: "Indoor Dome",
        price: 2200,
        offerprice: 2000,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE10KF0T-LPTS",
        feature: "2.4 MP | 1920x1080 | Up to 30m Range"
      },
      {
        id: 102,
        name: "Outdoor Dome",
        price: 2500,
        offerprice: 2300,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE16KF0T-LPTS",
        feature: "2.4 MP | 1920x1080 | Weatherproof | Up to 60m Range"
      }
    ]
  },
  {
    id: 2,
    name: "Bullet Camera",
    type: "Bullet",
    price: 2800,
    offerprice: 2200,
    brand: "Hikvision",
    image: category,
    model:"DS-2CE10KF0T-LPTS",
    feature: "3K Two Way Audio Fixed Mini Bullet Camera",
    subcategories: [
      {
        id: 201,
        name: "Indoor Bullet",
        price: 2800,
        offerprice: 2500,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE10KF0T-LPTS",
        feature: "3K | Two Way Audio | Fixed Mini Bullet"
      },
      {
        id: 202,
        name: "Outdoor Bullet",
        price: 3000,
        offerprice: 2700,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE12KF0T-LPTS",
        feature: "4 MP | Weatherproof | Up to 80m Range"
      }
    ]
  },
  {
    id: 3,
    name: "PTZ Camera",
    type: "PTZ",
    price: 7500,
    offerprice: 7100,
    brand: "Hikvision",
    image: category,
    model:"DS-2CE10KF0T-LPTS",
    feature: "2.4 MP | 1920x1080 | Pan-Tilt-Zoom",
    subcategories: [
      {
        id: 301,
        name: "Indoor PTZ",
        price: 7200,
        offerprice: 6900,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE10KF0T-LPTS",
        feature: "2.4 MP | Pan-Tilt-Zoom | Indoor Use"
      },
      {
        id: 302,
        name: "Outdoor PTZ",
        price: 7800,
        offerprice: 7400,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE11KF0T-LPTS",
        feature: "3K | Pan-Tilt-Zoom | Outdoor | Weatherproof"
      }
    ]
  },
  {
    id: 4,
    name: "Hidden/Spy Camera",
    type: "Spy",
    price: 7500,
    offerprice: 7100,
    brand: "Hikvision",
    image: category,
    model:"DS-2CE10KF0T-LPTS",
    feature: "Mini size | Wireless option | Local Storage",
    subcategories: [
      {
        id: 401,
        name: "Mini Spy",
        price: 5000,
        offerprice: 4700,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE10KF0T-LPTS",
        feature: "Mini Size | Local Storage | Easy Install"
      },
      {
        id: 402,
        name: "Wireless Spy",
        price: 5500,
        offerprice: 5100,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE13KF0T-LPTS",
        feature: "Wireless | Remote Access | Hidden Design"
      }
    ]
  },
  {
    id: 5,
    name: "Dome Camera",
    type: "Dome",
    price: 2200,
    offerprice: 2000,
    brand: "Hikvision",
    image: category,
    model:"DS-2CE10KF0T-LPTS",
    feature: "2.4 MP | 1920x1080 | Up to 60m Range",
    subcategories: [
      {
        id: 501,
        name: "Indoor Dome",
        price: 2200,
        offerprice: 2000,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE10KF0T-LPTS",
        feature: "2.4 MP | 1920x1080 | Up to 30m Range"
      },
      {
        id: 502,
        name: "Outdoor Dome",
        price: 2500,
        offerprice: 2300,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE16KF0T-LPTS",
        feature: "2.4 MP | 1920x1080 | Weatherproof | Up to 60m Range"
      }
    ]
  },
  {
    id: 6,
    name: "Bullet Camera",
    type: "Bullet",
    price: 2800,
    offerprice: 2200,
    brand: "Hikvision",
    image: category,
    model:"DS-2CE10KF0T-LPTS",
    feature: "3K Two Way Audio Fixed Mini Bullet Camera",
    subcategories: [
      {
        id: 601,
        name: "Indoor Bullet",
        price: 2800,
        offerprice: 2500,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE10KF0T-LPTS",
        feature: "3K | Two Way Audio | Fixed Mini Bullet"
      },
      {
        id: 602,
        name: "Outdoor Bullet",
        price: 3000,
        offerprice: 2700,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE12KF0T-LPTS",
        feature: "4 MP | Weatherproof | Up to 80m Range"
      }
    ]
  },
  {
    id: 7,
    name: "PTZ Camera",
    type: "PTZ",
    price: 7500,
    offerprice: 7100,
    brand: "Hikvision",
    image: category,
    model:"DS-2CE10KF0T-LPTS",
    feature: "2.4 MP | 1920x1080 | Pan-Tilt-Zoom",
    subcategories: [
      {
        id: 701,
        name: "Indoor PTZ",
        price: 7200,
        offerprice: 6900,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE10KF0T-LPTS",
        feature: "2.4 MP | Pan-Tilt-Zoom | Indoor Use"
      },
      {
        id: 702,
        name: "Outdoor PTZ",
        price: 7800,
        offerprice: 7400,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE11KF0T-LPTS",
        feature: "3K | Pan-Tilt-Zoom | Outdoor | Weatherproof"
      }
    ]
  },
  {
    id: 8,
    name: "Hidden/Spy Camera",
    type: "Spy",
    price: 7500,
    offerprice: 7100,
    brand: "Hikvision",
    image: category,
    model:"DS-2CE10KF0T-LPTS",
    feature: "Mini size | Wireless option | Local Storage",
    subcategories: [
      {
        id: 801,
        name: "Mini Spy",
        price: 5000,
        offerprice: 4700,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE10KF0T-LPTS",
        feature: "Mini Size | Local Storage | Easy Install"
      },
      {
        id: 802,
        name: "Wireless Spy",
        price: 5500,
        offerprice: 5100,
        brand: "Hikvision",
        image: category,
        model: "DS-2CE13KF0T-LPTS",
        feature: "Wireless | Remote Access | Hidden Design"
      }
    ]
  },
];

