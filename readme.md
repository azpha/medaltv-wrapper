# Medal.tv Javascript API Wrapper
This wrapper utilizes [Medal.tv's Developer API](https://docs.medal.tv) to return clips to your application!  

![NPM](https://nodei.co/npm/medaltv-wrapper.png?downloads=true&downloadRank=true&stars=true)

## Install via NPM
```
npm i medaltv-wrapper
```

# How do I use this? 
You can see below for all the functions. It's expected you know how to work JSON data and basic Javascript.  
You will also need a [Medal API Key](https://docs.medal.tv/api#generate-an-api-key) in order to utilize this. Use a public one if this is a public app and visa versa.

See farther below for the format of returned objects.
  
## searchClips - Search via a keyword
```js
searchClips({
    apikey: `pub_xxxxxxxxxxxxxxxxxxxxxxx`,
    limit: '1',
    offset: '0',
    keyword: 'flip reset'
})
.then(clip => console.log(clip))
```

## latestClips - Latest clips from a category or user
```js
const { latestClips } = require('medaltv-wrapper');

latestClips({
    apikey: `pub_xxxxxxxxxxxxxxxxxxxxxxx`,
    limit: '1',
    offset: '0',
    categoryId: 'fortnite',
    userid: '215577'
})
.then(clip => console.log(clip))
```

## trendingClips - Trending clips on the Medal.tv platform
```js
const { trendingClips } = require('medaltv-wrapper');

trendingClips({
    apikey: `pub_xxxxxxxxxxxxxxxxxxxxxxx`,
    limit: '1',
    offset: '0',
    categoryId: `fortnite`
})
.then(clip => console.log(clip))
```

## fetchCategories - Fetch Medal category data
```js
fetchCategories({
    apikey: `pub_xxxxxxxxxxxxxxxxxxxxxxx`,
    categoryId: `minecraft`
})
.then(category => console.log(category))
```

# FAQ
## How do I find my user ID?
Medal has primarily transitioned to using usernames to referenced users, however unfortunately the public API is legacy at this point and doesn't support searching by username. However, you can still retrieve your user ID!
- Open your profile on the web with Chrome's devtools network tab open
- After it loads, filter the requests for "/api"
- Look for a set of numbers -- this is your user ID. For example, mine is `215577`

If you navigate to `https://medal.tv/users/[id]` and you're redirected to your profile, you did everything correctly!

## What do returned objects look like?
Clip responses will be an array of clip objects. Clip objects look like this;
```json
{
    "contentId": "cidxxxxxxxxx",
    "rawFileUrl": "not_authorized",
    "unbrandedFileUrl": "not_authorized",
    "contentTitle": "this is a sick clip!",
    "contentViews": 123,
    "contentLikes": 123,
    "contentThumbnail": "https://cdn.medal.tv/ugcc/content-thumbnail/xxxxx",
    "categoryId": 12, // categories can be found from /v1/categories
    "videoLengthSeconds": 14,
    "createdTimestamp": 1680399492000, // in ms
    "directClipUrl": "https://medal.tv/clip/id/id",
    "embedIframeCode": "<iframe ...></iframe>", // see more about iframe options on docs.medal.tv
    "credits": "Credits to alexav (https://medal.tv/users/215577)"
}
```

If you're querying for a category, you'll see this;
```json
{
    "categoryId": 17,
    "categoryName": "Minecraft",
    "alternativeName": "Minecraft",
    "publishedClipCount": 4461683,
    "coverPhoto": "https://cdn.medal.tv/games/background/background-minecraft-17.png",
    "activeSessions": 14784,
    "slug": "minecraft",
    "isGame": true
}
```

I plan on cleaning this up a bit in a future update and updating the URLs/organizing content engagement info in the script.