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
    "url": "webpack-runtime-c58fc49b18f7ac4976ef.js"
  },
  {
    "url": "framework-4e1587a5f74ce58d6e54.js"
  },
  {
    "url": "app-c04a0c9f5726b8baccc9.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d368113420cdab25be4421bf3858c141"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e588307c74237b78b55f.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "ad3e9e50a1d93e097c174f26ae3ae08d"
  },
  {
    "url": "polyfill-38b0149cc40c19111f01.js"
  },
  {
    "url": "styles.787e8a2e758a4788f399.css"
  },
  {
    "url": "styles-e446e4b070fb3e2c44d9.js"
  },
  {
    "url": "cb1608f2-35cf6f62625d155fd40a.js"
  },
  {
    "url": "a9a7754c-e5456aafd0576af950dc.js"
  },
  {
    "url": "29107295-a04a93d999339514fd4b.js"
  },
  {
    "url": "16fdeb06ce1efded237e92f04bd43b8e894847ab-b6105f4e0d65bbdbc5dd.js"
  },
  {
    "url": "74ddf90431988fbd71d4a9003a20c85974dd4068-fbe98da9d38df6fe95de.js"
  },
  {
    "url": "component---src-pages-architecture-tsx-85a868285662e9066318.js"
  },
  {
    "url": "page-data/architecture/page-data.json",
    "revision": "1a794a976e6646fbaecafb324d18d161"
  },
  {
    "url": "page-data/sq/d/2919552352.json",
    "revision": "206655c985b5a21ba09e6690e07d9c7d"
  },
  {
    "url": "page-data/sq/d/2999304408.json",
    "revision": "713794a9bf54c22240513b02d5223fca"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "27b11c0425a811a1a63e37527920f3ce"
  },
  {
    "url": "page-data/sq/d/3905517708.json",
    "revision": "4c36a1d7df1b0d8deab5e9d4c6760e1f"
  },
  {
    "url": "component---src-pages-interior-design-tsx-5329dc55a35c56f2f009.js"
  },
  {
    "url": "page-data/interior-design/page-data.json",
    "revision": "93d2d5737191aab93bde2b1cb2761c10"
  },
  {
    "url": "page-data/sq/d/3871434952.json",
    "revision": "1c981bcd25a83bdaf82cecbb9bc42d7b"
  },
  {
    "url": "component---src-pages-competitions-tsx-32d9ae23776cfc146758.js"
  },
  {
    "url": "page-data/competitions/page-data.json",
    "revision": "ec5950837ee7d5f30d1e7511336379e4"
  },
  {
    "url": "page-data/sq/d/2802107742.json",
    "revision": "e33a2a6963eb6315a1d66322fafed3ed"
  },
  {
    "url": "component---src-pages-research-tsx-1edbba80d982e244845e.js"
  },
  {
    "url": "page-data/research/page-data.json",
    "revision": "00182532dcdc4856141ac6227c8a9f67"
  },
  {
    "url": "page-data/sq/d/4101461770.json",
    "revision": "f596e22b9f9e1bca60aaaa044df61358"
  },
  {
    "url": "component---src-pages-contact-index-tsx-9d326354713e55816fc0.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "b0a30acc6652bca82a652c387bb3e66e"
  },
  {
    "url": "component---src-pages-404-index-tsx-33b3508e375aacc4007e.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "cb50fe58fa0f2398443c24dbef0e45d3"
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
  if (!resources || !(await caches.match(`/puzzlearchitecture/app-c04a0c9f5726b8baccc9.js`))) {
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
