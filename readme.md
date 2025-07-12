# Medal.tv API Wrapper

This wrapper utilizes [Medal.tv's Developer API](https://docs.medal.tv) to return clips to your application!

![NPM](https://nodei.co/npm/medaltv-wrapper.png?downloads=true&downloadRank=true&stars=true)

## Install via NPM

```
npm i medaltv-wrapper
```

## Pre-requisites

You will need a [Medal API Key](https://docs.medal.tv/api#generate-an-api-key) in order to utilize this.

## Usage

```ts
import { MedalApi } from "medaltv-wrapper";

const medal = new MedalApi("pub_xxxxxxxxxxxxxxxxxxxxxx");

// fetch latest from a user
await medal.latestFromUser(215577);

// fetch latest from category
await medal.latestFromCategory("hAXdelx2t");

// find category data using ID
await medal.getCategory("hAXdelx2t");

// or slug
await medal.getCategory("minecraft");

// search for a term
await medal.search("fortnite");
```

## FAQ

Some quick questions/answers to get you started.

### How do I find my user ID?

- Open your profile on the web with Chrome's devtools network tab open
- After it loads, filter the requests for "/api"
- Look for a set of numbers -- this is your user ID. For example, mine is `215577`

If you navigate to `https://medal.tv/users/[id]` and you're redirected to your profile, you did everything correctly!

### What do returned objects look like?

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
  "categoryId": "hAXdelx2t",
  "categoryName": "Minecraft",
  "alternativeName": "Minecraft",
  "publishedClipCount": 4461683,
  "coverPhoto": "https://cdn.medal.tv/games/background/background-minecraft-17.png",
  "activeSessions": 14784,
  "slug": "minecraft",
  "isGame": true
}
```
