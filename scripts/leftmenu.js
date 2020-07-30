var What_Happening_arr = {
    'ag_appointment': '<a href="events_ag_appointment.html">AG Appointment</a>',
    'events_teambuilding2013': '<a href="events_teambuilding2013.html">AGD Team Building Day</a>',
    'events_ExchangeNov2013': '<a href="events_ExchangeNov2013.html">AGD Exchange 2013</a>',
    'events_advance2013': '<a href="events_advance2013.html">AGD Advance 2013</a>',
    'events_vfm': '<a href="events_vfm.html">Value-For-Money Focus Groups</a>',
    'events_ato': '<a href="events_ato.html">AGD conferred the Accredited Training Organisation status</a>',
    'events_dataAnalytics': '<a href="events_dataAnalytics.html">Data Analytics Discovery Workshop</a>',
    'events_jointforum': '<a href="events_jointforum.html">Joint Forum for Public Sector\'\s CFOs and IA Heads</a>',
    'events_nfsenhancement': '<a href="events_nfsenhancement.html">NFS@Gov Enhancement  New Alert Prompts for Duplicate Payments</a>',
    'events_capamawards': '<a href="events_capamawards.html">CLM Initiative named finalist for CAPAM award</a>',
    'events_launchofemc': '<a href="events_launchofemc.html">Launch of Electronic Medical Certificate</a>',
    'events_apecRussia2012': '<a href="events_apecRussia2012.html">AGD at APEC Seminars, Russia 2012</a>'
};

function loadLiMenu(pageUrl) {
    var strHtml = "";
    for (var p in What_Happening_arr) {
        if (p == pageUrl) {
            strHtml += "<li class='active'>" + What_Happening_arr[p] + "</li>";
        }
        else {
            strHtml += "<li>" + What_Happening_arr[p] + "</li>";
        }
    }
    document.getElementById('left').innerHTML = strHtml;
}

var topMenu = {
        'index' : '<a href="index.html" id="home"><img src="images/home_icon.png" alt="Home"/></a>',
        'about' :'<a id="about" href="about_overview.html">About AGD</a>',
        'service':'<a id="service" href="services_ar.html">Our Services</a>',
        'event':'<a id="event" href="events.html">Events & Updates</a>',
        'resources' : '<a id="resources" href="resources_clm.html">Resources</a>',
        'joinus' : '<a id="joinus" href="joinus_overview.html">Join Us</a>',
        'nfsgovupgrade':'<a id="nfsgovupgrade" href="nfsupgrade2013/index.html">NFS@Gov Upgrade</a>',
        'FI': '<a id="FI" href="FI_Gov/home.htm">Fi@Gov</a>'
};

function LoadTopMenu(pageUrl) {
    var strHtml = "";
    for (var p in topMenu) {
        if (p == pageUrl) {
            strHtml += "<li class='active'>" + topMenu[p] + "</li>";
        }
        else {
            strHtml += "<li>" + topMenu[p] + "</li>";
        }
    }
    document.getElementById('menu').innerHTML = strHtml;
  
}