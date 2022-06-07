const materialcost = {
  seaweed : 30000,
  water: 500,
  salt: 3000,
  glassplate: 30000,
  takeoutplate: 5000,

}

const seaweedsoup = {
  one: materialcost.seaweed,
  two: materialcost.salt,
  three: materialcost.glassplate
}

let seaweedsoupPrice= seaweedsoup+one+ seaweedsoup+two + seaweedsoup+three;


console.log (seaweedsoupPrice);