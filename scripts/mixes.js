/* =========================================================================
   FERKHL · Playlists pro Jahr
   -------------------------------------------------------------------------
   Neues Jahr = neuer Eintrag. Reihenfolge hier egal, die Seite sortiert
   selbst (neuestes Jahr oben).

   Werte aus dem SoundCloud-Einbettungscode („Teilen“ → „Einbetten“):
     id      Zahl hinter  soundcloud%3Aplaylists%3A
     secret  bei privaten Playlists der Teil  s-…  hinter  secret_token%3D
             (öffentliche Playlist: null)
     url     Link zur Playlist auf SoundCloud
     tracks  Anzahl Tracks (Ersatzwert für die Player-Höhe, falls SoundCloud
             sie nicht liefert; die Seite liest sie sonst selbst aus)
   ========================================================================= */
window.FERKHL_MIXES = [
  {
    year: 2026,
    tracks: 11,
    id: '2329248516',
    secret: 's-QZY2VJacVV4',
    url: 'https://soundcloud.com/nicekollektiv/sets/intern-ferkhl-festival-2026/s-QZY2VJacVV4'
  },
  {
    year: 2025,
    tracks: 11,
    id: '2080949448',
    secret: 's-rWgETk0B46b',
    url: 'https://soundcloud.com/nicekollektiv/sets/ferkhl-festival-2025/s-rWgETk0B46b'
  },
  {
    year: 2024,
    tracks: 4,
    id: '1928565227',
    secret: null,
    url: 'https://soundcloud.com/nicekollektiv/sets/ferkhl-festival-2024'
  },
  {
    year: 2023,
    tracks: 11,
    id: '1693679730',
    secret: 's-UZvXzKvMAe9',
    url: 'https://soundcloud.com/nicekollektiv/sets/ferkhl-festival-2023/s-UZvXzKvMAe9'
  },
  {
    year: 2017,
    tracks: 4,
    id: '398641130',
    secret: null,
    url: 'https://soundcloud.com/nicekollektiv/sets/ferkhl-festival-2017'
  }
];
