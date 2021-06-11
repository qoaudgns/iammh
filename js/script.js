function go(url)
{
	window.open(url);
}


function clickEmail(){
    alert('복사되었습니다.');
    var tempElem = document.createElement('textarea');
    tempElem.value = 'wjdwlgus96@google.com';
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
}