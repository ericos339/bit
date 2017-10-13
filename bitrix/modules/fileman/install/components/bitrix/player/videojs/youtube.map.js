{"version":3,"file":"youtube.min.js","sources":["youtube.js"],"names":["root","factory","exports","module","require","define","amd","videojs","Youtube","this","_isOnMobile","browser","IS_IOS","IS_ANDROID","Tech","getTech","extend","constructor","options","ready","call","setPoster","poster","setSrc","options_","source","setTimeout","el_","parentNode","className","isApiReady","initYTPlayer","apiReadyQueue","push","bind","dispose","ytPlayer","stopVideo","destroy","index","indexOf","splice","replace","removeChild","prototype","createEl","div","document","createElement","setAttribute","techId","divWrapper","appendChild","ytControls","divBlocker","onclick","pause","playerVars","controls","modestbranding","rel","showinfo","loop","autohide","disablekb","end","color","fs","hl","language","substr","list","url","listId","listType","playlist","playsinline","start","theme","customVars","Object","keys","forEach","key","activeVideoId","videoId","activeList","YT","Player","events","onReady","onPlayerReady","onPlaybackQualityChange","onPlayerPlaybackQualityChange","onPlaybackRateChange","onPlayerPlaybackRateChange","onStateChange","onPlayerStateChange","onError","onPlayerError","muted","mute","playbackRates","getAvailablePlaybackRates","length","featuresPlaybackRate","playerReady_","triggerReady","playOnReady","play","cueOnReady","cueVideoById_","trigger","e","state","data","lastState","errorNumber","PlayerState","ENDED","PLAYING","isSeeking","onSeeked","PAUSED","BUFFERING","player_","error","code","message","loadVideoById_","id","startSeconds","endEnd","loadVideoById","cueVideoById","src","poster_","parseUrl","checkHighResPoster","autoplay","isReady_","setAutoplay","val","setLoop","wasPausedBeforeSeek","playVideo","loadPlaylist","pauseVideo","paused","currentTime","getCurrentTime","setCurrentTime","seconds","timeBeforeSeek","seekTo","clearInterval","checkSeekedInPauseInterval","setInterval","seeking","seekable","createTimeRange","getDuration","playbackRate","getPlaybackRate","setPlaybackRate","suggestedRate","duration","currentSrc","ended","volume","getVolume","setVolume","percentAsDecimal","isMuted","setMuted","unMute","buffered","getVideoLoadedFraction","bufferedEnd","preload","load","reset","supportsFullScreen","uri","image","Image","onload","naturalHeight","naturalWidth","height","width","onerror","isSupported","canPlaySource","canPlayType","type","result","regex","match","regPlaylist","apiLoaded","i","loadScript","callback","loaded","tag","firstScriptTag","getElementsByTagName","insertBefore","onreadystatechange","readyState","injectCss","css","head","style","styleSheet","cssText","createTextNode","registerTech","registerComponent"],"mappings":"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"}