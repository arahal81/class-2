'use strict';

let userName = prompt('please enter your name');
alert('welcom ' + userName);
let age = prompt('pls answer y/n or yes/no \n my birthyear is 1990?');
let counter = 0;

switch (age.toUpperCase()) {

    case 'Y':
    case 'YES':
        //console.log('sorry this is not correct!')
        alert('sorry ' + userName + ', this is not correct my birthyear is 1995!');
        break;
    case 'N':
    case 'NO':
        //console.log('good is correct!')
        alert('good ' + userName + ', is correct!');
        counter++;
        break;
    default:
        break;

}
let major = prompt('pls answer y/n or yes/no \n my major is CS')
switch (major.toUpperCase()) {

    case 'Y':
    case 'YES':
        //console.log('good is correct!')
        alert('good ' + userName + ', is correct!');
        counter++;
        break;

    case 'N':
    case 'NO':
        //console.log('sorry this is not correct!');
        alert('sorry ' + userName + ', this is not correct my major is CS!');
        break;
    default:
        break;

}
let hobby = prompt('pls answer y/n or yes/no \n my fav hobby is playing football?');
switch (hobby.toUpperCase()) {

    case 'Y':
    case 'YES':
        //console.log('sorry this is not correct!');
        alert('sorry ' + userName + ', this is not correct!\n I prefer to play basketball');
        break;
    case 'N':
    case 'NO':
        //console.log('good is correct!');
        alert('good ' + userName + ', is correct!');
        counter++;
        break;
    default:
        break;
}
let job = prompt('pls answer y/n or yes/no \n My job is web developer ')
switch (hobby.toUpperCase()) {

    case 'N':
    case 'NO':
        //console.log('sorry this is not correct!');
        alert('sorry ' + userName + ', this is not correct My job is web developer!');
        break;
    case 'Y':
    case 'YES':
        //console.log('good is correct!');
        alert('good ' + userName + ', is correct!');
        counter++;
        break;
    default:
        break;
}

let color = prompt('pls answer y/n or yes/no \n My fav color\'s Black ');
switch (hobby.toUpperCase()) {

    case 'N':
    case 'NO':
        //console.log('sorry this is not correct!');
        alert('sorry ' + userName + ', this is not correct I prefer Black color!');
        break;
    case 'Y':
    case 'YES':
        //console.log('good is correct!');
        alert('good ' + userName + ', is correct!');
        counter++;
        break;
    default:
        break;
}
if (counter > 3) {
    alert('Good job you got ' + counter + '/5 correct answers');
}
else {
    alert(' you get ' + counter + '/5 correct answers');
}