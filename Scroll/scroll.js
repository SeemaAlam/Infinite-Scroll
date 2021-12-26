
const container=document.getElementById("container");

let limit=25;

let pagecount=1;

let postcount=1;


const getData= async()=>{

    let res= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}_page=${pagecount}`);

    data= await res.json();

    //console.log(data)
   
    data.map((el,index)=>{
       
       const htmldata=`
       <div class="post">
          <p class="id">${postcount++}</p>
          <h2 class="title">${el.title}</h2>
          <p class="info">${el.body}</p>
      </div>
       ` 
       container.insertAdjacentHTML('beforeend',htmldata);


    })


}

getData()


const showData=()=>{
   setTimeout(()=>{
     pagecount++;
     getData();
   },500)
}


window.addEventListener('scroll',()=>{

  const {scrollHeight, scrollTop, clientHeight}= document.documentElement;

  if(scrollTop+clientHeight>=scrollHeight){
     alert("I am at bottom")
      showData()
  }


})
