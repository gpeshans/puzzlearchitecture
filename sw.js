/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-57661fe9e3fa4cb16a64.js"
  },
  {
    "url": "framework-5e713f507919262c2771.js"
  },
  {
    "url": "app-0538ee79aaaeed0eb2c3.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d1e74626fe2542e3abb540ab40253723"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-4dfecd1f2d0e74648e38.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b07a6eb0406fa4be84389a0d22e56e81"
  },
  {
    "url": "polyfill-5e7a67930d782b90431b.js"
  },
  {
    "url": "styles.95bbdbd4628fc4243fab.css"
  },
  {
    "url": "styles-8d3db5124725dcff78a7.js"
  },
  {
    "url": "cb1608f2-5e53be20e965d0acb661.js"
  },
  {
    "url": "a9a7754c-bd7670fbbb1152ff6117.js"
  },
  {
    "url": "29107295-8c275308860c62a08479.js"
  },
  {
    "url": "16fdeb06ce1efded237e92f04bd43b8e894847ab-4b39350cc744d6d6d50e.js"
  },
  {
    "url": "74ddf90431988fbd71d4a9003a20c85974dd4068-3757b8b010c55b27a888.js"
  },
  {
    "url": "component---src-pages-architecture-tsx-76128ca050d215d14456.js"
  },
  {
    "url": "page-data/architecture/page-data.json",
    "revision": "98686de6e3c95bd47d99b2c0afd659d8"
  },
  {
    "url": "page-data/sq/d/2999304408.json",
    "revision": "654f0d96918b0623a7b0c25e2e4b0d38"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "27b11c0425a811a1a63e37527920f3ce"
  },
  {
    "url": "page-data/sq/d/3905517708.json",
    "revision": "f67f4e46eea62c6b8180014eb4cd4106"
  },
  {
    "url": "page-data/sq/d/3982722569.json",
    "revision": "1eec287297702d2dd86d3d5c48d4fc25"
  },
  {
    "url": "component---src-pages-interior-design-tsx-107fcbea4bf77ef5dc70.js"
  },
  {
    "url": "page-data/interior-design/page-data.json",
    "revision": "803f07040482443be9fcf903b46b08b6"
  },
  {
    "url": "page-data/sq/d/3871434952.json",
    "revision": "6bf7e76083a8eb272031fdba06f32996"
  },
  {
    "url": "component---src-pages-competitions-tsx-88e4ef32a21eca1c6dba.js"
  },
  {
    "url": "page-data/competitions/page-data.json",
    "revision": "f2ca8edf18400c9582538297f6b0dec3"
  },
  {
    "url": "page-data/sq/d/2802107742.json",
    "revision": "fdd56523f0cd83ce6cb3e8863fb08b1d"
  },
  {
    "url": "component---src-pages-research-tsx-2209d14037c4defe51c9.js"
  },
  {
    "url": "page-data/research/page-data.json",
    "revision": "495eb58dbe1d4caec07eac362b62a010"
  },
  {
    "url": "page-data/sq/d/4101461770.json",
    "revision": "bb3fc7f2cd057370af8e10058747bad0"
  },
  {
    "url": "component---src-pages-contact-index-tsx-2ee41770cf722633b75a.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "9fb6c410d8d3042f8412603997e5e732"
  },
  {
    "url": "component---src-pages-404-index-tsx-e92b3b90c1c22cb8d08a.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "20c92722039e3797412dc801173d6938"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "4f6423c4294a680514c044912d20057e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/puzzlearchitecture`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/puzzlearchitecture/app-0538ee79aaaeed0eb2c3.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/puzzlearchitecture/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
