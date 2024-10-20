window.onload = function() {
    setTimeout(function() {

        let originalImage1 = document.getElementById("original-image1");
        let originalImage2 = document.getElementById("original-image2");
        let originalImage3 = document.getElementById("original-image3");


        let clonedImage2 = originalImage1.cloneNode(true);
        let clonedImage3 = originalImage1.cloneNode(true);


        clonedImage2.id = "cloned-image2"; 
        clonedImage3.id = "cloned-image3"; 

        document.querySelector(".container").appendChild(clonedImage2);
        document.querySelector(".container").appendChild(clonedImage3);


        originalImage1.classList.add("hidden");


        clonedImage2.style.top = "10px";      
        clonedImage2.style.right = "10px";    
        clonedImage2.style.left = "auto";     
        clonedImage2.style.transform = "none"; 

        
        clonedImage2.src = originalImage2.src; 


        clonedImage3.style.bottom = "10px";   
        clonedImage3.style.left = "10px";     
        clonedImage3.style.top = "auto";       
        clonedImage3.style.transform = "none"; 

       
        clonedImage3.src = originalImage3.src; 

    }, 4000); 
};
