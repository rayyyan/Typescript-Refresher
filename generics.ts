const state = <T>(init: T): [() => T, (v: T) => void] => {
  let val: T = init
  return [
    () => val,
    (v: T) => {
      val = v
    },
  ]
}
const [tate, setState] = state(4)
console.log(tate())
setState(52)
console.log(tate())

//Null or string

const [mate, setMate] = state<string | null>(null)
console.log(mate())
setMate("string")
console.log(mate())

//Ranker
interface Rank<RankItem> {
  item: RankItem
  rank: number
}
const ranker = <RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] => {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }))
  console.log(ranks)
  ranks.sort((a, b) => a.rank - b.rank)
  console.log(ranks)
  console.log(ranks.map((rank) => rank.item))
  return ranks.map((rank) => rank.item)
}
interface Marvel {
  name: string
  hp: number
}
const heros: Marvel[] = [
  { name: "thor", hp: 100 },
  { name: "tony", hp: 0 },
]

ranker(heros, ({ hp }) => hp)
