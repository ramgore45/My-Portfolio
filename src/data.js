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