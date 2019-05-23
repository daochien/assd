import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'http://leader.vnedutech.vn/js/banner.js' },
      { src: 'http://leader.vnedutech.vn/js/dvtc.js' },
      { src: 'http://leader.vnedutech.vn/js/events.js' },
      { src: 'http://leader.vnedutech.vn/js/exam.js' },
      { src: 'http://leader.vnedutech.vn/js/menu.js' },
      { src: 'http://leader.vnedutech.vn/js/news.js' },
      { src: 'http://leader.vnedutech.vn/js/notify.js' },
      { src: 'http://leader.vnedutech.vn/js/register.js' },
      { src: 'http://leader.vnedutech.vn/js/timeline.js' },
      { src: 'http://leader.vnedutech.vn/js/top_week.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-carousel.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-device-detect',
      {defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'}
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
