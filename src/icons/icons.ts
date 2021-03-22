export type IconsId =
  | "application"
  | "avatar"
  | "bars"
  | "close"
  | "config"
  | "down-arrow"
  | "filter"
  | "headset_mic"
  | "heart"
  | "preferences"
  | "search"
  | "user";

export type IconsKey =
  | "Application"
  | "Avatar"
  | "Bars"
  | "Close"
  | "Config"
  | "DownArrow"
  | "Filter"
  | "HeadsetMic"
  | "Heart"
  | "Preferences"
  | "Search"
  | "User";

export enum Icons {
  Application = "application",
  Avatar = "avatar",
  Bars = "bars",
  Close = "close",
  Config = "config",
  DownArrow = "down-arrow",
  Filter = "filter",
  HeadsetMic = "headset_mic",
  Heart = "heart",
  Preferences = "preferences",
  Search = "search",
  User = "user",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Application]: "61697",
  [Icons.Avatar]: "61698",
  [Icons.Bars]: "61699",
  [Icons.Close]: "61700",
  [Icons.Config]: "61701",
  [Icons.DownArrow]: "61702",
  [Icons.Filter]: "61703",
  [Icons.HeadsetMic]: "61704",
  [Icons.Heart]: "61705",
  [Icons.Preferences]: "61706",
  [Icons.Search]: "61707",
  [Icons.User]: "61708",
};
