// const apiKey = 'N7uUoKzIXiwqjZAV4Glv2XK9TuNTe6gb';


// //GET
// const query = 'ryan gosling';
// const limit = 5;

// fetch('https://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(query)  +'&api_key=' + apiKey + '&limit='+ limit)
//   .then(response => response.json())
//   .then(data => {
//     console.log("success got data", data);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });

// //POST
// const username = 'eladlaster';
// const sourceImageUrl = 'http://www.mysite.com/myfile.mp4';

// fetch('https://upload.giphy.com/v1/gifs', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     api_key: apiKey,
//     username: username,
//     source_image_url: sourceImageUrl,
//   }),
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('success got data', data);
//   })
//   .catch(error => {
//     console.error('Error uploading GIF:', error);
//   });
    const input = document.getElementById("myTxt");
    const button = document.getElementById("myBtn");
    const container = document.getElementById("gif-container");

button.addEventListener("click",()=> {

    container.innerHTML ="";

    const query = input.value;  
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=1`)
      
      .then(response => {
        const data = response.data;
        
        if (data.data.length > 0) {
          const embedUrl = data.data[0].embed_url;
          const iframe = document.createElement("iframe");
          iframe.src = embedUrl;
          iframe.frameBorder = "0";

          container.appendChild(iframe);
        } 
        else
          container.innerText = "No GIFs found.";
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
})

input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        button.click();
        return;
    }
})