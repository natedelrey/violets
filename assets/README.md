# Local gallery and soundtrack files

Add these files directly to this folder (names are case-sensitive):

| Filename | Content |
| --- | --- |
| `pfp.png` | Main Profile Photo artwork |
| `NDPFP.png` | Natural Divine profile artwork |
| `OldNDPFP.png` | Natural Divine alternate profile artwork |
| `Suki Waterhouse - Weirdo (Official Lyric Video).mp3` | Weirdo by Suki Waterhouse audio |

Use the exact uploaded filenames above, including capitalization and spaces. Banner files are not used by the three profile-art cards. If you use different filenames or formats, update both the image and artwork-link paths, or the audio path, in `index.html`.

The gallery and music player load directly from `assets/`, with no external media service required. The music button opens a native audio player; playback starts only when the visitor presses play. Missing artwork keeps its decorative placeholder and hides the full-size link. Unavailable audio displays a status message when loading fails.
