function ad_skipped() {
    let ad = document.getElementsByClassName('ad-showing').length > 0
    let video = document.getElementsByClassName('video-stream html5-main-video')[0]
    if (ad && video) {
       video.playbackRate = 9.5
    }

    let skipButton = document.getElementsByClassName('ytp-ad-skip-button-modern ytp-button')[0]

    if (skipButton && !skipButton.clicked) {
        skipButton.click()
        skipButton.clicked = true
    } else if (!ad) {
        if (skipButton) {
            skipButton.clicked = false
        }
    }
}

setInterval(ad_skipped, 500)
