# Oort Media Player

A simple and lightweight media player

## Table of Contents

- [Tech Stack](#tech-stack)
- [Description of Key Parts of Project](#key-parts)
  - [Client Folder Structure](#client-folder-structure)
- [Future Features](#future-features)
- [Build Setup](#build-setup)

## Screenshots

**_Library_**
The library shows you all of your media as high quality movie posters 
![Library](https://github.com/slupton89/oort-media-player/raw/master/lib.png)

**_Now Playing_**
The now playing view is clean and minimal to keep your focus on what you are watching
![NowPlaying](https://github.com/slupton89/oort-media-player/raw/master/np.png)

## Tech Stack

This project was built with the following:

- 'Vue' for the frontend
- 'Electron' for the framework
- 'VideoJS' for the media player

## Description of Key Parts of Project

Oort Media Player uses Electron as the foundation of the project for crossplatform development
VideoJS and HTML5 are used to play the media and to support many filetypes

## Future Features

- Add music library searchr and enable playlists
- Add ability to manage your library from in the app
- 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


# lint all JS/Vue component files in `src/`
npm run lint

```

