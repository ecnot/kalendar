<p align="center">
  <img src="docs/kalendar-hero.png" alt="Kalendar: month view with the agenda beside it" width="100%">
</p>

<p align="center">
  <b>A calm, private calendar for Windows, made for the things you look forward to.</b><br>
  Matches, game releases, new episodes, cinema nights, and everything in between.
</p>

<p align="center">
  <a href="https://github.com/ecnot/kalendar/releases/latest"><b>⬇ Download for Windows</b></a>
  &nbsp;·&nbsp; Windows 10 and 11 &nbsp;·&nbsp; Free
</p>

---

## Why Kalendar?

Most calendars are built for meetings. Kalendar is built for the good stuff: the match on Sunday, the game you pre-ordered, the season finale, the cabin weekend. Every kind of plan gets its own card, with pictures, colours and the details that matter, so the next few weeks look like something to look forward to, not a to-do list.

Your calendar lives on your own PC. No account, no sign-in, no cloud.

<p align="center">
  <img src="docs/kalendar-cards.png" alt="Cards for a football match, a TV episode, a game release and a movie" width="88%">
</p>

## Features

**Cards for everything**
- **Football:** both team logos, the competition, the stadium, and a picture per competition. Subscribe to your team's FotMob calendar and fixtures, kick-off changes and results arrive by themselves. Logos can be found online or added by hand.
- **TV shows:** follow a show and every new episode appears automatically, with season, episode number and title.
- **Movies:** search a film and get its release date for your country (cinema or streaming), poster and summary.
- **Game releases, tasks and events,** with your own pictures. Colours are picked from the picture automatically.

**Fast to fill in**
- **Type it like you'd say it:** *"Lunch with mom tomorrow at 12"* fills in the date and time, and saves as "Lunch with mom".
- **Custom icons for any card:** about 1,900 emoji or 4,800 line icons. Type "Dentist" and it suggests 🦷.
- **Quick adding:** hover any day and click **+**, or press **N** anywhere.

<p align="center">
  <img src="docs/kalendar-quick-add.png" alt="Quick add and the icon picker" width="92%">
</p>

**Looks the part**
- **Month, week and day views,** with a scrolling month view, multi-day events drawn as connected bars, and optional week numbers.
- **Light and dark mode** that follow Windows, plus colour and gradient themes, or your own.
- **Today's date on the taskbar and tray icon.**
- **An agenda beside the calendar** that never runs out, in three styles. Right-click any card to make it bigger or smaller.

<p align="center">
  <img src="docs/kalendar-dark.png" alt="Week view in dark mode" width="100%">
</p>

**Quietly reliable**
- **Reminders** as Windows notifications, even when the window is closed. Kalendar waits in the tray.
- **Repeating events,** with single days skippable.
- **Import and export .ics files,** so it works alongside Google Calendar, Outlook and Apple Calendar.
- **Starts with Windows** if you like, minimised to the tray.
- **Updates itself** when a new version is released here.

## Install

1. Download **`Kalendar-Setup-x.y.z.exe`** from the [latest release](https://github.com/ecnot/kalendar/releases/latest).
2. Run it. Windows may say *"Windows protected your PC"*, because Kalendar is a free hobby app without a paid code-signing certificate. Click **More info → Run anyway**.
3. That's it. Future versions install themselves; you'll see *"Kalendar is ready to update · Restart now"*.

**Optional extras**
- **Movie search** needs a free API key from [TMDB](https://www.themoviedb.org/settings/api). Paste it in Settings → Movies. It's stored only on your PC.
- **Your football team's fixtures:** in the FotMob app, open your team and copy its calendar link into Settings → Subscribed calendars.

## Privacy

Your events, pictures and settings are stored on your own PC, in `%APPDATA%\Kalendar`. Kalendar only goes online for the features you use:

| Feature | Service | What is sent |
|---|---|---|
| Place suggestions | [Photon](https://photon.komoot.io) (OpenStreetMap) | What you type in a location field |
| TV shows | [TVmaze](https://www.tvmaze.com) | Show names you search for |
| Movies | [TMDB](https://www.themoviedb.org) | Movie titles you search for, with your own key |
| Team logos | [TheSportsDB](https://www.thesportsdb.com) | Team names, when you press "Find logos online" |
| Subscribed calendars | The link you add (e.g. FotMob) | A normal download of that calendar |
| Updates | GitHub | A check for the newest version |

No tracking, no analytics, no ads.

## Credits

- **Movie data:** [TMDB](https://www.themoviedb.org). *This product uses the TMDB API but is not endorsed or certified by TMDB.*
- **TV data:** [TVmaze](https://www.tvmaze.com) (CC BY-SA).
- **Team badges:** [TheSportsDB](https://www.thesportsdb.com).
- **Places:** [Photon](https://photon.komoot.io), © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
- **Icons:** [Tabler Icons](https://tabler.io/icons) (MIT). **Emoji keywords:** [Emojibase](https://emojibase.dev) (MIT).
- **Fonts:** [Inter](https://rsms.me/inter/) and [Rajdhani](https://fonts.google.com/specimen/Rajdhani) (SIL Open Font License).
- **Built with** [Electron](https://www.electronjs.org).

Team names, competitions and artwork in the screenshots are examples. The club badges shown are placeholders, not official logos.

---

<p align="center"><sub>Made in Norway with ☕ and a lot of football.</sub></p>
