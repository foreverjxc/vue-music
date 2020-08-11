import { playMode } from 'common/js/config.js'

const state = {
  singer: {},
  playing: false,
  fullScreen: false, // 是否全屏播放
  playlist: [], // 播放列表
  sequencelist: [], // 顺序播放列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放歌曲的索引值，用于上一曲和下一曲的点击
  disc: {},
  topList: {},
  searchHistory: []
}

export default state
