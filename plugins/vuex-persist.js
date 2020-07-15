import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  const persisted = new VuexPersistence({
    key: "Booky",
    storage: localStorage
  }).plugin(store);
};
