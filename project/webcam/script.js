const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error(`Oh no!`, err);;
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    setInterval(()=>{
        ctx.drawImage(video, 0,0, width, height);
        let pixels = ctx.getImageData(0,0, width, height); // takes out pixels
        pixels = redEffect(pixels); // mess with pixels
        ctx.putImageData(pixels, 0, 0); // puts pixels in red field
    }, 16)
}

function takePhoto() {
    // play sound
    snap.currentTime = 0;
    snap.play();
    
    //take canvas data out
    const data = canvas.toDataURL('image/jpeg');
    console.log(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','beautiful')
    link.innerHTML = `<img src="${data}" alt="beautiful">`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for(let i = 0; i < pixels.length; i += 4) {
        pixels[i] // r
        pixels[i + 1] // g
        pixels[i + 2] // b
    }

    return pixels
}


getVideo();

video.addEventListener('canplay', paintToCanvas);