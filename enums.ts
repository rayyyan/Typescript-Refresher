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

//LIterral Types

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1
  }
  return pip
}
console.log(rollDice(3))
