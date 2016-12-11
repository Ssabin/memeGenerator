var translates={
    'Search': 'חיפוש',
    'Memes': 'ממים',
    'About': 'אודותינו',
    'Contact': 'צור קשר',
    'Hebrew': 'עברית',
    'English': 'אנגלית',
    'Search for Meme by keyword': 'חפש ממ לפי מילת מפתח',
    'Search for Meme by img URL': 'חפש ממ לפי שורת כתובת',
    'Top Text': 'טקסט עליון',
    'Bottom Text': 'טקסט תחתון',
    'Sahar Sabin': 'סהר סבין',
    'Itai Kushmar': 'איתי קושמר',
    'Get in Touch': 'צור קשר',
    'In order to get in touch use the contact form below:': 'כדי ליצור קשר מלא את הטופס:',
}

function pageLang() {
    var langParam = getParamFromURL('lang');

    if (langParam === 'he') {
        // $('body').css('direction','rtl');
        var x = document.querySelectorAll('[data-translate]');
        x.forEach(function (element, index) {
            var text = element.innerText;
            if (translates[text]) {
                element.innerText = translates[text];
            }
        });
    }
}

function getParamFromURL(name) {
    var url = window.location.href;
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if(!results) return;
    var paramVal = results[2];
    return paramVal;
}