window.onload=function(){
    var theCanvas=document.getElementById("Canvas1");
    if (theCanvas && theCanvas.getContext){
        var ctx = theCanvas.getContext('2d');
        if(ctx) {

/*            //Draw the image
            var srcImg=document.getElementById("img1");

            //ctx.drawImage(srcImg,0,0);

            //create a circle clipping path

            ctx.beginPath();
            ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,150,0, 2*Math.PI);
            ctx.clip();

            ctx.drawImage(srcImg,0,0);


            // create a path shape clipping mask
            ctx.beginPath()
            ctx.moveTo(105,200);
            ctx.lineTo(250,40);
            ctx.lineTo(525,50);
            ctx.lineTo(475,285);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(srcImg,0,0);

*/

            // create variable for our x,y, radius and offset
            var x =theCanvas.width/2;
            var y =theCanvas.height/2;
            var radius=75;
            var offset=50;

            ctx.save();

            ctx.beginPath();
            ctx.arc(x,y,radius, 0,2*Math.PI,false);
            ctx.clip();

            //draw a blue circle inside of the clipping mask
            ctx.beginPath();
            ctx.arc(x-offset,y-offset,radius,0,2*Math.PI,false);
            ctx.fillStyle="blue";
            ctx.fill();

            //draw a yellow circle inside of the clipping mask
            ctx.beginPath();
            ctx.arc(x+offset,y ,radius,0,2*Math.PI,false);
            ctx.fillStyle="yellow";
            ctx.fill();

            //draw a red circle inside of the clipping mask
            ctx.beginPath();
            ctx.arc(x,y+offset ,radius,0,2*Math.PI,false);
            ctx.fillStyle="red";
            ctx.fill();

            ctx.restore();

            //stroke the circle

            ctx.beginPath();
            ctx.arc(x,y,radius,0,2*Math.PI,false);
            ctx.lineWidth-10;
            ctx.strokeStyle="blue";
            ctx.stroke();






        }
    }

}