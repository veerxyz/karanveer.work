const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})

function files(index){
    var data = `
    ./male001.png
    ./male002.png
    ./male003.png
    ./male004.png
    ./male005.png
    ./male006.png
    ./male007.png
    ./male008.png
    ./male009.png
    ./male010.png
    ./male011.png
    ./male012.png
    ./male013.png
    ./male014.png
    ./male015.png
    ./male016.png
    ./male017.png
    ./male018.png
    ./male019.png
    ./male020.png
    ./male021.png
    ./male022.png
    ./male023.png
    ./male024.png
    ./male025.png
    ./male026.png
    ./male027.png
    ./male028.png
    ./male029.png
    ./male030.png
    ./male031.png
    ./male032.png
    ./male033.png
    ./male034.png
    ./male035.png
    ./male036.png
    ./male037.png
    ./male038.png
    ./male039.png
    ./male040.png
    ./male041.png
    ./male042.png
    ./male043.png
    ./male044.png
    ./male045.png
    ./male046.png
    ./male047.png
    ./male048.png
    ./male049.png
    ./male050.png
    ./male051.png
    ./male052.png
    ./male053.png
    ./male054.png
    ./male055.png
    ./male056.png
    ./male057.png
    ./male058.png
    ./male059.png
    ./male060.png
    ./male061.png
    ./male062.png
    ./male063.png
    ./male064.png
    ./male065.png
    ./male066.png
    ./male067.png
    ./male068.png
    ./male069.png
    ./male070.png
    ./male071.png
    ./male072.png
    ./male073.png
    ./male074.png
    ./male075.png
    ./male076.png
    ./male077.png
    ./male078.png
    ./male079.png
    ./male080.png
    ./male081.png
    ./male082.png
    ./male083.png
    ./male084.png
    ./male085.png
    ./male086.png
    ./male087.png
    ./male088.png
    ./male089.png
    ./male090.png
    ./male091.png
    ./male092.png
    ./male093.png
    ./male094.png
    ./male095.png
    ./male096.png
    ./male097.png
    ./male098.png
    ./male099.png
    ./male100.png
    ./male101.png
    ./male102.png
    ./male103.png
    ./male104.png
    ./male105.png
    ./male106.png
    ./male107.png
    ./male108.png
    ./male109.png
    ./male110.png
    ./male111.png
    ./male112.png
    ./male113.png
    ./male114.png
    ./male115.png
    ./male116.png
    ./male117.png
    ./male118.png
    ./male119.png
    ./male120.png
    ./male121.png
    ./male122.png
    ./male123.png
    ./male124.png
    ./male125.png
    ./male126.png
    ./male127.png
    ./male128.png
    ./male129.png
    ./male130.png
    ./male131.png
    ./male132.png
    ./male133.png
    ./male134.png
    ./male135.png
    ./male136.png
    ./male137.png
    ./male138.png
    ./male139.png
    ./male140.png
    ./male141.png
    ./male142.png
    ./male143.png
    ./male144.png
    ./male145.png
    ./male146.png
    ./male147.png
    ./male148.png
    ./male149.png
    ./male150.png
    ./male151.png
    ./male152.png
    ./male153.png
    ./male154.png
    ./male155.png
    ./male156.png
    ./male157.png
    ./male158.png
    ./male159.png
    ./male160.png
    ./male161.png
    ./male162.png
    ./male163.png
    ./male164.png
    ./male165.png
    ./male166.png
    ./male167.png
    ./male168.png
    ./male169.png
    ./male170.png
    ./male171.png
    ./male172.png
    ./male173.png
    ./male174.png
    ./male175.png
    ./male176.png
    ./male177.png
    ./male178.png
    ./male179.png
    ./male180.png
    ./male181.png
    ./male182.png
    ./male183.png
    ./male184.png
    ./male185.png
    ./male186.png
    ./male187.png
    ./male188.png
    ./male189.png
    ./male190.png
    ./male191.png
    ./male192.png
    ./male193.png
    ./male194.png
    ./male195.png
    ./male196.png
    ./male197.png
    ./male198.png
    ./male199.png
    ./male200.png
    ./male201.png
    ./male202.png
    ./male203.png
    ./male204.png
    ./male205.png
    ./male206.png
    ./male207.png
    ./male208.png
    ./male209.png
    ./male210.png
    ./male211.png
    ./male212.png
    ./male213.png
    ./male214.png
    ./male215.png
    ./male216.png
    ./male217.png
    ./male218.png
    ./male219.png
    ./male220.png
    ./male221.png
    ./male222.png
    ./male223.png
    ./male224.png
    ./male225.png
    ./male226.png
    ./male227.png
    ./male228.png
    ./male229.png
    ./male230.png
    ./male231.png
    ./male232.png
    ./male233.png
    ./male234.png
    ./male235.png
    ./male236.png
    ./male237.png
    ./male238.png
    ./male239.png
    ./male240.png
    ./male241.png
    ./male242.png
    ./male243.png
    ./male244.png
    ./male245.png
    ./male246.png
    ./male247.png
    ./male248.png
    ./male249.png
    ./male250.png
    ./male251.png
    ./male252.png
    ./male253.png
    ./male254.png
    ./male255.png
    ./male256.png
    ./male257.png
    ./male258.png
    ./male259.png
    ./male260.png
    ./male261.png
    ./male262.png
    ./male263.png
    ./male264.png
    ./male265.png
    ./male266.png
    ./male267.png
    ./male268.png
    ./male269.png
    ./male270.png
    ./male271.png
    ./male272.png
    ./male273.png
    ./male274.png
    ./male275.png
    ./male276.png
    ./male277.png
    ./male278.png
    ./male279.png
    ./male280.png
    ./male281.png
    ./male282.png
    ./male283.png
    ./male284.png
    ./male285.png
    ./male286.png
    ./male287.png
    ./male288.png
    ./male289.png
    ./male290.png
    ./male291.png
    ./male292.png
    ./male293.png
    ./male294.png
    ./male295.png
    ./male296.png
    ./male297.png
    ./male298.png
    ./male299.png
    ./male300.png
    `;
    return data.split("\n")[index];
}

const frameCount = 300; //since we have 300 images

const images = [];
const imageSeq={
    frame:1, //starting frame/image
};
for(let i = 0; i < frameCount; i++){
    const img = new Image();
    img.src = files(i);
    images.concat.push(img);
}
gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger:{
        scrub: 0.15,
        trigger: `#page>canvas`,
        start:`top top`,
        end: `600% top`,
        scroller:`#main`,
    },
    onUpdate: render,
});
images[1].onload = render;

function render(){
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx){
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ration = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

ScrollTrigger.create({
   trigger: "#page>canvas",
   pin: true,
   //markers:true,
   scroller: `#main`,
   start: `top top`,
   end:`600% top`, 
});
// gsap.to("#page>canvas",{
//     trigger: "#page>canvas",
//    pin: true,
//    //markers:true,
//    scroller: `#main`,
//    start: `top top`,
//    end:`600% top`, 
// })
gsap.to("#page1",{
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
}) 
gsap.to("#page3",{
    scrollTrigger:{
        trigger:`#page3`,
        start:`top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
}) 