var inputHref = document.querySelector("#inputHref");
var inputSecureCode = document.querySelector("#secureCode");
var buttonOn = document.querySelector("#on");
var buttonOff = document.querySelector("#off");
var save = document.querySelector("#save");

function init() {
    if(window.localStorage['href'] != undefined) 
        inputHref.value = window.localStorage['href'];

    if(window.localStorage['secure code'] != undefined) 
        inputSecureCode.value = window.localStorage['secure code'];

    if(window.localStorage['is execute'] != undefined) 
        initIsExecute(window.localStorage['is execute']);
    else {
        window.localStorage['is execute'] = 'false';
        initIsExecute(window.localStorage['is execute']);
    }
}

function initIsExecute(value) {
    let isExecute = strToBool(value);

    if(isExecute)
        onSelect();
    else
        offSelect();
}

let strToBool = (value) => value == 'true';

$('input[name=options]').change(function() {
    let id = $('input[name=options]:checked')[0].id;

    if(id == 'on') {
        window.localStorage['is execute'] = 'true';
        onSelect();
    } else {
        window.localStorage['is execute'] = 'false';
        offSelect();
    }
});

function onSelect() {
    buttonOn.checked = true;
    buttonOff.checked = false;

    buttonOff.parentElement.classList.remove('active');
    buttonOn.parentElement.classList.add('active');

    buttonOn.parentElement.style.backgroundColor = "green";
    buttonOff.parentElement.style.backgroundColor = "";
}

function offSelect() {
    buttonOn.checked = false;
    buttonOff.checked = true;

    buttonOn.parentElement.classList.remove('active');
    buttonOff.parentElement.classList.add('active');

    buttonOff.parentElement.style.backgroundColor = "red";
    buttonOn.parentElement.style.backgroundColor = "";
}

save.onclick = function () {
    window.localStorage['href'] = inputHref.value;
    window.localStorage['secure code'] = inputSecureCode.value;
}

init();