import { BiSolidMessageDetail } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { MdCall, MdFamilyRestroom } from "react-icons/md";
import React from "react";
import { review2, review1 } from '../assets/images'
import { LuMessagesSquare } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";



export const navLinks = [
    { href: "#property", label: "Property" },
    { href: "#services", label: "Services" },
    { href: "#about-us", label: "About Us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
];

export const status=[
    {
        Num : "5k+",
        label:"Premium Product "
    },
    {
        Num : "3k+",
        label:"Happy Customer "
    },
    {
        Num : "20+",
        label:"Awards Winning "
    },
]

export const servicesList=[
    {
        icon:React.createElement(BiSolidMessageDetail,{size:"40px",className:'text-white'}) ,
        title:"Communication",
        descrpition:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
    },
    {
        icon:React.createElement(AiFillSafetyCertificate,{size:"40px",className:'text-white'}),
        title:"Reliability",
        descrpition:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
    },
    {    
        icon:React.createElement(BiSolidBadgeCheck,{size:"40px",className:'text-white'} ),
        title:"Quality First",
        descrpition:"It is a long established fact that a reader will be distracted "
    },
    {      
        icon:React.createElement(MdFamilyRestroom,{size:"40px",className:'text-white'} ),
        title:"families",
        descrpition:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
    },
]


export const reviewsList=[
    {
        name:"Chirly Chapline",
        title:"Home- Owner, US",
        img: review1,
        descrpition:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
    },
    {
        name:"Chirly Chapline",
        title:"Home- Owner, US",
        img: review2,
        descrpition:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
    },
    {
        name:"Chirly Chapline",
        title:"Home- Owner, US",
        img: review2,
        descrpition:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
    }
    
]

export const contactInf =[
    {
        icon:React.createElement(MdCall ,{size:"30px",className:'text-primary'}),
        title:"Call",
        subtitle:"06 67 67 67 67",
    },
    {
        icon:React.createElement(LuMessagesSquare  ,{size:"30px",className:'text-primary'}),
        title:"Email",
        subtitle:"AymaneState@gmail.com",
    }
    ,
    {
        icon:React.createElement(GrLocation   ,{size:"30px",className:'text-primary'}),
        title:"Location",
        subtitle:"123 Main Street, Beni mellal, MAROC",
        full:""
        
    }

]

export const FooterLink =[
    
        {
            title:"About",
            list:["About Us","Features","News & Blog"]
        },
        {
            title:"Company",
            list:["How We Work?","Capital","Security"]
        },
        {
            title:"Support",
            list:["FAQs","Support Center","Contact Us"]
        },
        {
            title:"Movement",
            list:["What ?","Support Us","Privacy Policy"]
        }
    
]