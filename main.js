Webcam.set ({
 width:350,
 height:300,
 image_format : 'png',
 png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

console.log('ml5 version:', ml5.version);

function take_snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = '<img id="image" src="' +data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',madelLoaded);

function modelloaded()
{
    console.log("modelloaded");
}


function check()
{
   img = document.getElementById("image");
   classifier.classify(img,got_result);
}

function got_result(error,results)
{
    if(error){
      console.error(error);
    }

    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
        
    }

}