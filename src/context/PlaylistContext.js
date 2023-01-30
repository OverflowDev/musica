import { createContext, useReducer, useEffect } from "react";

// Import Reducer 
import playlistReducer from "./PlaylistReducer";

// importing the loacal playlist 
import {charts} from '../chart'
import {playlist} from '../songs.js'

// createContext 
const PlaylistContext = createContext()

export const PlaylistProvider = ({children}) => {

    const initialState = {
        // songs: [],
        // playlist: [],
        songs: playlist,
        playlists: charts,
        top: {},
        // album: [],
        currentSong: 0,
        volume: 50,
        isPlaying: false,
        isLoop: false,
        isMute: false,
        loading: false,
        // audio: null,
    }

    const [state, dispatch] = useReducer(playlistReducer, initialState)

    // Get Playlist from API 
    // useEffect(() => {
    //   const fetchPlaylists = async () => {
    //     setLoading()
    //     const response = await fetch('url')
    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_PLAYLISTS',
    //         payload: data
    //     })
    //   }

    //   fetchPlaylists()
    // }, [])

    //Fetch album
    // const setAlbum = (alb) =>{
    //     dispatch({
    //         type: 'SET_ALBUM',
    //         payload: alb
    //     })
    // } 

    

    // SetCurrent song 
    const setCurrent = (curr) => {
        dispatch({
            type: 'SET_CURRENT_SONG',
            payload: curr
        })
        
    }

    // SetCurrent Volume 
    const setVolume = (vol) => {
        dispatch({
            type: 'SET_VOLUME',
            payload: vol
        })
    }


    // Toggle play 
    const togglePlaying = () =>{
        dispatch({
            type: 'TOGGLE_PLAYING',
            payload: state.isPlaying ? false : true
        })
    }

    // Toggle Loop
    const toggleLoop = () =>{
        dispatch({
            type: 'TOGGLE_LOOP',
            payload: state.isLoop ? false : true
        })
    }

    // Toggle Mute
    const toggleMute = () =>{
        dispatch({
            type: 'TOGGLE_MUTE',
            payload: state.isMute ? false : true
        })
    }

    //Next 
    const toggleSkipNext = () => {
        // setIndex()
        if(state.currentSong === state.songs.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(state.currentSong + 1)
        }
    }

    //Previous
    const toggleSkipPrev = () => {
        // setIndex()
        if(state.currentSong     === 0) {
            setCurrent(state.songs.length - 1)
        } else {
            setCurrent(state.currentSong - 1)
        }
    }

    // SetLoading to true
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <PlaylistContext.Provider value={{ 
        ...state,
        setCurrent,
        setVolume,
        togglePlaying,
        toggleLoop,
        toggleMute,
        // setAlbum,
        toggleSkipNext,
        toggleSkipPrev,
     }}
        >
        {children}
    </PlaylistContext.Provider>

}


export default PlaylistContext