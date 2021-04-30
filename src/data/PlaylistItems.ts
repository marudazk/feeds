export interface PlaylistItems {
    kind: string;
    etag: string;
    items: PlaylistItem[];
    pageInfo: PageInfo;
}

export interface PlaylistItem {
    kind: PlaylistItemKind;
    etag: string;
    id: string;
    snippet: Snippet;
}

export enum PlaylistItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Snippet {
    publishedAt: Date;
    channelId: ChannelID;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: ChannelTitle;
    playlistId: PlaylistID;
    position: number;
    resourceId: ResourceID;
    videoOwnerChannelTitle: VideoOwnerChannelTitle;
    videoOwnerChannelId: VideoOwnerChannelID;
}

export enum ChannelID {
    UCHS3VFNajsB4BueGD49JggA = "UCHS3vFNajsB4bueGD49jggA",
}

export enum ChannelTitle {
    ZrzeszeniePlantatorówOwocówIWarzywWŁowiczu = "Zrzeszenie Plantatorów Owoców i Warzyw w Łowiczu",
}

export enum PlaylistID {
    PLJSCFZh9YtCHca7G1GFC6J0ExIjCqcH1O = "PLJSCFZh9ytCHca7G1GFC6j0ExIjCqcH1O",
}

export interface ResourceID {
    kind: ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
    standard?: Default;
    maxres?: Default;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export enum VideoOwnerChannelID {
    UCeq6Y3ATh6ARFVYBTzV7PSA = "UCeq6y3ATh6ARFVYBTzV7PSA",
}

export enum VideoOwnerChannelTitle {
    Marudazk = "marudazk",
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Thumbnail {
    url: string
}

export interface Video {
    id: string,
    title: string,
    description: string,
    thumbnail: Thumbnail
}