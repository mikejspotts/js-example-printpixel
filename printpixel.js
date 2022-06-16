// This displays all three color values
function printPixel(nameImage,xpos,ypos){
    var img   = new SimpleImage(nameImage);
    var red   = img.getRed(xpos,ypos);
    var blue  = img.getBlue(xpos,ypos);
    var green = img.getGreen(xpos,ypos);
    print("red is " + red);
    print("blue is "+ blue);
    print("green is " + green);
    print(" ");
}

printPixel("drewgreen.png",10,10);
printPixel("drewgreen.png",250,500);