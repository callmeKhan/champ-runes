import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueFbCustomerChat from 'vue-fb-customer-chat'
Vue.use(VueI18n)
Vue.use(VueFbCustomerChat, {
  page_id: "479073292905392", //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'vi_VN', // default 'en_US'
})
function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
