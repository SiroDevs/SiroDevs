import type {
  DownloadArchitecture,
  DownloadFormat,
  DownloadPlatform,
  ReleaseCatalog,
  ReleaseFile,
} from "@/domain/entities/download";

const repositoryUrl = "https://github.com/SiroDevs/FlutterPainter";
const latestReleaseUrl = `${repositoryUrl}/releases/latest`;

const assetDefinitions: Array<{
  suffix: string;
  platform: DownloadPlatform;
  architecture: DownloadArchitecture;
  format: DownloadFormat;
}> = [
  { suffix: "x64.exe", platform: "windows", architecture: "x64", format: "installer" },
  { suffix: "x64.zip", platform: "windows", architecture: "x64", format: "portable" },
  { suffix: "arm64.dmg", platform: "macos", architecture: "arm64", format: "dmg" },
  { suffix: "x64.dmg", platform: "macos", architecture: "x64", format: "dmg" },
  { suffix: "x64.deb", platform: "linux", architecture: "x64", format: "deb" },
  { suffix: "arm64.deb", platform: "linux", architecture: "arm64", format: "deb" },
  { suffix: "x64.rpm", platform: "linux", architecture: "x64", format: "rpm" },
  { suffix: "arm64.rpm", platform: "linux", architecture: "arm64", format: "rpm" },
  { suffix: "x64.tar.gz", platform: "linux", architecture: "x64", format: "tarball" },
  { suffix: "arm64.tar.gz", platform: "linux", architecture: "arm64", format: "tarball" },
];

function createCatalog(tag: string | null): ReleaseCatalog {
  const version = tag?.replace(/^v/, "") ?? "latest";
  const releaseUrl = tag ? `${repositoryUrl}/releases/tag/${tag}` : latestReleaseUrl;
  const downloadBase = tag
    ? `${repositoryUrl}/releases/download/${tag}`
    : `${latestReleaseUrl}/download`;
  const files: ReleaseFile[] = assetDefinitions.map((asset) => {
    const name = `FlutterPainter_${version}_${asset.suffix}`;
    return {
      name,
      url: tag ? `${downloadBase}/${name}` : latestReleaseUrl,
      platform: asset.platform,
      architecture: asset.architecture,
      format: asset.format,
    };
  });

  return {
    version: tag,
    releaseUrl,
    checksumsUrl: `${downloadBase}/SHA256SUMS.txt`,
    files,
  };
}

async function cachedFetch(url: string, options: RequestInit = {}) {
  return fetch(url, {
    ...options,
    signal: AbortSignal.timeout(5000),
    next: { revalidate: 3600 },
  });
}

export async function getFlutterPainterReleaseCatalog(): Promise<ReleaseCatalog> {
  const manifest = await cachedFetch(
    "https://raw.githubusercontent.com/SiroDevs/FlutterPainter/main/pubspec.yaml",
  ).catch(() => null);
  const versionText = manifest?.ok
    ? await manifest.text().catch(() => "")
    : "";
  const version = versionText.match(
    /^version:\s*['"]?(\d+\.\d+\.\d+(?:\+\d+)?)(?:['"]|\s|$)/m,
  )?.[1];

  if (version) {
    const catalog = createCatalog(`v${version}`);
    const release = await cachedFetch(catalog.checksumsUrl, {
      method: "HEAD",
    }).catch(() => null);
    if (release?.ok) return catalog;
  }

  const response = await cachedFetch(latestReleaseUrl, {
    method: "HEAD",
    redirect: "manual",
  }).catch(() => null);
  const tag = response?.headers
    .get("location")
    ?.match(/\/releases\/tag\/([^/?#]+)$/)?.[1];
  if (tag) return createCatalog(tag);

  return createCatalog(null);
}
