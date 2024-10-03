console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${} year(s) until you can drive`;

    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg)
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);

//Exercise 3:
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrent 2";
    } else if (x < 0 && y < 0) {
        return "Quadrent 3";
    } else if (x > 0 && y < 0) {
        return "Quadrent 4";
    } else if (x == 0 && y != 0) {
        return "X Axis"
    } else if (x != 0 && y == 0) {
        return "Y Axis"
    } else {
        return "Orgin";
    }
}

console.log(checkQuadrant(11, 1))
console.log(checkQuadrant(-11, 1))
console.log(checkQuadrant(-1, -11))
console.log(checkQuadrant(1, -11))
console.log(checkQuadrant(0, -11))

//Exercise 4:
function isValidTriangle(a, b, c) {
    if (a + b > c || a + c > b || b + c > a) {

    }
}
function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`
        }
    }
    else {
        return `Not a valid triangle`;
    }
}
checkTriangle(2, 3, 4);
checkTriangle(2,2,2 );
checkTriangle(1, 2, 2);
checkTriangle(1, 1, 2);

//Exercise 5:
function dataUsageFeedBack(planLimit, Day, Usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used,${remainingDays} day(s) remaining`);
    console.log(`Average daily use: ${projectedAvg.toFixed(2)} GB/Day`)

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)}
    ,GB/day)
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB
    from your data limit. To stay below your data plan, use no more
    than ${remainingData / remainingDays.toFixed(2)} GB/day`)
}
dataUsageFeedback(50, 12, 25);