'use strict';

let userName = prompt('please enter your name');
alert('welcom ' + userName);
let counter = 0;

function question1() {


    let age = prompt('pls answer y/n or yes/no \n my birthyear is 1990?');
    

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
}

function question2() {


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
}


function question3() {


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
}

function question4() {


    let job = prompt('pls answer y/n or yes/no \n My job is web developer ')
    switch (job.toUpperCase()) {

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
}

function question5() {


    let color = prompt('pls answer y/n or yes/no \n My fav color\'s Black ');
    switch (color.toUpperCase()) {

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
}

function question6() {
    let number1 = 9;
    for (let i = 0; i < 4; i++) {
        let temp_n = prompt('attempt number: ' + parseInt(i + 1) + '\n  guess a number from 1-20');
        if (temp_n == number1) {
            alert('Good job ' + userName + ' you got correct answer the number is: ' + number1);
            counter++;
            break;
        }
        else if (temp_n > number1) {
            alert('the guess is “too high” ');
        }
        else if (temp_n < number1) {
            alert('the guess is “too low” ');
        }
        if (i == 3) {
            alert('you\'ve exhausted all attempts the number is: ' + number1);
        }

    }
}

function question7() {
    let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


    for (let i = 0; i < 6; i++) {
        let temp_color = prompt('attempt number: ' + parseInt(i + 1) + '\nMention a color from rainbow colors').toLowerCase();
        let flag = false;
        for (let j = 0; j < rainbow.length; j++) {
            if (rainbow[j] === temp_color) {
                alert('Good job ' + userName + ' you got correct answer \n the nrainbow colors are: ' + rainbow);
                counter++;
                flag = true;
                break;
            }

        }
        if (flag) {
            break;
        }
        if (i == 5) {
            alert('you\'ve exhausted all attempts \n the nrainbow colors are: ' + rainbow);
        }
    }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();


if (counter > 5) {
    alert('Good job you got ' + counter + '/7 correct answers');
}
else {
    alert(' you get ' + counter + '/7 correct answers');
}       