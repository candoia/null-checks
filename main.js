'use strict';	
$('#content').hide();
let json = api.boa.run('nullchecks.boa');
$('#loading').hide();
$('#content').show();
//console.log(json.AddedNullCheck["[]"][0]);
let container = document.getElementById('output');
container.innerHTML = json.AddedNullCheck["[]"][0];


