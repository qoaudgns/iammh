function go(url)
{
	window.open(url);
}


function clickEmail(){
    alert('����Ǿ����ϴ�.');
    var tempElem = document.createElement('textarea');
    tempElem.value = 'wjdwlgus96@google.com';
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
}