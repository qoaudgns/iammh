function go(url)
{
	window.open(url);
}


function clickEmail(){
    var tempElem = document.createElement('textarea');
    tempElem.value = 'xhehfdl777@google.com';
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
}
