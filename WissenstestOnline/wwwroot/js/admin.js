﻿$(document).ready(() => {
    console.log('jQuery Admin ready');

    //Anmeldevorgang
    $('#adminLoginButton').on('click', CheckAdminInfo);

    //Testdaten
    $('#adminUsername').val('testadmin1');
    $('#adminPasswort').val('hallo123');

    //Suchtrigger
    $('#stations_admin').on('click', StationSelected);


});

function CheckAdminInfo() {

    var input_username = $('#adminUsername').val();
    var input_password = $('#adminPasswort').val();

    console.log('Username: ' + input_username);
    console.log('Password: ' + input_password);

    const url = '/Admin/CheckAdminInfo';

    $.post(url, {
        username: input_username,
        password: input_password
    }).then(reply => {
        console.log(`ServerReply CheckAdminInfo: ${reply}`);
        if (reply === 'username_fail') {
            $('#LoginError').html('User ist nicht vorhanden!');
        } else if (reply === 'password_fail') {
            $('#LoginError').html('Falsches Passwort!');
        } else if (reply === 'ok') {
            window.open('AdminOverview');
            self.close();
        }
        });

}

function StationSelected() {
    var selectedStation = $('#stations_admin').val();
    console.log(`Selected Station: ${selectedStation}`);

    if (selectedStation != null) {
        const url = '/Admin/StationSelected';



    }
}