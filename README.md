# The Lyric Finder

## What went well

- Able to view tracks by any artist
- Able to view lyrics upon track selection
- Simple but easy to use interface

## Improvements/Next Steps

- Api request to fetch track lists by artist releases meant there were many duplicate tracks in duplicate albums
- With more time, implement pagination/infinite scroll to be able to fetch more tracks from the musicbrainz api using the offset parameter in the request
- Improve user experience by rendering the lyrics on the same page upon selection rather than navigating to a single page
- Improve styling to scroll through tracks within set div height
- Show information about artist including picture, description
- Add category selection using genre and filter tracks by album
- Error handling

## Getting Started

Clone this repo:

```bash
git clone https://github.com/anisapatel/airelogic-techtest.git


```

Install the dependencies:

`npm i`

Run the app. It will run on http://localhost:3000.

`npm start`

# Built using:

- @reach/router: v1.3.3,
- react: v16.13.0,
- react-dom: v16.13.0

# Styled using:

- Vanilla CSS
