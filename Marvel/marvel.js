const getData=async()=>{

    const apikey="a0d059dc15db0e5828a4fcf4a117016e" //public key
     const privkey="2d06c6f1b31e9041202b57fb6bbf9ff4f33079cd" //privatekey

      var query=document.getElementById("searchinput").value;
      var marvel=document.getElementById("marvel")

      marvel.innerHTML=null;

      var ts=Date.now()
      var hash = md5(ts+privkey+apikey);
      
          let res=await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${query}&limit=20`);

      let data=await res.json();

      let result=data.data.results;

      console.log(data.data.results)

      // for(el in result){
      //     console.log(result[el].id)
      // }

      //for of work like foreach
      for(el of result){
         
          let div=document.createElement("div");
          div.setAttribute("class", "cards_item")

          let name=document.createElement("h2");
          name.textContent=el.name;

          let desc=document.createElement("p");
          desc.textContent=el.description;

          let img=document.createElement("img");
          let url=`${el.thumbnail.path}/standard_xlarge.jpg`;   
          img.src=url;
          //console.log(url)

          div.append(img,name,desc)
          marvel.append(div)
      }
      
  }
