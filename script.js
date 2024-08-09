console.log("hi");
const imagebox = document.getElementById("images");
const streakbox = document.getElementById("streak");
const s = Number(localStorage.getItem("streak")) ?? 0
streakbox.textContent = "streak :" + s;
// create image 1
const img1 = document.createElement("img");
const id = Math.floor((Math.random() * 6 +1 ) * 10000)
img1.src = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;

img1.onclick = () => {
    localStorage.setItem("streak", s + 1)
  alert("you won :)");
  location.reload();
};

// create image 2
const img2 = document.createElement("img");

img2.src = "https://thispersondoesnotexist.com/";



img2.onclick = () => {
    localStorage.setItem("streak", 0 ) 
  alert("you lost :(");
  location.reload();
};


if (Math.random() > 0.5) {
    imagebox.append(img1);
    imagebox.append(img2);
}

else {
    imagebox.append(img2);
    imagebox.append(img1);
}

