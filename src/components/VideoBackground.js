import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
  // fetch trailer and update the store
  useMovieTrailer(movieId)

  return (
    <div className='w-screen'>
    <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground

// {
//   "id": 906126,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "J.A. Bayona and Tom Holland on Society of the Snow",
//       "key": "O_E2Pdh190A",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-01-16T17:58:59.000Z",
//       "id": "65a7a43c11386c012a693039"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Resilience: Behind the Scenes of Survival [Subtitled]",
//       "key": "Nhv_OBVGiq8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-01-05T18:00:00.000Z",
//       "id": "6598588989b56101a4c37500"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "'Society of the Snow' | Scene at The Academy",
//       "key": "Q-EOLpiQgz4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-01-04T19:00:10.000Z",
//       "id": "659750c1726fb142ccab22d6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "J.A. Bayona on Directing Society of the Snow [Subtitled]",
//       "key": "bYk1T-e9Mz0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-12-18T18:00:00.000Z",
//       "id": "65817da48dbc3308b099fea2"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The Making of Society of the Snow | The #DolbyInstitute Podcast",
//       "key": "uTcnxn1KMWk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-14T17:35:24.000Z",
//       "id": "657cc4c2e93e95218f6d4d56"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Behind the VFX [Subtitled]",
//       "key": "TG7f3gCe2wc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-12-11T19:00:00.000Z",
//       "id": "658392faf1759c3fa21109b9"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "'Society of the Snow' with filmmakers | Academy Conversations",
//       "key": "tR-9Peh8J0U",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-11T18:30:08.000Z",
//       "id": "657773017a3c52010cde8e82"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Q&A | Cast & Crew | Film Independent Presents",
//       "key": "rtw1m3--Ue0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-08T18:01:08.000Z",
//       "id": "6594ca5f7e9d5f5f63f37870"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Michael Giacchino on the Score with J.A. Bayona",
//       "key": "Vkk_498GcRk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-12-05T18:00:00.000Z",
//       "id": "656ffe2dd18fb9011d66a677"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer [Subtitled]",
//       "key": "pDak4qLyF4Q",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-11-27T15:00:04.000Z",
//       "id": "656533b66f53e1011d79bd9b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Teaser #2",
//       "key": "f7BG4IH3n1M",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-10-20T13:30:00.000Z",
//       "id": "653302078d22fc00acb625da"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Teaser [Subtitled]",
//       "key": "ARndpfgm9Jo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-08-24T12:00:02.000Z",
//       "id": "64e762de90ea4b0101f61725"
//     }
//   ]
// }