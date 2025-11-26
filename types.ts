export interface Project {
  id: string;
  title: string;
  url: string;
  emoji: string;
  internalId?: string; // If present, opens in a popup window
}

export interface Song {
  title: string;
  artist: string;
  duration: number; // in seconds
}

export interface ChaosLinkItem {
  text: string;
  url: string;
  isExternal?: boolean;
  internalId?: string; // If present, opens in a popup window
}
