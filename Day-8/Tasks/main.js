//Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?

let list13 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
function isLanguageDiverse(list) {
    const obj = {
        Python: 0,
        Ruby: 0,
        JavaScript: 0
    };

    for (let el in list) {
        for (let key in obj) {
            if (list[el].language === key) {
                obj[key]++;
            }
        }
    }

    const array = [];
    for (let key in obj) {
        array.push(obj[key]);
    }

    const max = Math.max(...array);

    const result = array.every(el => max / el <= 2);

    return result;
}


console.log('Final result:', isLanguageDiverse(list13));


console.log('---------------------------------------------------------');

//------------------------------------------------------------------------------

//Coding Meetup #11 - Higher-Order Functions Series - Find the average age

let list11 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' }
];
function getAverageAge(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i].age;
    }
    const averageAge = Math.round(sum / list.length);

    return averageAge;
}

console.log('Final result:', getAverageAge(list11));


console.log('---------------------------------------------------------');

//------------------------------------------------------------------------------

//Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?

let list8 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];
function allContinents(list) {
    const obj = {
        Africa: 0,
        Americas: 0,
        Asia: 0,
        Europe: 0,
        Oceania: 0
    };

    for (let item in list) {
        for (let key in obj) {
            if (list[item].continent === key) obj[key]++;
        }
    }

    for (let key in obj) {
        if (obj[key] === 0) return false;
    }
    return true;
}

console.log('Final result:', allContinents(list8));

console.log('---------------------------------------------------------');

//------------------------------------------------------------------------------

//Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

let list6 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' }
];
function isSameLanguage(list) {
    const array = [];

    for (let item in list) {
        array.push(list[item].language);
    }

    const result = list.every(el => el.language === list[0].language);

    return result;
}

console.log('Final result:', isSameLanguage(list6));




