(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2634:()=>{},4805:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,7970,23)),Promise.resolve().then(s.bind(s,9466)),Promise.resolve().then(s.bind(s,9119)),Promise.resolve().then(s.bind(s,8698)),Promise.resolve().then(s.bind(s,3368)),Promise.resolve().then(s.bind(s,506)),Promise.resolve().then(s.bind(s,6585)),Promise.resolve().then(s.bind(s,5198))},5035:(e,t,s)=>{"use strict";s.d(t,{I:()=>a});var l=s(4496),i=s(7358);console.log("Contentful Space ID:",i.env.CONTENTFUL_SPACE_ID),console.log("Contentful Access Token:",i.env.CONTENTFUL_ACCESS_TOKEN);let r=(0,l.U)({space:"u42cxdmlva6n",accessToken:"OenKLiSxwkF-zXeNoNhpmutRoUb7UfBn0lbNTto16Nc"});async function a(e){return(await r.getEntries({content_type:e})).items}},9466:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});var l=s(5155),i=s(2115),r=s(5565);let a=e=>{let{active:t,selectTab:s,children:i}=e;return(0,l.jsx)("button",{onClick:s,className:"px-3 py-2",children:(0,l.jsx)("p",{className:"font-semibold ".concat(t?"text-[#002347] border-b-2 border-[#002347]":"text-[#687771] hover:border-b-2 hover:border-[#002347]"),children:i})})},n=[{title:"Skills",id:"skills",content:(0,l.jsxs)("ul",{className:"list-disc pl-2",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Cloud Platforms:"})," AWS, GCP"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Programming Language:"})," Python, SQL, R, C, C#"]}),(0,l.jsx)("li",{children:(0,l.jsx)("strong",{children:"DevOps Tools: Git, GitHub"})}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Data Visualization:"})," PowerBI, Tableau"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Machine Learning:"})," Jupyter Notebook, Google Colaboratory"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Chatbot Development:"})," Dialog Flow"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Web Development Framework:"})," Flutter, Laravel"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Others: "}),"Research, Technical and Creative Writing"]})]})},{title:"Education",id:"education",content:(0,l.jsx)("ul",{className:"list-disc pl-2",children:(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Bachelor of Science in Computer Science"}),(0,l.jsxs)("p",{children:["Pamantasan ng Lungsod ng Maynila",(0,l.jsx)("i",{children:" (University of City of Manila)"})]})]})})},{title:"Certifications",id:"certifications",content:(0,l.jsxs)("ul",{className:"list-disc pl-2",children:[(0,l.jsx)("li",{children:"AWS Certified Cloud Practitioner"}),(0,l.jsx)("li",{children:"Certified in Cybersecurity - International Information System Security Certification Consortium (ISC)2"}),(0,l.jsx)("li",{children:"Completed DOST SPARTA’s Data Science Pathway "}),(0,l.jsx)("li",{children:"Online Training on Python"})]})}],c=()=>{let[e,t]=(0,i.useState)("skills"),[s,c]=(0,i.useTransition)(),o=e=>{c(()=>{t(e)})};return(0,l.jsx)("section",{className:"text-[#687771]",children:(0,l.jsxs)("div",{className:"md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16 xl:px-16",children:[(0,l.jsx)("div",{className:"relative w-full h-auto flex justify-center items-center",children:(0,l.jsx)(r.default,{src:"/images/about-me.png",width:500,height:500,alt:"About Me",className:"rounded-lg object-contain"})}),(0,l.jsxs)("div",{className:"mt-4 md:mt-0 text-left flex flex-col h-full",children:[(0,l.jsx)("h2",{id:"about",className:"text-center text-4xl font-bold text-[#002347] mb-4 py-5",children:"About Me"}),(0,l.jsxs)("p",{className:"text-base lg:text-lg",children:["I want to use my diverse knowledge and skills in helping businesses have a numerical vision of their current business position and to have ",(0,l.jsx)("strong",{children:"data-driven decisions"}),"."]}),(0,l.jsxs)("p",{className:"text-base lg:text-lg",children:["I currently have skills in ",(0,l.jsx)("strong",{children:"Python"}),", ",(0,l.jsx)("strong",{children:"R"}),", ",(0,l.jsx)("strong",{children:"PowerBI/Tableau"}),", and am currently learning more about Data Engineering and the Cloud ",(0,l.jsx)("strong",{children:"(AWS/GCP)"}),"."]}),(0,l.jsxs)("div",{className:"flex flex-row justify-start mt-8",children:[(0,l.jsxs)(a,{selectTab:()=>o("skills"),active:"skills"===e,children:[" ","Skills"," "]}),(0,l.jsxs)(a,{selectTab:()=>o("education"),active:"education"===e,children:[" ","Education"," "]}),(0,l.jsxs)(a,{selectTab:()=>o("certifications"),active:"certifications"===e,children:[" ","Certifications"," "]})]}),(0,l.jsx)("div",{className:"mt-8",children:n.find(t=>t.id===e).content})]})]})})}},9119:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var l=s(5155),i=s(2115);let r={src:"/_next/static/media/github.c70d7253.svg",height:24,width:24,blurWidth:0,blurHeight:0},a={src:"/_next/static/media/linkedin.a09118ea.svg",height:24,width:24,blurWidth:0,blurHeight:0};var n=s(8173),c=s.n(n),o=s(5565),d=s(6367);let x=()=>{let e=(0,i.useRef)(),[t,s]=(0,i.useState)("");return(0,l.jsxs)("section",{className:"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 items-start",children:[(0,l.jsxs)("div",{id:"contact",className:"flex flex-col items-center md:items-start",children:[(0,l.jsx)(o.default,{src:"/images/coverimg.png",alt:"Beyond the Vinculum",width:500,height:500,className:"mb-8"}),(0,l.jsx)("h5",{className:"text-xl font-bold text-[#002347] my-2",children:"Let's work on something together?"}),(0,l.jsx)("p",{className:"text-[#687771] mb-4 max-w-md",children:"Let's connect, to explore endless possibilities, beyond the vinculum!"}),(0,l.jsxs)("div",{className:"socials flex gap-4",children:[(0,l.jsx)(c(),{href:"https://github.com/samservo09",children:(0,l.jsx)(o.default,{src:r,alt:"Github Icon",width:24,height:24})}),(0,l.jsx)(c(),{href:"https://www.linkedin.com/in/samantha-servo-43625b18a/",children:(0,l.jsx)(o.default,{src:a,alt:"Linkedin Icon",width:24,height:24})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{ref:e,onSubmit:t=>{t.preventDefault(),d.Ay.sendForm("service_iwj37z8","template_sclpnr5",e.current,{publicKey:"Poe-LFvxYO-nBwQgt"}).then(()=>{console.log("SUCCESS!"),s("Message sent successfully! Please check your inbox :>")},e=>{console.log("FAILED...",e.text),s("Failed to send message. Please try again later or message me directly at samanthaservo09@gmail.com.")})},className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"from_name",className:"text-[#002347] font-bold text-sm mb-1 block",children:"Your Name"}),(0,l.jsx)("input",{type:"text",id:"from_name",name:"from_name",required:!0,className:"bg-[#dbdbdb] border border-[#002347] text-[#002347] text-sm rounded-lg block w-full p-2.5",placeholder:"Your Name"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"email",className:"text-[#002347] font-bold text-sm mb-1 block",children:"Your Email"}),(0,l.jsx)("input",{type:"email",id:"email",name:"user_email",required:!0,className:"bg-[#dbdbdb] border border-[#002347] text-[#002347] text-sm rounded-lg block w-full p-2.5",placeholder:"yourEmail@gmail.com"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"subject",className:"text-[#002347] font-bold text-sm mb-1 block",children:"Subject"}),(0,l.jsx)("input",{type:"text",id:"subject",name:"subject",required:!0,className:"bg-[#dbdbdb] border border-[#002347] text-[#002347] text-sm rounded-lg block w-full p-2.5",placeholder:"What do you want us to work on?"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"message",className:"text-[#002347] font-bold text-sm mb-1 block",children:"Message"}),(0,l.jsx)("textarea",{name:"message",id:"message",required:!0,className:"bg-[#dbdbdb] border border-[#002347] text-[#002347] text-sm rounded-lg block w-full p-2.5",placeholder:"Let me hear that awesome idea of yours!"})]}),(0,l.jsx)("button",{type:"submit",className:"bg-[#002347] hover:bg-[#687771] text-[#f1f5f3] font-medium py-2.5 px-5 rounded-lg w-full",children:"Send your message"})]}),t&&(0,l.jsx)("div",{className:"mt-4 text-center text-lg text-[#002347]",children:t})]})]})}},8698:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var l=s(5155);s(2115);var i=s(5565),r=s(2615);let a=()=>(0,l.jsx)("section",{className:"py-10",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-12 px-4 sm:px-10 lg:px-20 gap-y-8",children:[(0,l.jsxs)("div",{className:"col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left",children:[(0,l.jsxs)("h1",{className:"text-[#687771] mb-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-normal lg:leading-snug",children:[(0,l.jsxs)("span",{className:"text-transparent bg-clip-text bg-[#002347]",children:["Hello, I..."," "]}),(0,l.jsx)(r.d,{sequence:["I'm Samantha Servo",2e3,"do Data Science",2e3,"do Artificial Intelligence",2e3,"do Cloud Engineering",2e3,"do Research",2e3,"do Bioinformatics",2e3,"go BEYOND THE VINCULUM!",2e3],wrapper:"span",speed:50,repeat:1/0})]}),(0,l.jsxs)("p",{className:"text-[#687771] text-sm sm:text-lg mb-6 lg:mb-8 lg:text-xl leading-relaxed max-w-lg",children:["I consider myself an ",(0,l.jsx)("strong",{children:"autodidact"})," and"," ",(0,l.jsx)("strong",{children:"multipotentialite"}),". An outlier,"," ",(0,l.jsx)("strong",{children:"beyond the vinculum!"})," Why those things? I love teaching myself (autodidact) about the different interests (multipotentialite) that I have."]}),(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0",children:[(0,l.jsx)("button",{className:"px-6 py-3 w-full sm:w-auto rounded-full bg-[#002347] hover:bg-[#687771] text-[#f1f5f3]",children:"Work With Me"}),(0,l.jsx)("button",{className:"px-1 py-1 w-full md:w-auto sm:w-auto rounded-full bg-[#002347] hover:bg-[#687771] text-[#687771]",children:(0,l.jsx)("span",{className:"block bg-[#f1f5f3] hover:bg-[#687771] text-[#002347] hover:text-[#f1f5f3] rounded-full px-5 py-2",children:"Download CV"})})]})]}),(0,l.jsx)("div",{className:"col-span-5 flex justify-center items-center",children:(0,l.jsx)("div",{className:"rounded-full bg- w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[400px] lg:h-[400px] relative",children:(0,l.jsx)(i.default,{src:"/images/herosec-img-3.png",alt:"hero image",className:"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain",width:300,height:300})})})]})})},3368:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var l=s(5155),i=s(8173),r=s.n(i),a=s(2115);let n=e=>{let{href:t,title:s}=e;return(0,l.jsx)(r(),{href:t,className:"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white",children:s})};var c=s(4450),o=s(2460),d=s(5565);let x=[{title:"About Me",path:"#about"},{title:"Projects",path:"#projects"},{title:"Publications",path:"#publications"},{title:"Talks",path:"#talks"},{title:"Blogs",path:"https://tutorialsdojo.com/author/samantha-servo/"},{title:"Contact Me",path:"#contact"}],m=()=>{let[e,t]=(0,a.useState)(!1);return(0,l.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90",children:(0,l.jsxs)("div",{className:"flex flex-wrap items-center justify-between mx-auto px-4",children:[(0,l.jsx)(r(),{href:"/",className:"text-2xl md:text-5xl text-white font-semibold",children:(0,l.jsx)(d.default,{src:"/images/logo-pic-3.png",alt:"Beyond the Vinculum Logo",width:120,height:50,className:"h-auto w-auto"})}),(0,l.jsx)("div",{className:"mobile-menu block md:hidden",children:e?(0,l.jsx)("button",{onClick:()=>t(!1),className:"flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white",children:(0,l.jsx)(c.A,{className:"h-5 w-5"})}):(0,l.jsx)("button",{onClick:()=>t(!0),className:"flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white",children:(0,l.jsx)(o.A,{className:"h-5 w-5"})})}),(0,l.jsx)("div",{className:"menu ".concat(e?"block":"hidden"," md:flex md:flex-row"),children:(0,l.jsx)("ul",{className:"flex flex-col md:flex-row md:space-x-8 p-4 md:p-0",children:x.map((e,t)=>(0,l.jsx)("li",{className:"text-white font-medium",children:(0,l.jsx)(n,{href:e.path,title:e.title})},t))})})]})})}},506:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var l=s(5155),i=s(2115),r=s(5035),a=s(557),n=s(351),c=s(8173),o=s.n(c);let d=e=>{let{imgUrl:t,title:s,description:i,gitUrl:r,previewUrl:c}=e;return(0,l.jsxs)("div",{className:"rounded-xl overflow-hidden shadow-lg",children:[(0,l.jsxs)("div",{className:"relative group h-52 md:h-72",children:[(0,l.jsx)("div",{className:"h-full w-full bg-cover bg-center",style:{backgroundImage:"url(".concat(t,")")}}),(0,l.jsxs)("div",{className:"absolute inset-0 bg-[#002347] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center space-x-4",children:[(0,l.jsx)(o(),{href:r||"/",className:"h-14 w-14 border-2 rounded-full border-[#f1f5f3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,l.jsx)(a.A,{className:"h-10 w-10 text-[#f1f5f3] hover:text-[#687771] cursor-pointer"})}),(0,l.jsx)(o(),{href:c||"/",target:"_blank",rel:"noopener noreferrer",className:"h-14 w-14 border-2 rounded-full border-[#f1f5f3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,l.jsx)(n.A,{className:"h-10 w-10 text-[#f1f5f3] hover:text-[#687771] cursor-pointer"})})]})]}),(0,l.jsxs)("div",{className:"text-[#002347] rounded-b-xl bg-[#687771] py-6 px-4",children:[(0,l.jsx)("h5",{className:"text-xl font-semibold mb-2",children:s}),(0,l.jsx)("p",{className:"text-[#f1f5f3]",children:i})]})]})},x=e=>{let{tag:t,onClick:s,isSelected:i}=e;return(0,l.jsx)("button",{onClick:()=>s(t),className:"px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ".concat(i?"bg-[#002347] text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"),children:t})},m=()=>{let[e,t]=(0,i.useState)("All"),[s,a]=(0,i.useState)([]);(0,i.useEffect)(()=>{!async function(){try{let e=await (0,r.I)("project");a(e)}catch(e){console.error("Error fetching projects:",e)}}()},[]);let n=e=>{t(e)},c=s.filter(t=>t.fields.tags.includes(e)||"All"===e);return(0,l.jsxs)("div",{className:"py-8 mx-auto max-w-7xl px-4",children:[(0,l.jsx)("h2",{id:"projects",className:"text-center text-4xl font-bold text-[#002347] mb-8",children:"My Projects"}),(0,l.jsxs)("div",{className:"text-[#002347] flex flex-row justify-center items-center gap-4 py-6",children:[(0,l.jsx)(x,{onClick:n,tag:"All",isSelected:"All"===e}),(0,l.jsx)(x,{onClick:n,tag:"Data",isSelected:"Data"===e}),(0,l.jsx)(x,{onClick:n,tag:"AI/ML",isSelected:"AI/ML"===e}),(0,l.jsx)(x,{onClick:n,tag:"Cloud",isSelected:"Cloud"===e})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center",children:c.map(e=>(0,l.jsx)(d,{imgUrl:e.fields.image?e.fields.image.fields.file.url:"/default-image.jpg",title:e.fields.title,description:e.fields.description,gitUrl:e.fields.gitUrl,previewUrl:e.fields.previewUrl},e.sys.id))})]})}},6585:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var l=s(5155),i=s(2115),r=s(5035),a=s(557),n=s(351),c=s(8173),o=s.n(c);let d=e=>{let{imgUrl:t,title:s,description:i,gitUrl:r,previewUrl:c}=e;return(0,l.jsxs)("div",{className:"rounded-xl overflow-hidden shadow-lg",children:[(0,l.jsxs)("div",{className:"relative group h-52 md:h-72",children:[(0,l.jsx)("div",{className:"h-full w-full bg-cover bg-center",style:{backgroundImage:"url(".concat(t,")")}}),(0,l.jsxs)("div",{className:"absolute inset-0 bg-[#002347] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center space-x-4",children:[(0,l.jsx)(o(),{href:r||"/",className:"h-14 w-14 border-2 rounded-full border-[#f1f5f3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,l.jsx)(a.A,{className:"h-10 w-10 text-[#f1f5f3] hover:text-[#687771] cursor-pointer"})}),(0,l.jsx)(o(),{href:c||"/",className:"h-14 w-14 border-2 rounded-full border-[#f1f5f3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,l.jsx)(n.A,{className:"h-10 w-10 text-[#f1f5f3] hover:text-[#687771] cursor-pointer"})})]})]}),(0,l.jsxs)("div",{className:"text-[#002347] rounded-b-xl bg-[#687771] py-6 px-4",children:[(0,l.jsx)("h5",{className:"text-xl font-semibold mb-2",children:s}),(0,l.jsx)("p",{className:"text-[#f1f5f3]",children:i})]})]})},x=e=>{let{tag:t,onClick:s,isSelected:i}=e;return(0,l.jsx)("button",{onClick:()=>s(t),className:"px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ".concat(i?"bg-[#002347] text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"),children:t})},m=()=>{let[e,t]=(0,i.useState)("All"),[s,a]=(0,i.useState)([]);(0,i.useEffect)(()=>{!async function(){try{let e=await (0,r.I)("publications");a(e)}catch(e){console.error("Error fetching publications:",e)}}()},[]);let n=e=>{t(e)},c=s.filter(t=>t.fields.tags.includes(e)||"All"===e);return(0,l.jsxs)("div",{className:"py-8 mx-auto max-w-7xl px-4",children:[(0,l.jsx)("h2",{id:"publications",className:"text-center text-4xl font-bold text-[#002347] mb-8",children:"My Publications"}),(0,l.jsxs)("div",{className:"text-[#002347] flex flex-row justify-center items-center gap-4 py-6",children:[(0,l.jsx)(x,{onClick:n,tag:"All",isSelected:"All"===e}),(0,l.jsx)(x,{onClick:n,tag:"Undergrad",isSelected:"Undergrad"===e})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center",children:c.map(e=>(0,l.jsx)(d,{imgUrl:e.fields.image.fields.file.url,title:e.fields.title,description:e.fields.description,gitUrl:e.fields.gitUrl,previewUrl:e.fields.previewUrl},e.sys.id))})]})}},5198:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var l=s(5155),i=s(2115),r=s(5035),a=s(351),n=s(8173),c=s.n(n);let o=e=>{let{imgUrl:t,title:s,description:i,previewUrl:r}=e;return(0,l.jsxs)("div",{className:"rounded-xl overflow-hidden shadow-lg bg-[#002347]",children:[(0,l.jsxs)("div",{className:"relative group h-52 md:h-72",children:[(0,l.jsx)("div",{className:"h-full w-full bg-cover bg-center transition-all duration-500 group-hover:brightness-50",style:{backgroundImage:"url(".concat(t,")")}}),(0,l.jsx)("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500",children:(0,l.jsx)(c(),{href:r,target:"_blank",rel:"noopener noreferrer",className:"h-14 w-14 border-2 rounded-full border-[#f1f5f3] flex items-center justify-center",children:(0,l.jsx)(a.A,{className:"h-8 w-8 text-[#f1f5f3] hover:text-[#687771]"})})})]}),(0,l.jsxs)("div",{className:"text-[#002347] rounded-b-xl bg-[#687771] py-6 px-4",children:[(0,l.jsx)("h5",{className:"text-xl font-semibold mb-2",children:s}),(0,l.jsx)("p",{className:"text-[#f1f5f3]",children:i})]})]})},d=e=>{let{tag:t,onClick:s,isSelected:i}=e;return(0,l.jsx)("button",{onClick:()=>s(t),className:"px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ".concat(i?"bg-[#002347] text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"),children:t})},x=()=>{let[e,t]=(0,i.useState)("All"),[s,a]=(0,i.useState)([]);(0,i.useEffect)(()=>{!async function(){try{let e=await (0,r.I)("talks");a(e)}catch(e){console.error("Error fetching talks:",e)}}()},[]);let n=e=>{t(e)},c=s.filter(t=>t.fields.tags.includes(e)||"All"===e);return(0,l.jsxs)("div",{className:"py-8 mx-auto max-w-7xl px-4",children:[(0,l.jsx)("h2",{id:"talks",className:"text-center text-4xl font-bold text-[#002347] mb-8",children:"My Talks"}),(0,l.jsxs)("div",{className:"text-[#002347] flex flex-row justify-center items-center gap-4 py-6",children:[(0,l.jsx)(d,{onClick:n,tag:"All",isSelected:"All"===e}),(0,l.jsx)(d,{onClick:n,tag:"Data",isSelected:"Data"===e})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center",children:c.map(e=>(0,l.jsx)(o,{imgUrl:e.fields.image?e.fields.image.fields.file.url:"/default-image.jpg",title:e.fields.title,description:e.fields.description,previewUrl:e.fields.previewUrl},e.sys.id))})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[835,441,517,358],()=>t(4805)),_N_E=e.O()}]);