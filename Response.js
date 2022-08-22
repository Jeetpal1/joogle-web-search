export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - Hello World",
        totalResults: "4550000",
        searchTerms: "Hello World",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "146acfedbba1d4abb",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - Hello World",
        totalResults: "4550000",
        searchTerms: "Hello World",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "146acfedbba1d4abb",
      },
    ],
  },
  context: {
    title: "Joogle",
  },
  searchInformation: {
    searchTime: 0.255639,
    formattedSearchTime: "0.26",
    totalResults: "4550000",
    formattedTotalResults: "4,550,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Tschüss Berlin, hello world! - Google My Maps",
      htmlTitle: "Tschüss Berlin, <b>hello world</b>! - Google My Maps",
      link: "https://www.google.com/mymaps/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Feb 28, 2019 ... Tschüss Berlin, hello world! ... Tschüss Berlin, hello world! Map Legend. Terms. 10,000 km. This map was created by a user.",
      htmlSnippet:
        "Feb 28, 2019 <b>...</b> Tschüss Berlin, <b>hello world</b>! ... Tschüss Berlin, <b>hello world</b>! Map Legend. Terms. 10,000 km. This map was created by a user.",
      cacheId: "s_AUgf1NI4kJ",
      formattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      htmlFormattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSB4hG6Eoc-aKeOsFCcp2-syzX7FmJbEmCeKjrfFThWanyVbwzpwv7Gk5IK",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
            name: "Tschüss Berlin, hello world! - Google My Maps",
            description: "Tschüss Berlin, hello world!",
            url: "https://www.google.com/maps/d/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1DFRYMbt58FakcbMNizdvATJhVDw%26hl%3Den_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Tschüss Berlin, hello world! - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Tschüss Berlin, hello world!",
            "og:title": "Tschüss Berlin, hello world! - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
            "og:description": "Tschüss Berlin, hello world!",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World Shopping",
      htmlTitle: "<b>Hello World</b> Shopping",
      link: "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it",
      displayLink: "www.google.com",
      snippet:
        "Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...",
      htmlSnippet:
        "Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...",
      cacheId: "q0-peCHq4tIJ",
      formattedUrl:
        "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it",
      htmlFormattedUrl:
        "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it",
      pagemap: {
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            name: "Hello World Shopping",
            description: "Hello World Shopping",
            url: "https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World Shopping",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Hello World Shopping",
            "og:title": "Hello World Shopping",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            "og:description": "Hello World Shopping",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World! Processing",
      htmlTitle: "<b>Hello World</b>! Processing",
      link: "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.",
      htmlSnippet:
        "<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.",
      cacheId: "LkrfSTqN6ZAJ",
      formattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...",
      htmlFormattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...",
      pagemap: {
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            name: "Hello World! Processing",
            description: "Hello World! Processing",
            url: "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World! Processing",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Hello World! Processing",
            "og:title": "Hello World! Processing",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "og:description": "Hello World! Processing",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The World of Hello World - Google マイマップ",
      htmlTitle: "The World of <b>Hello World</b> - Google マイマップ",
      link: "https://www.google.com/maps/d/edit?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&ie=UTF8&oe=UTF-8&hl=ja&q&om=1&z=1&ll=15.284185,96.328125&spn=174.260301,360&msa=0",
      displayLink: "www.google.com",
      snippet:
        "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, ...",
      htmlSnippet:
        "A map of programming languages and rough locations in the <b>world</b> where they were created. Colors correspond to four major epochs: blue - first languages,&nbsp;...",
      cacheId: "O9Rk61WDXfcJ",
      formattedUrl: "https://www.google.com/maps/d/edit?mid...",
      htmlFormattedUrl: "https://www.google.com/maps/d/edit?mid...",
      pagemap: {
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            name: "The World of Hello World - Google マイマップ",
            description:
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, green - establishing paradigms, yellow...",
            url: "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1j9wMaiQ12jiqpEFD1HgZ3QPuPDk%26hl%3Dja",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "The World of Hello World - Google マイマップ",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "og:title": "The World of Hello World - Google マイマップ",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            "og:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Search - Discover How Google Search Works",
      htmlTitle: "Google Search - Discover How Google Search Works",
      link: "https://www.google.com/search/howsearchworks/",
      displayLink: "www.google.com",
      snippet:
        "Our mission is to organize the world's information and make it universally accessible and useful. It starts with Google Search. Over the years, the web and ...",
      htmlSnippet:
        "Our mission is to organize the <b>world&#39;s</b> information and make it universally accessible and useful. It starts with Google Search. Over the years, the web and&nbsp;...",
      cacheId: "QaaN9KCyEasJ",
      formattedUrl: "https://www.google.com/search/howsearchworks/",
      htmlFormattedUrl: "https://www.google.com/search/howsearchworks/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title": "Google Search - Discover How Google Search Works",
            "og:site_name": "Google Search - Discover How Google Search Works",
            "og:title": "Google Search - Discover How Google Search Works",
            "og:description":
              "Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.",
            "og:image:secure_url":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            "twitter:image":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            referrer: "no-referrer",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.",
            "og:locale": "en",
            "og:url": "https://www.google.com/search/howsearchworks/",
          },
        ],
        cse_image: [
          {
            src: "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google",
      htmlTitle: "Google",
      link: "https://www.google.com/",
      displayLink: "www.google.com",
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        "Search the <b>world&#39;s</b> information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...",
      cacheId: "y14FcUQOGl4J",
      formattedUrl: "https://www.google.com/",
      htmlFormattedUrl: "https://www.google.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc",
            width: "320",
            height: "112",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            viewport: "width=device-width,minimum-scale=1.0",
            google: "notranslate",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Android | The platform pushing what's possible",
      htmlTitle: "Android | The platform pushing what&#39;s possible",
      link: "https://www.google.com/android",
      displayLink: "www.google.com",
      snippet:
        "Find the latest and greatest on the world's most powerful mobile platform. Browse devices, explore resources and learn about ... Say hello to Android 13.",
      htmlSnippet:
        "Find the latest and greatest on the <b>world&#39;s</b> most powerful mobile platform. Browse devices, explore resources and learn about ... Say <b>hello</b> to Android 13.",
      cacheId: "Rmor56Dtt0sJ",
      formattedUrl: "https://www.google.com/android",
      htmlFormattedUrl: "https://www.google.com/android",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlL31UNmhQ6iUKMqDVtaB6e0BFA4fWfGmbbpvNYwz-1MTWSvQSV9KFm2kB",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "og:site_name": "Android",
            "twitter:site": "@android",
            viewport: "initial-scale=1, minimum-scale=1, width=device-width",
            "og:title": "Android | The platform pushing what’s possible",
            "og:locale": "en_US",
            "og:url": "https://www.android.com/",
            title: "Android | The platform pushing what’s possible",
            "og:description":
              "Find the latest and greatest on the world’s most powerful mobile platform. Browse devices, explore resources and learn about the latest updates.",
          },
        ],
        cse_image: [
          {
            src: "https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Maps",
      htmlTitle: "Google Maps",
      link: "https://www.google.com/maps/dir/@32.3796761,-86.3344184,13z/data=!4m6!4m5!1m0!1m3!2m2!1d-86.2994421!2d32.3795084",
      displayLink: "www.google.com",
      snippet:
        "Your location. Trails. Dedicated lanes. Bicycle-friendly roads. Dirt/unpaved trails. Live traffic. Fast. Slow. Wildfires Info.",
      htmlSnippet:
        "Your location. Trails. Dedicated lanes. Bicycle-friendly roads. Dirt/unpaved trails. Live traffic. Fast. Slow. Wildfires Info.",
      cacheId: "R9DiIgEL3a0J",
      formattedUrl:
        "https://www.google.com/.../data=!4m6!4m5!1m0!1m3!2m2!1d-86. 2994421!2d32.3795084",
      htmlFormattedUrl:
        "https://www.google.com/.../data=!4m6!4m5!1m0!1m3!2m2!1d-86. 2994421!2d32.3795084",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs",
            width: "204",
            height: "247",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "twitter:card": "summary",
            "theme-color": "#3367d6",
            viewport: "initial-scale=1.0, user-scalable=no",
            google: "notranslate",
          },
        ],
        cse_image: [
          {
            src: "https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Solitaire",
      htmlTitle: "Google Solitaire",
      link: "https://www.google.com/logos/fnbx/solitaire/standalone.html",
      displayLink: "www.google.com",
      snippet:
        "Moves 0... UNDO. NEW. Choose your difficulty.. EASY. HARD. Share: YOU. WIN !",
      htmlSnippet:
        "Moves 0... UNDO. NEW. Choose your difficulty.. EASY. HARD. Share: YOU. WIN !",
      cacheId: "tJhWBtv216YJ",
      formattedUrl:
        "https://www.google.com/logos/fnbx/solitaire/standalone.html",
      htmlFormattedUrl:
        "https://www.google.com/logos/fnbx/solitaire/standalone.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsU5oD_TPdX8al_3zbCFXCpY-LBaxsb6m2M1oEL9ol92ipyRE0JGeeOg",
            width: "280",
            height: "77",
          },
        ],
        metatags: [
          {
            viewport:
              "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/logos/fnbx/solitaire/ribbon_no_text.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Maps",
      htmlTitle: "Google Maps",
      link: "https://www.google.com/maps/@37.6,-95.665,4z",
      displayLink: "www.google.com",
      snippet:
        "Your location. Trails. Dedicated lanes. Bicycle-friendly roads. Dirt/unpaved trails. Live traffic. Fast. Slow. Wildfires Info. 500 km. Traffic Transit",
      htmlSnippet:
        "Your location. Trails. Dedicated lanes. Bicycle-friendly roads. Dirt/unpaved trails. Live traffic. Fast. Slow. Wildfires Info. 500 km. Traffic Transit",
      cacheId: "JDlEcC2PRUIJ",
      formattedUrl: "https://www.google.com/maps/@37.6,-95.665,4z",
      htmlFormattedUrl: "https://www.google.com/maps/@37.6,-95.665,4z",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs",
            width: "204",
            height: "247",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "twitter:card": "summary",
            "theme-color": "#3367d6",
            viewport: "initial-scale=1.0, user-scalable=no",
            google: "notranslate",
          },
        ],
        cse_image: [
          {
            src: "https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png",
          },
        ],
      },
    },
  ],
};
