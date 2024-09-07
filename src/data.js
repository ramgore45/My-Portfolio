import p1 from "../src/assets/p1.png"
import p2 from "../src/assets/p2.png"
import p3 from "../src/assets/p3.png"
import weather from "../src/assets/weather.png"
import dessert from "../src/assets/dessert.PNG"
import randomGif from "../src/assets/randomGif.PNG"

export const  data = [ 
    {
        name:"project"
    },
    {
        name:"about"
    },
    {
        name:"contact"
    },
]

export const SkillsItems =[ 
    {
        id:"1",
        title:"HTML",
        img:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
    },
    {
        id:"2",
        title:"CSS",
        img:"https://www.tiagofsanchez.com/static/6f8fd8ca25c7a0d0d8b1efa4cb538bfd/5d2c5/css.png"
    },
    {
        id:"3",
        title:"Javascript",
        img:"https://www.annisa.world/images/javascript.png"
    },
    {
        id:"4",
        title:"React.Js",
        img:"https://oneteamsolutions.in/blogoneteam/wp-content/uploads/2020/05/REACT-JS-KOCHI.png"
    },
    {
        id:"5",
        title:"TailwindCSS",
        img:"https://btihen.me/post_ruby_rails/rails_6_1_tailwind_2_0_alpinejs/featured.png"
    },
    {
        id:"6",
        title:"Node.JS",
        img:"https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
    },
    {
        id:"7",
        title:"Express.Js",
        img:"https://jrobi133.github.io/CSC-Portfolio-week6/assets/images/js.png"
    },
    {
        id:"8",
        title:"MongoDB",
        img:"https://miro.medium.com/v2/resize:fit:256/1*XR69xeq43LgKB0T_LjZqwQ.png"
    },
    {
        id:"9",
        title:"Postman",
        img:"https://www.gartner.com/pi/vendorimages/postman_full-life-cycle-api-management_1633960356020.png"
    },
    {
        id:"10",
        title:"Redux",
        img:"https://redux-tools.js.org/_media/logo-transparent.png"
    },
    {
        id:"11",
        title:"Bootstrap",
        img:"http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png"
    },
    {
        id:"12",
        title:"GitHub",
        img:"https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
    },
]

export const projects = [
    {
        name:"StudyNotion",
        TecStack:[
            "Html",
            "Tailwind css",
            "Express",
            "Node",
            "MongoDB",
            "Razorpay",
            "cloudinary",
            "JWT",
            "JavaScript",
        ],
        Image:p3,
        description:"StudyNotion is modern day Ed-tec website. Which is useful for student and Educators for buying affordable course's and study material",
        Link:"https://ed-tec.vercel.app/"
    },
    {
        name:"Razorpay",
        TecStack:[
            "Html",
            "CSS",
            "Tailwind css",
        ],
        Image:p2,
        description:"A sleek, responsive UI clone of Razorpay, crafted with HTML and CSS to emulate its clean and user-friendly design.",
        Link:"https://effulgent-croissant-44ae2b.netlify.app/"
    },
//    {
//     name:"Agrorent",
//     TecStack:[
//         "Html",
//         "Tailwind css",
//         "Socket.io",
//         "React",
//         "Cloudinary",
        
//     ],
//     Image:agorent,
//     description:"AgroRent helps farmers save money on equipment. With our rental option, farmers can use high-quality machinery without spending a lot upfront. We make farming easier by cutting costs.",
//     Link:"https://agrorent.vercel.app/"
//    },
   {
    name:"Weather App",
    TecStack:[     
        "React",
        "Javascript",
        "TailwindCSS",
        "HTML",
        "CSS",
        "API"
    ],
    Image:weather,
    description:"This weather app include infinite scroll with dynamic changing back-ground with respect to weather and auto suggestion feature",
    Link:"https://weather-app-chi-ten-55.vercel.app/"
   },
   {
    name:"Desserts Cart",
    TecStack:[     
        "React",
        "Javascript",
        "TailwindCSS",
        "HTML",
        "CSS",
    ],
    Image:dessert,
    description:"This is dessert cart app, A delectable assortment of indulgent sweets and treats, elegantly presented for your ultimate dessert experience.",
    Link:"https://desserts-cart-frontendmentor.vercel.app/"
   },
   {
    name:"Random Gif Generator",
    TecStack:[     
        "React",
        "Javascript",
        "TailwindCSS",
        "HTML",
        "CSS",
    ],
    Image:randomGif,
    description:"This is random Gif generator website, A whimsical tool that serves up a surprise assortment of animated GIFs to entertain and delight you.",
    Link:"https://random-gif-generator-smoky.vercel.app/"
   },
   {
       name:"Real time voice chat web app",
       TecStack:[
           "Html",
           "Module css",
           "javaScript",
           "React",
           "WebRtc",
           "Node",
           "Express",
           "mongoDB"
       ],
       Image:p1,
       Link:"https://realtime-voice-chat-app.vercel.app/"
   },

]