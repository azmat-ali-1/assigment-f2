const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Do something with the data
//     console.log(data);
//     var arr=data;
//     console.log(arr[0]);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.log(error);
//   });
//   console.log(arr[0]);

  
const currency = async()=>{
    let  response = await fetch(url);
    let jsonData = await response.json();
    const a = JSON.stringify(jsonData);
    let arr = JSON.parse(a);
  
    console.log(arr[0]);
    const tab = document.getElementById("table");

    //function for adding table in html page
    function print(arr){
     for (let index = 0; index < arr.length; index++) {

      //html elements
      const tr = document.createElement("tr");
      const td1  = document.createElement("td");
      const td2  = document.createElement("td");
      const td3  = document.createElement("td");
      const td4  = document.createElement("td");
      const td5  = document.createElement("td");
      const td6  = document.createElement("td");
      const img = document.createElement("img");
      const span = document.createElement("span");
      const div = document.createElement("div");

      //set symbol image style
      img.style.width="40px";
      img.style.paddingTop="20px";
      img.src=arr[index].image;

      td2.innerText=arr[index].symbol;

      //adding some symbol and text with table content
      td3.innerText="$"+arr[index].current_price;
      td4.innerText=arr[index].total_volume;
      td5.innerText = arr[index].price_change_percentage_24h+"%";

      //cheacking if value nagative give red color
      if(td5.innerText.charAt(0)=='-'){
        td5.style.color="red";
      }
      else{
        td5.style.color="green";
      }
      td6.innerText="Mkt Cap : $"+arr[index].market_cap;


      // td1.append(img);
      // td1.innerText=arr[index].name;
      // td1.insertBefore(img,td1.childNodes[0]);

      span.innerText=arr[index].name;
      
      div.append(img);
      div.append(span);
      td1.append(div);
      td1.className="imageSection";
      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tr.append(td5);
      tr.append(td6);
      tab.append(tr);
     }
    }

    print(arr);


    //button
    const btn_mkt_cap = document.getElementById("btn-mkt-cap");
    const btn_srt_per = document.getElementById("btn-srt-per");

    btn_mkt_cap.addEventListener("click",mkt);
    btn_srt_per.addEventListener("click",per);

    //removing all content of table
    function removeChild(){
      while(tab.hasChildNodes()){
        tab.removeChild(tab.firstChild);
      }
    }

    //sort according to market cap
    function mkt(){
     removeChild();
      arr.sort((a,b)=>
      a.market_cap-b.market_cap
      );
      print(arr);
    }

    //sort according to percentage
    function per(){
     removeChild();
      arr.sort((a,b)=>
      a.price_change_percentage_24h-b.price_change_percentage_24h
      );
      print(arr);
    }

    //search box
    const searchBox = document.getElementById("searchBox");
    searchBox.onkeyup= function() {handleKeyPress(Event)};
    //onkey up function
    function handleKeyPress(event){
        let text = searchBox.value;
        if(text.length>=1){
          removeChild();
          
          let arrCopy= new Array();
          let j=0;
          for(let i =0;i<arr.length;i++){
            if(arr[i].name.toUpperCase().includes(text.toUpperCase())||arr[i].symbol.toUpperCase().includes(text.toUpperCase())){
              arrCopy[j++]=arr[i];
            }
          }
          print(arrCopy);
          console.log("jdhwgdwe");
        }
       else if(text.length==0){
        print(arr);
       }
        console.log(text);
    }
   
    return historyName1;

}
//start
currency();



   
