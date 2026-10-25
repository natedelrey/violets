# Violets / Nate — GitHub Pages

This repository contains the personal Roblox portfolio website for Violets / Nate.

## Publish for free

1. Create a **public** GitHub repository named `<your-github-username>.github.io`.
2. Download and unzip the provided website package. Upload **all the contents** of the unzipped folder (not the ZIP itself) to the root of the repository. Keep `index.html`, `assets/`, `scripts/`, and `.github/` in their original locations. The repository's web upload supports dragging a folder's contents; alternatively use GitHub Desktop to commit and push them.
3. Open **Settings → Pages** in your GitHub repository. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
4. After GitHub finishes deploying, visit `https://<your-github-username>.github.io/`.

## Current Roblox avatar

The website initially uses a Roblox-hosted fallback picture. The **Refresh Roblox avatar** workflow in `.github/workflows/update-avatar.yml` downloads the latest headshot into `assets/roblox-avatar.png` and commits it to the repository periodically (every six hours, subject to GitHub's schedule delays). In your repository's **Actions** tab, allow workflows if GitHub asks, then open **Refresh Roblox avatar → Run workflow** to fetch the first current image. Repository Actions settings must permit workflows to write repository contents. If the automated refresh is unavailable, the fallback image remains visible, but may become outdated.

## Notes

- The soundtrack links to the official song on Spotify; no copyrighted audio file is included.
- The three commission portraits currently load from externally hosted Google Drive thumbnails. If those images cannot be displayed publicly, download the originals (with the artist's permission) and replace the links with local assets.
- There is no paid domain or paid hosting requirement for a `github.io` address.
