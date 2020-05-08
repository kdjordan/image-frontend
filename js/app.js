(() => {
    let url = document.getElementById('url')
    let button = document.getElementById('btn')
    let fileUp = document.getElementById('fileUp')

    fileUp.addEventListener('click', () => {
        sendFile(url.value)
    })

    button.addEventListener('click', () => {
        sendFilterRequest(url.value)
    })

    url.addEventListener('keyup', () => {
        if (event.keyCode === 13) {
            sendFilterRequest(url.value)
        }
    })

    function sendFilterRequest(urlValue) {
        window.open('http://udacity-image-filter-dev.us-east-2.elasticbeanstalk.com/filteredimage?image_url=' + urlValue)
    }

    function sendFile() {
        console.log(fileUp)
    }

})();