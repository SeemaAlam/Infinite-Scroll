let cid="b68e338a77b8d7f";

let secret="a95153f209186f3aead171bc3fc1a4b86652dad9";

const file=document.getElementById("file");

const img=document.getElementById("img");

file.addEventListener('change',ev=>{

    const formdata=new FormData()
    formdata.append('image',ev.target.files[0]);

    fetch('https://api.imgur.com/3/image/',{
      method:"POST",
      headers:{
          Authorization: `Client-ID b68e338a77b8d7f`
      },
      body:formdata
    }).then(data=>data.json())
    .then(data=>{
        img.src=data.data.link
    })
})