import { wNotes, bNotes } from './notes'
// Array
export const whiteNotes = wNotes
export const blackNotes = bNotes

// Object
export const OBEvent = {
  SHOW_GLOBAL_LOADING: 'SHOW_GLOBAL_LOADING',
  HIDE_GLOBAL_LOADING: 'HIDE_GLOBAL_LOADING',
  CHANGE_WALLPAPER: 'CHANGE_WALLPAPER',
  INSTRUMENT_LOADED: 'INSTRUMENT_LOADED',

  AUTO_PLAY_NUM_SCORE: 'AUTO_PLAY_NUM_SCORE',
  AUTO_PLAY_XML_SCORE: 'AUTO_PLAY_XML_SCORE',
  AUTO_PLAY_MIDI: 'AUTO_PLAY_MIDI',

  START_NOTE_RAIN: 'START_NOTE_RAIN',
  PLAY_MIDI_NOTE: 'PLAY_MIDI_NOTE',

  STOP_AUTO_PLAY: 'STOP_AUTO_PLAY',
  MUSIC_END: 'MUSIC_END',
}