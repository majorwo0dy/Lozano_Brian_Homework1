/*
     Name:Brian Lozano
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
window.onload= function() {

    var theCanvas = document.getElementById("Canvas1");
    // theCanvas.width= 150;
    //theCanvas.height=150;
    if (theCanvas) {
        // get Context
        var ctx = theCanvas.getContext("2d");

        if (ctx) {
            //draw Here
            ctx.strokeStyle = "black";
            ctx.fillStyle = "#81d4fa";
            ctx.lineWidth = 10;
            //Draw the rectangle
            ctx.strokeRect(4, 4, 50, 100);
            ctx.fillRect(4, 4, 50, 100);


            /*******************************************
             PART 2

             Draw a circle starting at point (50 ,50)
             That has a radius of 20 px
             Set the color of the circle to a shade of red and set the alpha to .5
             Set the stroke color to black and use a radius of 30px for this circle.

             Reminder - set the style first then draw.
             Use the arc method
             ********************************************/


//Draw Circle here

            var theCanvas = document.getElementById("Canvas2");
            if (theCanvas && theCanvas.getContext) {
                var ctx = theCanvas.getContext('2d');
                if (ctx) {
                    ctx.strokeStyle = "black";
                    ctx.fillStyle = "#FF2800", .5;
                    ctx.lineWidth = 30;

                    var degrees = 360;
                    var radians = (degrees / 180) * Math.PI;

                    ctx.beginPath();
                    ctx.arc(50, 50, 20, 0, radians);
                    ctx.fill();
                    ctx.stroke();


                    /*******************************************
                     PART 3

                     Practice using Path drawing.
                     Create a 5-point star shaped pattern using the lineTo method.
                     Begin this shape at (100, 100)

                     Height and width and color are up to you.

                     ********************************************/


//Draw Star here

                    var theCanvas = document.getElementById("Canvas3");
                    if (theCanvas && theCanvas.getContext) {
                        var ctx = theCanvas.getContext('2d');
                        if (ctx) {
                            ctx.strokeStyle = "black";
                            ctx.fillStyle = "yellow";
                            ctx.lineWidth = 5;

                            //Draw an open path
                            ctx.moveTo(100, 100);
                            ctx.lineTo(100, 0);
                            ctx.lineTo(150, 100);
                            ctx.lineTo(175, 150);
                            ctx.lineTo(150, 100);
                            ctx.lineTo(170, 150);
                            ctx.lineTo(240, 100);
                            ctx.lineTo(30, 100);
                            ctx.lineTo(30, 100);
                            ctx.lineTo(130, 150);
                            ctx.lineTo(130, 150);
                            ctx.lineTo(70, 200);
                            ctx.lineTo(70, 200);
                            ctx.lineTo(70, 200);
                            ctx.lineTo(170, 200);
                            ctx.lineTo(260, 200);






                            //ctx.lineTo(25,175);
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();


                            /*******************************************
                             PART 4

                             Practice drawing with Bezier curves.
                             Try drawing the top to an umbrella.
                             This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

                             Position, height, width and color are your choice.
                             Do not overlap any other object.

                             ********************************************/

//Draw Umbrella top here

                            var theCanvas = document.getElementById("Canvas4");
                            if (theCanvas && theCanvas.getContext) {
                                var ctx = theCanvas.getContext('2d');
                                if (ctx) {

                                    ctx.strokeStyle = "blue";
                                    ctx.lineWidth = 5;

                                    //stroke a simple Bezier curve
                                    ctx.beginPath();
                                    ctx.moveTo(50, 200);

                                    //Bezier CurveTo(cx1 ,cy1 ,cx2 ,cy2 x,y)

                                    ctx.bezierCurveTo(100, 0, 300, 50, 300, 210);
                                    ctx.stroke();
                                    ctx.bezierCurveTo(50, 160, 50, 200, 70, 200);
                                    ctx.stroke();
                                    /*******************************************
                                     PART 5

                                     Practice using text.
                                     Draw text into your canvas.  It can said whatever you would like in any color.

                                     ********************************************/

//Draw text here

                                    var theCanvas = document.getElementById("Canvas5");
                                    if (theCanvas && theCanvas.getContext) {
                                        var ctx = theCanvas.getContext('2d');
                                        if (ctx) {
                                            var theString = "Hello world";


                                            //stroke and Fill Text
                                            ctx.font = "32pt verdana";
                                            ctx.fillStyle = "blue";
                                            ctx.textBaseline = "middle";
                                            ctx.strokeStyle = "rgba(0,455,0,.5)";
                                            ctx.fillText(theString, 20, 160);
                                            ctx.strokeText(theString, 20, 160);


                                            /*******************************************
                                             PART 6

                                             Pixel manipulation.
                                             Draw the image logo.png into the canvas in the following 3 ways.
                                             1. The image exactly as it is.
                                             2. Shrink the image by 50%
                                             3. Slice a section of the logo out and draw that onto the canvas.

                                             Reminder to use the drawImage method for all 3 of the ways.

                                             ********************************************/

//Draw images here

                                            var theCanvas = document.getElementById("Canvas6");
                                            if (theCanvas && theCanvas.getContext) {
                                                var ctx = theCanvas.getContext('2d');
                                                if (ctx) {
                                                    // create a variable to hold our image
                                                    var srcImg = document.getElementById('img1');

                                                    //draw an image directly onto the canvas
                                                    ctx.drawImage(srcImg, 0, 0);

                                                    //draw a scaled down image
                                                    //drawimage(srcImg, dx,dy,dw,dh)
                                                    ctx.drawImage(srcImg, 50, 50, 50, 50);

                                                    // draw a slice image
                                                    //drawImage(srcImg,sx,sy,sw,sh,dx,dy,dw,dh)

                                                    ctx.drawImage(srcImg, 285, 40, 95, 140, 50, 50, 190, 260);


                                                    /*******************************************
                                                     PART 7

                                                     Putting it all together.

                                                     Using a combination of all the methods.
                                                     Create a complex scene.
                                                     You must use at least 3 different methods.

                                                     ********************************************/

// Draw scene here
                                                    var theCanvas = document.getElementById("Canvas7");
                                                    if (theCanvas && theCanvas.getContext) {
                                                        var ctx = theCanvas.getContext('2d');
                                                        if (ctx) {
                                                            ctx.strokeStyle = "blue";
                                                            ctx.fillStyle = "rgba(0,455,0,.5)";
                                                            ctx.lineWidth = 5;

                                                            //Draw an open path
                                                            ctx.moveTo(100, 120);

                                                            ctx.lineTo(100, 30);
                                                            ctx.lineTo(0, 40);
                                                            ctx.lineTo(0, 0);
                                                            ctx.lineTo(0, 0);
                                                            ctx.lineTo(0, 0);
                                                            ctx.lineTo(0, 0);
                                                            ctx.lineTo(0, 0);

                                                            ctx.restore();
                                                            ctx.closePath();
                                                            ctx.fill();
                                                            ctx.stroke();
                                                            ctx.bezierCurveTo(-200, 300, 300, 300, 500, 0);
                                                            ctx.stroke();

                                                            var theString = "Hooked Fishing Co";


                                                            //stroke and Fill Text
                                                            ctx.font = "32pt verdana";
                                                            ctx.fillStyle = "blue";
                                                            ctx.textBaseline = "middle";
                                                            ctx.strokeStyle = "rgba(0,455,0,.5)";
                                                            ctx.fillText(theString, 20, 160);
                                                            ctx.strokeText(theString, 20, 160);

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
