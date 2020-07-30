/*(function() {
 	$("select#cboSearch").uniform();
})();*/

//Added by ZHL for Google Search
function googleClick(curform) {
    var w = document.getElementById("drop").selectedIndex;
    var varDrop = document.getElementById("drop").options[w].value;
    var selectedSiteSearch = varDrop;
    var varq = document.getElementById("TextBoxSearch").value;    
    if (selectedSiteSearch.match('SearchInAllGovSites'))
        window.open("http://www.google.com/cse?cx=002491684983675547216%3Ayq6bsv30iie&ie=UTF-8&q=" + varq);
    else
        window.open("http://www.google.com/cse?cx=002491684983675547216%3Acwfosargcxc&ie=UTF-8&q=" + varq);
}
function ShowSearch() {
    document.writeln("<ul id='brandingsearch'>");
    document.writeln("<li><p class='lblsearch'>Search</p> <input type='text' name='TextBoxSearch' id='TextBoxSearch' onKeydown='Javascript: if(event.keyCode==13) {googleClick(this);return false;}' /></li>");
    document.writeln("<li class='searchselect'><select name='drop' id='drop'>");
    document.writeln("<option value='SearchWithinThisSite' selected='selected'>Within AGD website</option>");
    document.writeln("<option value='SearchInAllGovSites'>Within All Singapore Gov Websites</option>");
    document.writeln("</select>");
    document.writeln("</li><li><a href='#' id='goSearch' onclick='javascript: googleClick(this)'>Go</a></li></ul>");
}