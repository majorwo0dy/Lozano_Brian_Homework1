window.onload=function(){
    var theCanvas=document.getElementById("Canvas1");
    if (theCanvas && theCanvas.getContext){
        var ctx = theCanvas.getContext('2d');
        if(ctx) {

            ctx.save();
            ctx.fillStyle="blue";
            ctx.fillRect(0,0,100,50);

            // translate the orgin to the middle of the canvas
            ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2);

            ctx.fillRect(-50,-25,100,50);
            ctx.restore();

            ctx.fillStyle="red";
            ctx.fillRect(0,0,100,50);


            }
    }

}
