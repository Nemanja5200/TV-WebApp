const BASE = import.meta.env.BASE_URL;

export const CHANNEL_PICTURE_LINKS = {
  LOL: `${BASE}assets/Channel Pictures/LoL.png`,
  CS2: `${BASE}assets/Channel Pictures/CS2.webp`,
  HADES: `${BASE}assets/Channel Pictures/Hades 2.webp`,
  MW2: `${BASE}assets/Channel Pictures/MW2.webp`,
  HALO: `${BASE}assets/Channel Pictures/Halo.webp`,
} as const;

type ChannelKey = keyof typeof CHANNEL_PICTURE_LINKS;
export const channels = Object.keys(CHANNEL_PICTURE_LINKS) as ChannelKey[];

export const CHANNEL_NAMES: Record<ChannelKey, string> = {
  LOL: "League of Legends",
  CS2: "Counter-Strike 2",
  HADES: "Hades II",
  MW2: "Modern Warfare 2",
  HALO: "Halo",
};
