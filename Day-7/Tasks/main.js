//Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

let list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
function findSenior(list) {
    const array = [];
    for (let i = 0; i < list.length; i++) {
        array.push(list[i].age);
    }
    console.log('Ages array:', array);

    array.sort((x, y) => y - x);
    console.log('Sorted ages array:', array);

    const max = Math.max(...array);
    console.log('Max age:', max);
    const res = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].age === max) {
            res.push(list[i]);
        }
    }
    console.log('Senior developers:', res);
    return res;
}

findSenior(list1);

console.log('---------------------------------------------------------');

//------------------------------------------------------------------------------

//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

let list5 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
const countLanguages = (list) => {
    return list.reduce((languages, { language }) => {
        languages[language] = (languages[language] || 0) + 1;

        console.log('Current languages count:', languages);

        return languages;
    }, {});
};

console.log('Final result:', countLanguages(list5));

console.log('---------------------------------------------------------');

//------------------------------------------------------------------------------

//Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

let list16 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];
function askForMissingDetails(list) {
    const array = [];

    for (let el in list) {
        for (let key in list[el]) {
            if (list[el][key] === null) {
                list[el].question = `Hi, could you please provide your ${key}.`;

                console.log('Developer with missing detail:', list[el]);

                array.push(list[el]);
            }
        }
    }

    console.log('Final result:', array);

    return array;
}

askForMissingDetails(list16);

console.log('---------------------------------------------------------');

//------------------------------------------------------------------------------

//Coding Meetup #10 - Higher-Order Functions Series - Create usernames

let list10 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
function addUsername(list) {
    const date = new Date().getFullYear();

    for (let el in list) {
        const firstNameLower = list[el].firstName.toLowerCase();
        const lastNameLower = list[el].lastName[0].toLowerCase();
        const birthYear = date - list[el].age;

        list[el].username = firstNameLower + lastNameLower + birthYear;

        console.log(`Username for ${list[el].firstName}:`, list[el].username);
    }

    console.log('Updated list:', list);

    return list;
}

addUsername(list10);

console.log('---------------------------------------------------------');

//------------------------------------------------------------------------------

//Coding Meetup #14 - Higher-Order Functions Series - Order the food

let list14 = [
    {
        firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian'
    },
];
function orderFood(list) {
    const object = {};

    for (let el in list) {
        if (!object[list[el].meal]) {
            object[list[el].meal] = 1;
        } else {
            object[list[el].meal]++;
        }

        console.log('Current meal count:', object);
    }

    console.log('Final meal count:', object);

    return object;
}

orderFood(list14);



