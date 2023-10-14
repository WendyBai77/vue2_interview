import axios from 'axios';
export const namespaced = true;

export const state = {
  table_data: [
    {
      id: 1,
      text: "Hello world",
      url: "https://www.google.com",
    },
    {
      id: 2,
      text: "iphone",
      url: "https://www.apple.com/tw/",
    },
    {
      id: 3,
      text: "andriod",
      url: "https://www.android.com/intl/zh-TW_tw/",
    },
  ],
  showData: [],
};

export const getters = {};

const mutations = {
  setShowData(state, data) {
    state.showData = data;
  },
};

const actions = {
  async getShowData({ commit }) {
    try {
      const response = await axios.get("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6");
      // 更新 showData 狀態，data 將被傳遞到 setShowData mutation，並用於更新 state 中的 showData。
      commit("setShowData", response.data);
      console.log('response.data:',response.data);
    } catch (err) {
      console.err("讀取資料時發生錯誤", err);
    }
  },
};

export default {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};
