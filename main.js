function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AaZRhC__8/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
        
            random_number_r = Math.floor(Math.random() * 255) + 1;
            random_number_g = Math.floor(Math.random() * 255) + 1;
            random_number_b = Math.floor(Math.random() * 255) + 1;
        
            document.getElementById("result_label").innerHTML = 'I CAN HEAR - ' + results[0].label;
            document.getElementById("result_confidence").innerHTML = 'ACCURACY - ' + (results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
            document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
            img = document.getElementById('animal1');
            img1= document.getElementById('animal2');
            img2= document.getElementById('animal3');
            img3= document.getElementById('animal4');
        
            if(results[0].label == "Mooing")
            {
                img.src = 'cow.gif.gif';
                img1.src = 'horse.png.png';
                img2.src = 'cat.png.png';
                img3.src = 'gorilla.png.png';
        
            }
            else if(results[0].label == "Neighing"){
                img.src = 'cow.png.png';
                img1.src = 'horse.gif.gif';
                img2.src = 'cat.png.png';
                img3.src = 'gorilla.png.png';
        
            }
        
            else if(results[0].label == "Meowing"){
                img.src = 'cow.png.png';
                img1.src = 'horse.png.png';
                img2.src = 'cat.gif.gif';
                img3.src = 'gorilla.png.png';
        
            }
        
            else {
                img.src =  'cow.png.png';
                img1.src = 'horse.png.png';
                img2.src = 'cat.png.png';
                img3.src = 'gorilla.gif.gif';
        
            }
        }
        
        }


