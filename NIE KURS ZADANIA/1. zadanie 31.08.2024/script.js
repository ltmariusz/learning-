let expenses = {
  "2024-07": {
    "01": {
      food: [22.11, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "06": {
      food: [11.9],
      fuel: [190.22],
    },
  },
  "2024-09": {
    "01": {
      food: [22.11, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "09": {
      food: [11.9],
      fuel: [190.22],
    },
  },
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
    "03": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
    "04": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
    "05": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  "2023-04": {},
  "2023-07": {},
};

function getDateSunday(date, month) {
  console.log(date);
  let dayToSunday = (7 - date) % 7;
  console.warn(dayToSunday);

  return new Date(month.split("-")[0], month.split("-")[1], dayToSunday + 1);
}

var MYRESULT = new Array();
//iteracja miesiąca
for (const month in expenses) {
  console.log(month);
  console.log(new Date(month).getDay());
  //sprawdzanie ile dni do niedzieli
  let temporaryAmmunt = 0;
  let sanDay = getDateSunday(new Date(month).getDay(), month);

  //iteracja dni
  for (const day in expenses[month]) {
    console.log(`${month}-${day}`);

    //pobnranie daty
    let fullDate = new Date(`${month}-${day}`);

    if (fullDate.getDate() <= sanDay.getDate()) {
      //Dodawanie kosztów DATA>DZIEN>KATEGORIE
      for (const category in expenses[month][day]) {
        // for (const cost in expenses[month][day][category]) {
        //   console.log(expenses[month][day][category][cost]);
        // }
        //Dodawanie kosztów DATA>DZIEN>KATEGORIE>CENY
        expenses[month][day][category].forEach((cost) => {
          console.log(`KOSZT ${cost}`);
          temporaryAmmunt += cost;
          temporaryAmmunt = Math.round(temporaryAmmunt * 100) / 100;
          console.log(`SUMA ${temporaryAmmunt}`);
        });
      }
    }

    // console.log(getDateSunday(fullDate));
    // // Znalezione niedziele
    // if (getDateSunday(fullDate)) {
    //   //DODANIE WSZYSTKIC WYDATKÓW
    //   for (const category in expenses[month][day]) {
    //     // for (const cost in expenses[month][day][category]) {
    //     //   console.log(expenses[month][day][category][cost]);
    //     // }
    //     expenses[month][day][category].forEach((cost) => {
    //       console.log(`KOSZT ${cost}`);
    //       temporaryAmmunt += cost;
    //       console.log(`SUMA ${temporaryAmmunt}`);
    //     });
    //     MYRESULT.push(temporaryAmmunt);
    //     console.log(`NIEPOSORTOWANA MEDIANA ${temporaryAmmunt}`);
    //   }
    // } else {
    // }
    // console.log(temporaryAmmunt);
  }
  MYRESULT.push({ month: month, ammount: temporaryAmmunt });
  console.log(MYRESULT);
}
console.log(medianCalc(MYRESULT));
function medianCalc(median) {
  median.sort((a, b) => a.ammount - b.ammount);
  console.log(median);
  let number = Math.floor(median.length / 2);
  console.log(number);
  if (median.length % 2 == 0) {
    console.log("parzysta");
    console.log(median[number].ammount);
    console.log(median[number - 1].ammount);
    return (median[number].ammount + median[number - 1].ammount) / 2;
  } else {
    console.log("nie parzysta");
    return median[number].ammount;
  }
}

//............
function solution(expenses) {
  result = null;
  // ...
  return result;
}
console.log(solution(expenses));
