// after getting details from getTrain we are iterating in it and checking conditions
// and sorting it afterwords
const list = (getTrain, length) => {
  let newList = [];
  for (let i = 0; i < length; i++) {
    const [flag, h, m] = fxn1(getTrain[i]);
    if (flag != false) {
      const sleep = {
        trainName: getTrain[i].trainName,
        trainNumber: getTrain[i].trainNumber,
        price: getTrain[i].price.sleeper,
        seatsAvailable: getTrain[i].seatsAvailable.sleeper,
        departureTime: {
          Hours: h,
          Min: m,
        },
      };
      const Ac = {
        trainName: getTrain[i].trainName,
        trainNumber: getTrain[i].trainNumber,
        price: getTrain[i].price.AC,
        seatsAvailable: getTrain[i].seatsAvailable.AC,
        departureTime: {
          Hours: h,
          Min: m,
        },
      };
      newList.push(sleep);
      newList.push(Ac);
      // console.log(newList);
    }
  }
  const sorted = sort(newList);
  // console.log(sort);
  return sorted;
};
// sorting it
const sort = (trains) => {
  return trains.sort(sortfxn);
};
// console.log(list);

// comparing all trains in it
function sortfxn(a, b) {
  if (a.price !== b.price) {
    return a.price - b.price;
  }
  if (b.seatsAvailable !== a.seatsAvailable) {
    return b.seatsAvailable - a.seatsAvailable;
  }
  // means same hours compare minutes then
  if (b.departureTime.Hours == a.departureTime.Hours)
    return b.departureTime.Min - a.departureTime.Min;
  else return b.departureTime.Hours - a.departureTime.Hours;
}
function fxn1(gettrain) {
  let h = gettrain.departureTime.Hours;
  let m = gettrain.departureTime.Minutes;
  let d = gettrain.delayedBy;
  if (m + d >= 60) {
    m = m + d - 60;
    h += 1;
  }
  // to check whether given hour is greater than 12
  if (h > 12) {
    return [false, h, m];
  }
  // if it is in within 30 minutes ignore it
  if (m + d <= 30 && h == 0) {
    return [false, h, m];
  }
  // else return it
  return [true, h, m];
}
module.exports = list;
