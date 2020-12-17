const videoTag = document.querySelector('video')

function checkLetter(userKey) {
    const log = () => {
        console.log(`Current Rate: ${videoTag.playbackRate.toFixed(2)}`)
    }
    switch(userKey) {
        case "d":
            videoTag.playbackRate += 0.1
            log()
            break;
            case "s":
                videoTag.playbackRate -=0.1
                log()
                break;
                case "r":
                    videoTag.playbackRate = 1 
                    log()
                    break;
                default:
                    console.warn('Error Error Will Robinson!!')
                    
                }
                updateSpeed() // updating the speed tag to the dom 
               
            } // if you making a chrome extension you would be on whatever dom it is on 
       
            //create buttons 
function createButtons() {
    // getting buttons setup 
    const speedDownButton = document.createElement("button");
    const speedUpButton = document.createElement("button");
    const videoContainer = document.querySelector('.video-container');
    const myVidControls = document.createElement('div');
    const spanCounter = document.createElement('span');

    // setting up attributes for span tag 
    spanCounter.id = 'current-playback-speed'; // setting the id for and tofixed sets the decimal places 
    const rateTextNode = document.createTextNode(videoTag.playbackRate.toFixed(2)); // creating text node for us to show playback speed 
    spanCounter.appendChild(rateTextNode) // appending the rate to the node 
    // creating speedUp or speedDown buttons 
    const cssTemplate = `
      border: 0px none;
      padding: 10px;
      margin: 10px;
      color: white;
      background-color: #00cb79;
      border-radius: 4px;
      font-weight: 900;
      cursor: pointer;
       `;

    let speedBtnArr = [speedDownButton, speedUpButton]
    speedBtnArr.forEach(button => {
        
    let currentTextNode
    button.style = cssTemplate

        if(button === speedUpButton) {
            currentTextNode = document.createTextNode('speed-up')
            button.id = 'speed-up'
        } else {
            currentTextNode = document.createTextNode('speed-down')
            button.id = 'speed-down'
        }

        button.appendChild(currentTextNode)
        myVidControls.appendChild(button)
// add event listener to change speed 
        button.addEventListener('click', e => {
            if(e.target.id === 'speed-up'){
                videoTag.playbackRate += 0.1
            } else {
                videoTag.playbackRate -= 0.1
            }
    // updating speed to the dom 
            updateSpeed()
        })
    })

    myVidControls.appendChild(spanCounter)
    videoContainer.appendChild(myVidControls)

    myVidControls.style.position = 'fixed'
    myVidControls.style.top = '70px'
    myVidControls.style.left = '10px'

}

function updateSpeed() {
    document.getElementById('current-playback-speed').innerHTML = videoTag.playbackRate.toFixed(2)
}

if (!videoTag) {
    console.warn('No video for speed controller')
} else {
    document.addEventListener('keydown', e => {
    checkLetter(e.key)
    })
    createButtons()
}
