var conf = {
  key: '<YOUR PLAYER KEY>',
  source: {
    dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
    hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    progressive: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
    poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
  },
  advertising: {
    client: 'vpaid',
    schedule: {
      'pre-roll-ad': {
        offset: 'pre',
        tag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/32573358/skippable_ad_unit&' +
        'impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]' +
        '&description_url=[description_url]&correlator=[timestamp]'
      }
    }
  }
};