import fs from "fs";

type MedalApiResponse = {
  contentObjects: ContentObject[];
};
type ContentObject = {
  contentId: string;
  rawFileUrl: string;
  contentTitle: string;
  contentViews: number;
  contentLikes: number;
  categoryId: number;
  videoLengthSeconds: number;
  createdTimestamp: number;
  directClipUrl: number;
  embedIframeUrl: string;
  credits: string;
};
type CategoryObject = {
  categoryId: string;
  categoryName: string;
  alternativeName: string;
  publishedClipCount: number;
  coverPhoto: string;
  activeSessions: number;
  slug: string;
  uniqueUserCount: number;
  isGame: boolean;
};

class MedalApi {
  private key: string;
  private baseUrl = "https://developers.medal.tv/v1";

  constructor(key: string) {
    this.key = key;
  }

  // https://docs.medal.tv/api#v1latest---latest-clips-from-a-user-or-game
  async latestFromCategory(categoryId: string, limit = 10, offset = 0) {
    const res = await fetch(
      this.baseUrl +
        `/latest?categoryId=${categoryId}&limit=${limit}&offset=${offset}`,
      {
        method: "get",
        headers: {
          Authorization: this.key,
        },
      }
    );

    if (res.ok) {
      const data = (await res.json()) as MedalApiResponse;
      return data?.contentObjects;
    } else {
      throw new Error("Failed to get latest clips from category!");
    }
  }
  async latestFromUser(userId: number, limit = 10, offset = 0) {
    const res = await fetch(
      this.baseUrl + `/latest?userId=${userId}&limit=${limit}&offset=${offset}`,
      {
        method: "get",
        headers: {
          Authorization: this.key,
        },
      }
    );

    if (res.ok) {
      const data = (await res.json()) as MedalApiResponse;
      return data?.contentObjects;
    } else {
      throw new Error("Failed to get latest clips from user!");
    }
  }

  // https://docs.medal.tv/api#v1trending---trending-clips-by-game
  async trending(categoryId: string, limit = 10, offset = 0) {
    const res = await fetch(
      this.baseUrl +
        `/trending?categoryId=${categoryId}&limit=${limit}&offset=${offset}`,
      {
        method: "get",
        headers: {
          Authorization: this.key,
        },
      }
    );

    if (res.ok) {
      const data = (await res.json()) as MedalApiResponse;
      return data?.contentObjects;
    } else {
      throw new Error("Failed to fetch trending clips!");
    }
  }

  // https://docs.medal.tv/api#v1search---search-clips-on-medal
  async search(q: string, limit = 10, offset = 0) {
    const res = await fetch(
      this.baseUrl + `/search?text=${q}&limit=${limit}&offset=${offset}`,
      {
        method: "get",
        headers: {
          Authorization: this.key,
        },
      }
    );

    if (res.ok) {
      const data = (await res.json()) as MedalApiResponse;
      return data?.contentObjects;
    } else {
      throw new Error("Failed to search for query!");
    }
  }

  // https://docs.medal.tv/api#v1categories---games-list
  async getCategory(slugOrId: string) {
    const res = await fetch(this.baseUrl + "/categories", {
      method: "get",
      headers: {
        Authorization: this.key,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const categories = data as CategoryObject[];

      return categories.filter(
        (v) =>
          v.slug.includes(slugOrId) ||
          v.slug === slugOrId ||
          v.categoryId === slugOrId
      );
    } else {
      throw new Error("Failed to find category!");
    }
  }
}

export { MedalApi };
