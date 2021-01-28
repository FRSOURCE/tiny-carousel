// const tap = require('tap')
// const jsdom = require('jsdom')
// const {JSDOM} = jsdom
// let window, document, FRSHideScrollbar
// let CACHE_BUSTER = -1

// tap.beforeEach(async () => await onBeforeEach())

// tap.test('without <style> element in DOM new one', (t) => {
//   FRSHideScrollbar.refreshScrollWidth()

//   const styleEls = document.getElementsByTagName('style')

//   t.is(styleEls.length, 1, 'should be created')
//   t.is(styleEls[0], FRSHideScrollbar.config.styleElement, 'should be visible under config.styleElement')

//   t.end()
// })

// tap.test('window already loaded', {timeout: 3000}, (t) => {
//   t.isNot(typeof FRSHideScrollbar.config.scrollWidth, 'undefined',
//     'scrollWidth should be recalculated (will NOT be undef)')
//   t.is(FRSHideScrollbar.refreshScrollWidth(), FRSHideScrollbar.config.scrollWidth,
//     'scrollWidth should be the same as refreshScrollWidth return value')
//   t.end()
// })

// tap.test('autoInit = false', async (t) => {
//   await onBeforeEach({
//     FRSHideScrollbar: {
//       config: {
//         autoInit: false
//       }
//     }
//   })

//   t.is(FRSHideScrollbar.config.styleElement.innerHTML, '', 'styleElement should be empty')

//   t.end()
// })

// tap.test('onload', {timeout: 3000}, async (t) => {
//   await onBeforeEach(void 0, true)

//   t.isNot(typeof FRSHideScrollbar.config.scrollWidth, 'undefined',
//     'scrollWidth should be recalculated (will NOT be undef)')
//   t.is(FRSHideScrollbar.refreshScrollWidth(), FRSHideScrollbar.config.scrollWidth,
//     'scrollWidth should be the same as refreshScrollWidth return value')
//   t.end()
// })

// tap.test('when loaded after DOM init', {timeout: 3000}, async (t) => {
//   t.isNot(typeof FRSHideScrollbar.config.scrollWidth, 'undefined',
//     'scrollWidth should be recalculated (will NOT be undef)')
//   t.is(FRSHideScrollbar.refreshScrollWidth(), FRSHideScrollbar.config.scrollWidth,
//     'scrollWidth should be the same as refreshScrollWidth return value')
//   t.end()
// })

// tap.test('changing option className', (t) => {
//   const styleEl = document.getElementsByTagName('style')[0]
//   t.is(styleEl, FRSHideScrollbar.config.styleElement, 'styleEl should be visible under config.styleElement')

//   const oldClassName = FRSHideScrollbar.config.className
//   const newClassName = 'new-class-name'
//   const styleContentExpected = styleEl.innerHTML.replace(new RegExp(oldClassName, 'g'), newClassName)

//   FRSHideScrollbar.config.className = newClassName
//   FRSHideScrollbar.updateStyles()

//   t.is(styleEl.innerHTML, styleContentExpected, 'changes style content as well')

//   t.end()
// })

// tap.test('updateStyles', async (t) => {
//   t.beforeEach(onBeforeEach)

//   t.test('from refreshScrollWidth', (ct) => {
//     ct.beforeEach(onBeforeEach)

//     ct.test('when scrollWidth hasn\'t changed', (cct) => {
//       FRSHideScrollbar.updateStyles = () => cct.fail('shouldn\'t be called')
//       FRSHideScrollbar.refreshScrollWidth()

//       cct.end()
//     })

//     ct.test('when scrollWidth has changed', (cct) => {
//       const originalUpdateStyles = FRSHideScrollbar.updateStyles

//       FRSHideScrollbar.updateStyles = () => cct.pass('should be called')
//       FRSHideScrollbar.config.scrollWidth += 1
//       FRSHideScrollbar.refreshScrollWidth()

//       const styleEl = FRSHideScrollbar.config.styleElement
//       const styleContentExpected = styleEl.innerHTML

//       FRSHideScrollbar.updateStyles = originalUpdateStyles

//       FRSHideScrollbar.config.scrollWidth = 12 // need to mock, so styles are appended to _styleElement
//       FRSHideScrollbar.updateStyles()
//       FRSHideScrollbar.refreshScrollWidth()

//       styleEl.innerHTML = styleEl.innerHTML.replace(
//         new RegExp('margin-right:-' + (FRSHideScrollbar.config.scrollWidth + .5) + 'px;'),
//         new RegExp('margin-right:-' + (FRSHideScrollbar.config.scrollWidth + 1.5) + 'px;')
//       )
//       FRSHideScrollbar.config.scrollWidth += 1
//       FRSHideScrollbar.refreshScrollWidth()

//       cct.is(styleEl.innerHTML, styleContentExpected, 'changes style content as well')

//       cct.end()
//     })

//     ct.end()
//   })

//   t.end()
// })

// async function onBeforeEach (windowOptions = undefined, mimicNotLoadedWindow = false) {
//   ({window, document, FRSHideScrollbar} = await initializeModuleInDOM(`./FRSHideScrollbar.mjs?v=${++CACHE_BUSTER}`,
//     windowOptions, mimicNotLoadedWindow))

//   FRSHideScrollbar.cache = CACHE_BUSTER
// }

// async function initializeModuleInDOM (module, windowOptions = undefined, mimicNotLoadedWindow = false) {
//   const {window} = new JSDOM('')

//   global.window = window
//   global.document = window.document

//   if (mimicNotLoadedWindow) {
//     Object.defineProperty(window.document, 'readyState', {
//       get () {
//         return 'loading'
//       },
//       configurable: true
//     })
//   } else {
//     if (!window.document.readyState || window.document.readyState === 'loading') {
//       await new Promise((resolve) => {
//         window.addEventListener('load', resolve, {passive: true})
//       })

//     }
//   }

//   if (windowOptions) {
//     Object.assign(window, windowOptions)
//   }

//   const {FRSHideScrollbar} = await import(module)
//   if (mimicNotLoadedWindow) {
//     Object.defineProperty(window.document, 'readyState', {
//       get () { return 'complete' }
//     })
//   }

//   return new Promise(resolve => {
//     const resolver = () => resolve({
//       window,
//       FRSHideScrollbar,
//       document: window.document
//     })

//     if (!window.document.readyState || window.document.readyState === 'loading') {
//       window.addEventListener(
//         'load',
//         resolver,
//         {passive: true}
//       )
//     } else {
//       resolver()
//     }

//     if (mimicNotLoadedWindow) {
//       window.dispatchEvent(new window.Event('load'))
//     }
//   });
// }
