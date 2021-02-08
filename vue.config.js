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
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      swDest: "public/service-worker.js"
    },
    manifestOptions: {
      icons: [
        {
          src: "./img/icons/windows10/Square71x71Logo.scale-400.png",
          size: "284x284",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square71x71Logo.scale-200.png",
          size: "142x142",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square71x71Logo.scale-100.png",
          size: "71x71",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square71x71Logo.scale-150.png",
          size: "107x107",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square71x71Logo.scale-125.png",
          size: "89x89",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square150x150Logo.scale-400.png",
          size: "600x600",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square150x150Logo.scale-200.png",
          size: "300x300",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square150x150Logo.scale-100.png",
          size: "150x150",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square150x150Logo.scale-150.png",
          size: "225x225",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square150x150Logo.scale-125.png",
          size: "188x188",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Wide310x150Logo.scale-400.png",
          size: "1240x600",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Wide310x150Logo.scale-200.png",
          size: "620x300",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Wide310x150Logo.scale-100.png",
          size: "310x150",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Wide310x150Logo.scale-150.png",
          size: "465x225",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Wide310x150Logo.scale-125.png",
          size: "388x188",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square310x310Logo.scale-400.png",
          size: "1240x1240",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square310x310Logo.scale-200.png",
          size: "620x620",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square310x310Logo.scale-100.png",
          size: "310x310",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square310x310Logo.scale-150.png",
          size: "465x465",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square310x310Logo.scale-125.png",
          size: "388x388",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.scale-400.png",
          size: "176x176",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.scale-200.png",
          size: "88x88",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.scale-100.png",
          size: "44x44",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.scale-150.png",
          size: "66x66",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.scale-125.png",
          size: "55x55",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-256.png",
          size: "256x256",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-48.png",
          size: "48x48",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-32.png",
          size: "32x32",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-24.png",
          size: "24x24",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-16.png",
          size: "16x16",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-256_altform-unplated.png",
          size: "256x256",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-48_altform-unplated.png",
          size: "48x48",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-32_altform-unplated.png",
          size: "32x32",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-24_altform-unplated.png",
          size: "24x24",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/Square44x44Logo.targetsize-16_altform-unplated.png",
          size: "16x16",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/StoreLogo.scale-400.png",
          size: "200x200",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/StoreLogo.scale-200.png",
          size: "100x100",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/StoreLogo.scale-150.png",
          size: "75x75",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/StoreLogo.scale-125.png",
          size: "63x63",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/StoreLogo.scale-100.png",
          size: "50x50",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/StoreLogo.png",
          size: "50x50",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/SplashScreen.scale-400.png",
          size: "2480x1200",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/SplashScreen.scale-200.png",
          size: "1240x600",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/SplashScreen.scale-150.png",
          size: "930x450",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/SplashScreen.scale-125.png",
          size: "775x375",
          type: "image/png"
        },
        {
          src: "./img/icons/windows10/SplashScreen.scale-100.png",
          size: "620x300",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-smallsquare-24-24.png",
          size: "24x24",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-smallsquare-30-30.png",
          size: "30x30",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-smallsquare-42-42.png",
          size: "42x42",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-smallsquare-54-54.png",
          size: "54x54",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-splashscreen-1116-540.png",
          size: "1116x540",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-splashscreen-868-420.png",
          size: "868x420",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-splashscreen-620-300.png",
          size: "620x300",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-squarelogo-270-270.png",
          size: "270x270",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-squarelogo-210-210.png",
          size: "210x210",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-squarelogo-150-150.png",
          size: "150x150",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-squarelogo-120-120.png",
          size: "120x120",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-storelogo-90-90.png",
          size: "90x90",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-storelogo-70-70.png",
          size: "70x70",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windows-storelogo-50-50.png",
          size: "50x50",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-appicon-106-106.png",
          size: "106x106",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-appicon-62-62.png",
          size: "62x62",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-appicon-44-44.png",
          size: "44x44",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-mediumtile-360-360.png",
          size: "360x360",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-mediumtile-210-210.png",
          size: "210x210",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-mediumtile-150-150.png",
          size: "150x150",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-smalltile-170-170.png",
          size: "170x170",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-smalltile-99-99.png",
          size: "99x99",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-smalltile-71-71.png",
          size: "71x71",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-storelogo-120-120.png",
          size: "120x120",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-storelogo-70-70.png",
          size: "70x70",
          type: "image/png"
        },
        {
          src: "./img/icons/windows/windowsphone-storelogo-50-50.png",
          size: "50x50",
          type: "image/png"
        },
        {
          src: "./img/icons/msteams/msteams-192-192.png",
          size: "192x192",
          type: "image/png"
        },
        {
          src: "./img/icons/msteams/msteams-silhouette-32-32.png",
          size: "32x32",
          type: "image/png"
        },
        {
          src: "./img/icons/android/android-launchericon-512-512.png",
          size: "512x512",
          type: "image/png"
        },
        {
          src: "./img/icons/android/android-launchericon-192-192.png",
          size: "192x192",
          type: "image/png"
        },
        {
          src: "./img/icons/android/android-launchericon-144-144.png",
          size: "144x144",
          type: "image/png"
        },
        {
          src: "./img/icons/android/android-launchericon-96-96.png",
          size: "96x96",
          type: "image/png"
        },
        {
          src: "./img/icons/android/android-launchericon-72-72.png",
          size: "72x72",
          type: "image/png"
        },
        {
          src: "./img/icons/android/android-launchericon-48-48.png",
          size: "48x48",
          type: "image/png"
        },
        {
          src: "./img/icons/chrome/chrome-extensionmanagementpage-48-48.png",
          size: "48x48",
          type: "image/png"
        },
        {
          src: "./img/icons/chrome/chrome-favicon-16-16.png",
          size: "16x16",
          type: "image/png"
        },
        {
          src: "./img/icons/chrome/chrome-installprocess-128-128.png",
          size: "128x128",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-marketplace-512-512.png",
          size: "512x512",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-marketplace-128-128.png",
          size: "128x128",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-general-256-256.png",
          size: "256x256",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-general-128-128.png",
          size: "128x128",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-general-90-90.png",
          size: "90x90",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-general-64-64.png",
          size: "64x64",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-general-48-48.png",
          size: "48x48",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-general-32-32.png",
          size: "32x32",
          type: "image/png"
        },
        {
          src: "./img/icons/firefox/firefox-general-16-16.png",
          size: "16x16",
          type: "image/png"
        }
      ]
    }
  }
}
