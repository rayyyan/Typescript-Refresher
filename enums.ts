// const beforeLoad = "beforeLoad"
// const loading = "loading"
// const loaded = "loaded"
enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}
//Boolean
const isLoading = (state: LoadingState) => state === LoadingState.loading
console.log(isLoading(LoadingState.loaded))
