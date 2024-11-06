var tl =  gsap.timeline();
var parasize = document.querySelector(".scrollpart p");
var image_size = document.querySelector(".scrollpart img")

tl.to(".dabba",{
x:-3000,
    duration:40,
    repeat:-1,

})

tl.to(".page1 .scrollpart ",{
// fontSize:"64vw",

// scale:1.1,
// marginRight:"55vw",
// marginLeft:"55vw",
scale:1.4,
    scrollTrigger:{
        scroller:"body",
        trigger:".page1 .scrollpart",
        start:"top 30%",
        end:"top 5%",   
        // markers:true,
        scrub:2,
pin:true,
    }
},"elem")

tl.to(".page1 .scrollpart p",{
  
       
    },"elem")

    // var pl = gsap.timeline();

    gsap.from(".page2 .page2part1 .p p",{
    
        y:"100%",
        stagger:0.1,
        ease:"sine.out",
    scrollTrigger:{
        trigger:".page2 .page2part1 .p p",
        scroller:"body",
        start:"top 50%",
    
        // markers:true,

    }
        
    })   

    gsap.from(".page2 .page2part2 .p p",{
    
        y:"100%",
        stagger:0.1,
        ease:"sine.out",
        scrollTrigger:{
            trigger:".page2 .page2part1 .p p",
            scroller:"body",
            start:"top 40%",
        
            // markers:true,
    
        }
        
    }) 


    gsap.to(".page4 .wo", {
        x: "40%",
        duration: 8,
        delay: 2,
        scrub: 1,
        scrollTrigger: {
          trigger: ".wo",
          scroller: "body",
          start: "top 30%",
          end: "top 0%",
        //   markers: true,
          scrub: true,
        }
      },"elem" )
      gsap.to(".page4 .rk", {
        x: "-39%",
        duration: 8,
        delay: 2,
        scrub: 1,
        scrollTrigger: {
          trigger: ".rk",
          scroller: "body",
          start: "top 30%",
          end: "top 0%",
        //   markers: true,
          scrub: true,
        }
      },"elem")
      
      gsap.to(".page4 .img", {
        scaleX:3.2,
        scaleY:2,
        marginTop: "20px",
    marginRight:"100px",
        
    duration:5,
    // scrub: 2,
      scrub:1,
        scrollTrigger: {
          trigger: ".page4 .img",
          scroller: "body",
          start: "top 50%",
          end: "top -30%",
          //  markers: true,
          pin: true,
          scrub: true,
        }
      },"elem")

     var video = document.querySelector(".img video");

     video.addEventListener("mouseenter",function(){

        
     })

//      var menu = document.querySelectorAll(".menu")
// var expandmenu = document.querySelectorAll(" .mpart2")
// var icons = document.querySelectorAll(" .mpart1 h5")
// // console.log(expandmenu);






var menu = document.querySelectorAll(".menu")
var expandmenu = document.querySelectorAll(" .part2")
var icons = document.querySelectorAll(" .part1 h5")
// console.log(expandmenu);



menu.forEach(function(elem){
// console.log(expandmenu);
// var expandmenu = elem.querySelectorAll(" .part2")

// console.log(expandmenu);




// elem.addEventListener("click",function(){
//   expandmenu.forEach(function(e){
//     console.log("chala");
    
//     e.classList.remove("active")
//   })
// })
elem.addEventListener("click",function (e) {
   console.log(e.target);
  e.target.classList.toggle("show")
  var expand = elem.querySelector(".part2")
  // console.log(expand); 
  var icon = elem.querySelector("h5")
   console.log(icon);
  
  expandmenu.forEach(function(e){
    e.classList.remove("active")
  })
  icons.forEach(function(e){
    e.innerHTML=`<i class="ri-add-line"></i>`
  })
  // expand.classList.toggle("active");  
  if(e.target.classList.contains("show")){

  expand.classList.add("active");  
 icon.innerHTML=`<i class="ri-subtract-line"></i>`
  }
  else{
    expand.classList.remove("active")
                    
     icon.innerHTML=`<i class="ri-add-line"></i>`
  }

  
  
  
 
  // expandmenu.classList.remove("active")
 
  
})
})


