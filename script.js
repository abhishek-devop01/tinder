// data
var users = [
     {
     profilePic: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     displayPic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     pendingMessage: "3",
     location: "Assam, India",
     name: "Nisha",
     age:"21",
     interest: ["music","traveling","reading"],
     bio: "I love to travel and explore new places. I am a fun loving person and love to meet new people.",
     isFriend: "null"
},
{
     profilePic: "https://images.unsplash.com/photo-1730990393853-c2ade034dc13?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     displayPic: "https://images.unsplash.com/photo-1710935503362-2f0b2719e76c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     pendingMessage: "4",
     location: "Delhi, India",
     name: "Anjali",
     age:"22",
     interest: ["Gaming","Coding","reading"],
     bio: "I love to play games and code. I am a fun loving person and love to meet new people.",
     isFriend: "null"
},
{
     profilePic: "https://plus.unsplash.com/premium_photo-1669725348740-00c1dce30650?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     displayPic: "https://plus.unsplash.com/premium_photo-1669725348342-0f7916e4e46e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     pendingMessage: "2",
     location: "Goa, India",
     name: "Abhilasa",
     age:"23",
     interest: ["music","traveling","exploring"],
     bio: "I love to travel and explore new places. I am a fun loving person and love to meet new people.",   
     isFriend: "null"
},
{
     profilePic: "https://images.unsplash.com/photo-1742038107091-9a7e1f01b42c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     displayPic: "https://images.unsplash.com/photo-1738417694378-b126c5861ded?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     pendingMessage: "5",
     location: "Himachal, India",
     name: "Pratima",
     age:"20",
     interest: ["music","painting","reading"],
     bio: "I love to paint and listen to music. I am a fun loving person and love to meet new people.",
     isFriend: "null"
},
{
     profilePic: "https://images.unsplash.com/photo-1733682653893-aa51660bfa8b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     displayPic: "https://images.unsplash.com/photo-1741802856123-04d9f001270f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     pendingMessage: "2",
     location: "Dhemaji, Assam",
     name: "Shibani",
     age:"24",
     interest: ["Art","Traveling","reading"],
     bio: "I love to travel and explore new places. I am a fun loving person and love to meet new people.",
     isFriend: "null"
     
},

{
     profilePic: "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     displayPic: "https://plus.unsplash.com/premium_photo-1668896123841-2ddfc6c6e8da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     pendingMessage: "3",
     location: "Nagaland, India",
     name: "Lipika",
     age:"20",
     interest: ["music","reading"],
     bio: "I love to travel and explore new places. I am a fun loving person and love to meet new people.",
     isFriend: "null"
},
{
     profilePic: "https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     displayPic: "https://plus.unsplash.com/premium_photo-1674068279865-4352df30c9e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     pendingMessage: "1",
     location: "Rajasthan, India",
     name: "Sneha",
     age:"21",
     interest: ["dancing","traveling","reading"],
     bio: "I love to travel and explore new places. I am a fun loving person and love to meet new people.",
     isFriend: "null"
}]

function select(e){
     return document.querySelector(e);
}


var curr = 0;

(function setIntial(){
     select(".maincard img").src = users[curr].displayPic;
     select(".incomingcard img").src = users[curr+1].displayPic;
     select(".prflimg img ").src = users[curr].profilePic;
     select(".badge h5").textContent = users[curr].pendingMessage;
     select(".location h3").textContent = users[curr].location;
     select(".name h1:nth-child(1)").textContent = users[curr].name;
     select(".name h1:nth-child(2)").textContent = users[curr].age;

     var clutter = "";

     users[curr].interest.forEach(function(interest) {
          clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3 ">
          <i class="ri-music-2-fill"></i>
          <h3 class="text-sm tracking-tighter capitalize">${interest}</h3>
     </div>`;
     })
     select(".tags").innerHTML = clutter;
     select(".bio p").textContent = users[curr].bio;
     // select(".bio h3").textContent = users[curr].name;
     curr=2;

})();