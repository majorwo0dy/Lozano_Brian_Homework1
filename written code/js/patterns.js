window.onload=function(){
    var theCanvas=document.getElementById("Canvas1");
    if (theCanvas && theCanvas.getContext){
        var ctx = theCanvas.getContext('2d');
        if(ctx) {
            //create a pattern from an image
            var patImg=new Image();


            //once the image loads, then we can actually use it


            patImg.onload=function(){





            };

            patImg.src="images/flowers.jpg";

            //create a pattern from another canvas

            var patCanvas=document.getElementById("patCan");
            var patCtx=patCanvas.getContext("2d");



            //Draw a red line in our pattern canvas

            patCtx.strokeStyle="red";
            patCtx.lineWidth=1;
            patCtx.beginPath();
            patCtx.moveTo(0,0);
            patCtx.lineTo(25,25);
            patCtx.stroke();



            //use pattern canvas as an outline on our larger canvas

            var strokePat= ctx.createPattern(patCanvas,"repeat");
            ctx.strokeStyle=strokePat;
            ctx.lineWidth=25;
            ctx.strokeRect(50,50,200,200);




        }
    }
}

