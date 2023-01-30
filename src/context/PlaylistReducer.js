const playlistReducer = (state, action) => {


    // if(action.type === 'GET_PLAYLISTS') {
    //     return {
    //         ...state,
    //         playlists: action.payload,
    //         loading: false
    //     }
    // }

    if(action.type === 'SET_ALBUM') {
        return {
            ...state,
            album: action.payload,
            // isPlaying: true
        }
    }
    if(action.type === 'TOP_SONG') {
        return {
            ...state,
            top: action.payload,
            // isPlaying: true
        }
    }

    if(action.type === 'SET_CURRENT_SONG') {
        return {
            ...state,
            currentSong: action.payload,
            isPlaying: true
        }
    }

    if(action.type === 'SET_VOLUME') {
        return {
            ...state,
            volume: action.payload,
        }
    }

    if(action.type === 'SET_INDEX') {
        return {
            ...state,
            index: action.payload,
        }
    }

    if(action.type === 'TOGGLE_PLAYING') {
        return {
            ...state,
            isPlaying: action.payload
        }
    }
    if(action.type === 'TOGGLE_LOOP') {
        return {
            ...state,
            isLoop: action.payload
        }
    }
    if(action.type === 'TOGGLE_MUTE') {
        return {
            ...state,
            isMute: action.payload
        }
    }
    
    if(action.type === 'SET_LOADING') {
        return {
            ...state,
            loading: true
        }
    }


    return state
}

export default playlistReducer