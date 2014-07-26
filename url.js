    window.onload = function(){
        document.getElementById('submit').addEventListener('click',
        function(e){
            var src = document.getElementById("url").value;
            console.log(src);
            
            var width,height;
            var img = document.createElement("img");
            img.src = src;
            img.width = 500;
            img.height = 300;
    
             // This next line will just add it to the <body> tag
            document.body.appendChild(img);
        }
      );  
};


