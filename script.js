let btn=document.querySelector("#btn");
let currMode="dark";

btn.addEventListener("click",()=>{
    if(currMode=="dark")
        {
            console.log("white");
            document.querySelector("body").style.backgroundColor="pink";
            currMode="white";
        }
    else
    {
        console.log("dark");
        document.querySelector("body").style.backgroundColor="black";
        currMode="dark";
    }
})