var arr =[{
  num:1,
  image:"https://www.datocms-assets.com/106915/1717762517-royalcaribbean_testimonial.jpg?auto=format%2Ccompress&fit=max&h=500&w=500",
  para1:`“We involve this team in every new product.`,
  
  para2:`They excel at their work and care about`,
  para3:`
  every detail, making each project special`,
  
  para4:`and unique.”    `,
  para5:``,
  names:"Jesse Orrico",
  work:"Relevant Compliance / Product Owner"
  },{num:2,image:"https://www.datocms-assets.com/106915/1717762172-thehollisco_testimonial.jpg?auto=format%2Ccompress&fit=max&h=500&w=500",
      para1:`Referred by a friend, we appreciated this`,
      para2:`team's clear pricing and flexible staffing for`,
  
  
      para3:` major site launches, including Shopifyour`,
      para4:`
  development. They're now our go-to team in`,
  
  para5:``,
      names:"Oleksandra Zubrytska",
      work:"The Hollis Co. / Technical Project Manage"
      },{
          num:3,
          image:"https://www.datocms-assets.com/106915/1717981990-jesse-orrico_testimonial.jpg?auto=format%2Ccompress&fit=max&h=500&w=500",
          para1:`“This team excelled under pressure,`,
          para2:`
  delivering a standout UX/UI update to our`,
  para3:`
  booking section that redefined our`,
  para4:`collaboration and became a highlight for`,
  para5:`
  Royal Caribbean.”`,
          names:"Tina Rossell",
          work:"Royal Carribbean / Commodity & Marketing Manager"
          },{
              num:4,
              image:"https://www.datocms-assets.com/106915/1717775064-builtthings_testimonial.jpg?auto=format%2Ccompress&fit=max&h=500&w=500",
              para1:`“We've partnered with Better Off for years`,
              para2:`and are always impressed by their`,
              para3:`innovative brand development and precise`,
              para4:`execution. Their work during our recent`,
              para5:`
  rebrand matched our vision perfectly.”  `,
              names:"Andrew Watson",
              work:"Built Things / Owner"
              },{
                  num:5,
                  image:"https://www.datocms-assets.com/106915/1717983633-fran-mayo_testimonial.jpg?auto=format%2Ccompress&fit=max&h=500&w=500",
                  para1:`“We have a long history with this company`,
  para2:`and several major projects together. Their`,
  para3:`expertise consistently makes us look good.”`,
  para4:``,
  para5:``,
                  names:"Fran Mayo",
                  work:"Space Craft / Marketing Manager"
                  },]
  
  var clutter = document.querySelector(".bp2")
  var box = document.querySelectorAll(".bp31")  
  console.log(box);
  var container = ""
  box.forEach(function(e){
  
      e.addEventListener("click",function(dets){
          console.log(dets.target.id);
          console.log(arr[dets.target.id].para1);
          
  container=`  <div class="bp21">${+(dets.target.id)+1}-5</div>
  
  <div class="bp22">
  <div class="b"><p>${arr[dets.target.id].para1}</p></div>
  <div class="b"><p>${arr[dets.target.id].para2}</p></div>
  <div class="b"><p>${arr[dets.target.id].para3}</p></div>
  <div class="b"><p>${arr[dets.target.id].para4}</p></div>
  <div class="b"><p>${arr[dets.target.id].para5}</p></div>
              <div class="bp221"><div class="circle"><img src="${arr[dets.target.id].image}"></img></div><div><p >${arr[dets.target.id].names}</p>
          <p>${arr[dets.target.id].work}</p></div>
      </div>`
  
      clutter.innerHTML = container
  
      gsap.from(".circle",{
          scale:0,
          
          duration:1,
      })  
     
      
  
      gsap.from(".bp22 p",{
          y:"100%",
          duration:1,
          stagger:1,
     
          opacity:0,
          stagger:0.1,
  ease:"power1.out",
          })
  
  
  
      })
  
  
  
  })


  
 gsap.to(".page8 .anim1",{
  top:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:".page8",
    scroller:"body",
    start:"top 0%",
    // end:"top -50%",
    // markers:true,
  }
 })
  
 gsap.from(".page8 .anim2",{
  scale:0,
  delay:2,
  scrollTrigger:{
    trigger:".page8",
    scroller:"body",
    start:"top 50%",
    // end:"top -50%",
    // markers:true,
  }
  
 
 })
  
  
  
                
  
  