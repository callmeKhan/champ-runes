module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "service-worker.js",
      // swSrc: "firebase-messaging-sw.js"
    },
    iconPaths: {
      favicon32: 'img/icons/firefox-general-32-32.png',
      favicon16: 'img/icons/firefox-general-16-16.png',
      appleTouchIcon: 'img/icons/Square150x150Logo.scale-200.png',
      msTileImage: 'img/icons/android-launchericon-144-144.png'
    }
  }
}
