export type IconsId =
  | "application"
  | "avatar"
  | "bars"
  | "circle"
  | "close"
  | "config"
  | "down-arrow"
  | "filter"
  | "headset_mic"
  | "heart"
  | "info"
  | "preferences"
  | "search"
  | "user";

export type IconsKey =
  | "Application"
  | "Avatar"
  | "Bars"
  | "Circle"
  | "Close"
  | "Config"
  | "DownArrow"
  | "Filter"
  | "HeadsetMic"
  | "Heart"
  | "Info"
  | "Preferences"
  | "Search"
  | "User";

export enum Icons {
  Application = "application",
  Avatar = "avatar",
  Bars = "bars",
  Circle = "circle",
  Close = "close",
  Config = "config",
  DownArrow = "down-arrow",
  Filter = "filter",
  HeadsetMic = "headset_mic",
  Heart = "heart",
  Info = "info",
  Preferences = "preferences",
  Search = "search",
  User = "user",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Application]: "61697",
  [Icons.Avatar]: "61698",
  [Icons.Bars]: "61699",
  [Icons.Circle]: "61700",
  [Icons.Close]: "61701",
  [Icons.Config]: "61702",
  [Icons.DownArrow]: "61703",
  [Icons.Filter]: "61704",
  [Icons.HeadsetMic]: "61705",
  [Icons.Heart]: "61706",
  [Icons.Info]: "61707",
  [Icons.Preferences]: "61708",
  [Icons.Search]: "61709",
  [Icons.User]: "61710",
};
