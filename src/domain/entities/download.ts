export type DownloadPlatform = "windows" | "macos" | "linux";
export type DownloadArchitecture = "x64" | "arm64";
export type DownloadFormat =
  | "installer"
  | "portable"
  | "dmg"
  | "deb"
  | "rpm"
  | "tarball";

export interface ReleaseFile {
  name: string;
  url: string;
  platform: DownloadPlatform;
  architecture: DownloadArchitecture;
  format: DownloadFormat;
}

export interface ReleaseCatalog {
  version: string | null;
  releaseUrl: string;
  checksumsUrl: string;
  files: ReleaseFile[];
}
