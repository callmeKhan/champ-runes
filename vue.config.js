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
      swSrc: "public/service-worker.js"
    },
    iconPaths: {
      favicon32: 'public/img/icons/firefox-general-32-32.png',
      favicon16: 'public/img/icons/firefox-general-16-16.png',
      appleTouchIcon: 'public/img/icons/Square150x150Logo.scale-200.png',
      msTileImage: 'public/img/icons/android-launchericon-144-144.png'
    }
  }
}
