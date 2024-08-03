AOS.init();

const eventDate = new Date('Jul 01, 2025 19:00:00');
const eventTimeStamp =  eventDate.getTime();

const countTime = setInterval(function(){
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const distance = eventTimeStamp - nowTimeStamp;

    const daysToEvent = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursToEvent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesToEvent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsToEvent = Math.floor((distance % (1000 * 60) / 1000));

    document.getElementById('contador').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    if(distance < 0){
        clearInterval(countTime);
        document.getElementById('contador').innerHTML = `O evento expirou`;
    }

},1000);