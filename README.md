# MovieMingle
This is a Project on buying and renting recommended movie application [Website](https://movie-mingle-chi.vercel.app/)
# cmds
React: npx create-react-app bms
       cd bms
Tailwind: npm install -D tailwindcss(Alternative of Bootstrap)
          npx tailwindcss init
React-Slick: npm install react-slick (Slider mainly)
             npm install slick-carousel
Axios: npm i axios(API)

HeadlessUi: npm install @headlessui/react(UI purpose)
React-icons: npm install react-icons`
React-ROuter-dom: npm i react-router-dom

>> Run Appln
npm start
workflow: from index to app

>>React
>>Tailwind
>>Reach-Slick(Carousels)
>>React-Icons
>>React-Context-API

#    Pages:                             HOC's(Layouts):                                       
>>Home.Page.jsx                         Default.layout.jsx
>>Movie.Page.jsx                        Movie.layout.jsx
>>Play.Page.jsx                         Default.layout.jsx

# Components:
>>Cast                                Cast.Component.jsx
>>Entertainment                       EntertainmentCard.Component.jsx
>>HeroCarousel                        HeroCarousel.Component.jsx
                                      Arrows.Component.jsx
>>MovieHero                           MovieHero.Component.jsx
                                      MovieInfo.Component.jsx
>>Navbar                              MovieNavbar.Component.jsx
                                      Navbar.Component.jss
>>PaymentModel                        Payment.Component.jsx
>>PlayFilters                         PlayFilters.Component.jsx
>>Poster                              Poster.Component.jsx
>>PosterSlider                        PosterSlider.Component.jsx

# Resources:
>> https://tailwindcss.com/docs/guides/create-react-app
>>https://react-slick.neostack.com/
>>https://www.npmjs.com/package/axios
>>https://headlessui.com/react/dialog
>>https://react-icons.github.io/react-icons/


# theMovieDB  API Key: c096ce9a4c058f633dea0bdc4a5aed0f

# Shortcut
>> rafce

# DevOps
>> Dev: Development
>> Ops: Operation

       Dev                                         Ops
       (Developer)-------------share code--------->Operations(Testing,Scaling and Bug Fixing)
       Dev----------share code-------->Teasting Team-----|
                                                         |-----Code is Ok -----> Operations
                                                         |-----Code is Not Ok----> Dev
# Docker & Kuberneetes

### Virtualization
( I could run virtual OS on the top of my real time OS)

                     Virtual OS:Linux

                     Base/Local OS: Windows
>> Resources shared with Virtual OS: [RAM, ROM, GPU]


              Linux                              Unix
       (2GB,500GB,2GB)                      (6GB,500GB,2GB)
                            Base: Windows
                     8GB RAM,1TB ROM, 4GB GPU

### Containerization (Docker)

              Linux                               Unix
       (2GB,500GB,2GB)                      (6GB,500GB,2GB)
                           
                             Docker Engine:Will Share the RAM accordingly for priority basis only first to linux then to unix
                           
                            Base: Windows
                     8GB RAM,1TB ROM, 4GB GPU

# Docker (EC2):
>>Image
>>Containers(Servers)

       >>Docker Deamon----------->Server
       >>Docker Client----------->Client
       >>Docker Swarm------------>Orchestration

# Kubernetes (Orchestra)
>>Nodes
       >>Master Node(Orchestra)
       >>Child Node----||
                       ||--POD
                       ||--Development-> Keeps close Eye on POD

Docker:
       >> Image
              >> Container1
              >> Container2
              >> Container3..

## Docker >> Kubernetes

AWS (EC2)(VM)
VM
              Kubernetes
Base OS



resume worded
canva
