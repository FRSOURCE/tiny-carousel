# Usage

Let's say this is how you bootstrap [**Vue I18n**](https://github.com/kazupon/vue-i18n) in your application:

```typescript
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
      hello: 'Hello world!'
  }
});

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app');
```

In this case, to integrate our library you only need to follow two simple steps:

- Import the **Vue I18n Phrase In-Context Editor** library.
- Create new **Vue I18n Phrase In-Context Editor** instance, passing **Vue I18n** instance as a first argument and *Phrase Config* as a second.

Sounds easy enough, right? Let's have a look at an updated example:

```typescript{3,15-18}
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueI18nPhraseInContextEditor from 'vue-i18n-phrase-in-context-editor';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
      hello: 'Hello world!'
  }
});

new VueI18nPhraseInContextEditor(i18n, {
  phraseEnabled: true,
  projectId: '<YOUR_PHRASE_PROJECT_ID>'
});

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
```

From now on, the **In-Context Editor** is fully integrated into your Vue app, congratulations! :tada:

For further information about the possible configuration options and useful methods, please have a look at our [API docs](../../api).
