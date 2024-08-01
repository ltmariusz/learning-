expenses = {
  "2023-01": {
    "01": {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "09": {
      food: [11.9],
      fuel: [190.22],
    },
  },
  "2023-03": {
    "07": {
      food: [20, 11.9, 30.2, 11.9],
    },
    "04": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  "2023-04": {},
};

var allCosts = new Array();
//Get Date of Sunday
function getDateSunday(date, month) {
  let dayToSunday = (7 - date) % 7;

  let yearOfSunday = month.split("-")[0];
  let monthOfSunday = month.split("-")[1];

  return new Date(yearOfSunday, monthOfSunday, dayToSunday + 1);
}

//Median calculation
function medianCalc(median) {
  median.sort((a, b) => a - b);
  let middle = Math.floor(median.length / 2);
  if (median.length % 2 == 0) {
    return (median[middle] + median[middle - 1]) / 2;
  } else {
    return median[middle];
  }
}

//Main Program
function solution(expenses) {
  result = null;

  for (const month in expenses) {
    let sanDay = getDateSunday(new Date(month).getDay(), month);

    for (const day in expenses[month]) {
      let fullDate = new Date(`${month}-${day}`);

      if (fullDate.getDate() <= sanDay.getDate()) {
        for (const category in expenses[month][day]) {
          expenses[month][day][category].forEach((cost) => {
            allCosts.push(cost);
          });
        }
      }
    }
  }

  if (allCosts.length == 0) {
    result = null;
    return result;
  }
  result = medianCalc(allCosts);
  return result;
}
console.log(solution(expenses));
