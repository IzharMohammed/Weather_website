const temperature = document.querySelector(".weather1")
const locationfield = document.querySelector(".weather2 p")
const datefield = document.querySelector(".weather2 span")
const emojifield = document.querySelector(".weather3 img")
const weatherfield = document.querySelector(".weather3 span")
const form = document.querySelector('form')
const searchfield=document.querySelector('.searchfield')


// let target = "delhi"
const fetchdata=async(target)=>{
    const url=`https:api.weatherapi.com/v1/current.json?key=24fa84a111804c3492d121322240501&q=${target}`
 const response =await fetch(url)
 const data =await response.json()
 console.log(data);

const{
    current :{ temp_c  ,   condition : { text,icon  }  },
    location : {name,localtime}
}=data
updateDom(name,temp_c,localtime,text,icon)
}
fetchdata("kadapa")

function updateDom(name,temp,time,text,emoji){

const exactDate=time.split(" ")[0]
const exactTime=time.split(" ")[1]


const exactday=getDay(new Date(exactDate).getDay())
emojifield.src=emoji 
datefield.innerHTML=`Date -  ${exactDate}      Day -   ${exactday} Time -   ${exactTime} `
temperature.innerHTML=temp
locationfield.innerHTML=name

weatherfield.innerHTML=text

}

form.addEventListener('submit', e=>{
    e.preventDefault()
   fetchdata (searchfield.value)
})

function getDay(num) {
    switch (num) {
        case 0:
            return "Sunday";
      
          case 1:
            return "Monday";
      
          case 2:
            return "Tuesday";
      
          case 3:
            return "Wednesday";
      
          case 4:
            return "Thursday";
      
          case 5:
            return "Friday";
      
          case 6:
            return "Saturday";
      
          default:
            return "Don't Know";
        }
}