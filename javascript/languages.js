var lang;
var arrLang = {
    'en' : {
                'home': 'HOME',
                'button': 'Languages',
                'english': 'EN',
                'lithuanian': 'LT',
                'equipment': 'Equipment',
                'gallery': 'Gallery',
                'contact': 'Contact Us',
                'rights': '@ 2020 Created by',
                'right-col': 'Our Newsletter',
                'border': 'Enter your Email to get news on the latest equipment.',
                'email_holder': 'Enter Your Email',
                'a': 'Cameras',
                'b': 'Memory Cards',
                'c': 'Microphones',
                'd': 'Flashes',
                'e': 'Stabilizers',
                'f': 'Other Equipment',
                'name-holder': 'Name',
                'subject-holder': 'Subject',
                'phone-holder': 'Phone',
                'emaill=holder': 'Email',
                'message-holder': 'Message',
                'description': 'DESCRIPTION',
                'about1': 'Higher resolution. Higher speed. Greater versatility. Pure potential for stills and video. Witness the next stage in evolution for high-resolution photography. The D850 does not simply surpass the incredible image quality of the D810, with 45.7 effective megapixels and ISO sensitivity from 64-25600. It pairs these with a new level of versatile and uncompromising performance, including continuous shooting speeds of 7 fps (up to 9 fps with the optional MB-D18 Multi-Power Battery Pack*1) and the 153-point AF system used in the flagship D5.',
                'about2': 'New standards in high resolution stills, and phenomenal 8K video quality to match. The EOS R5 advances image quality to a whole new level for stills and movies with a blistering 20fps electronic shutter or 12fps mechanically. The EOS R5 is accomplished, refined and built for magnificence.',
                'about3': 'This year marks the 10th anniversary of Panasonic Lumix digital camera brand which makes it an appropriate year for launching some exciting new products. One of those is the Panasonic Lumix G5, the ninth model in the G-series which introduced the world to the Micro Four Thirds standard and mirrorless system cameras in the shape of the DMC-G1, in 2008.'
                    },
            'lt' : {
                'home': 'Pagrindinis',
                'button': 'Kalbos',
                'english': 'EN',
                'lithuanian': 'LT',
                'equipment': 'Įranga',
                'gallery': 'Galerija',
                'contact': 'Susisiekite',
                'rights': '@ 2020 Sukurta',
                'right-col': 'Mūsų Žiniaraštis',
                'border': 'Įveskite savo el. paštą ir gautkite naujienas apie įvairiausią įrangą',
                'email_holder': 'Įveskite savo slaptažodį',
                'a': 'Fotoaparatai',
                'b': 'Atmintinės',
                'd': 'Blykstės',
                'e': 'Stabilizatoriai',
                'f': 'Kita Įranga',
                'c': 'Mikrofonai',
                'name-holder': 'Vardas',
                'subject-holder': 'Kokiu klausimu kreipiatės',
                'phone-holder': 'Telefono numeris',
                'emaill-holder': 'El. paštas',
                'message-holder': 'Jūsų žinutė',
                'description': 'APRAŠYMAS',
                'about1': 'Aukštesnė skiriamoji geba. Didesnis greitis. Didesnis universalumas. Grynas nuotraukų ir vaizdo įrašų potencialas. Liudykite kitą didelės raiškos fotografijos evoliucijos etapą. „D850“ ne tik pralenkia neįtikėtiną „D810“ vaizdo kokybę, kai 45,7 efektyvių megapikselių ir ISO jautrumas yra 64–265600. Tai suporuoja su nauju universalumo ir bekompromisio našumo lygiu, įskaitant nepertraukiamą fotografavimo greitį 7 kadrai per sekundę (iki 9 kadrų per sekundę su pasirenkama MB-D18 daugialypės galios akumuliatoriaus pakuote * 1) ir 153 taškų AF sistemą, naudojamą flagmane. D5.',
                'about2': 'Nauji standartai aukštos skiriamosios gebos nuotraukose ir fenomenali 8K vaizdo kokybė. „EOS R5“ padidina vaizdo kokybę iki visiškai naujo lygio nuotraukoms ir filmams, naudojant pūslę turinčią 20 kadrų per sekundę arba 12 kadrų per sekundę automatinę užraktą. „EOS R5“ yra sukurtas, patobulintas ir sukurtas didingumui.',
                'about3': 'Šiais metais sukanka 10 metų nuo „Panasonic“ skaitmeninių fotoaparatų prekės ženklo sukakties, todėl šie metai yra tinkami naujų produktų pristatymui. Vienas tokių - „Panasonic Lumix G5“, devintasis G serijos modelis, kuris 2008 m. Pasauliui pristatė „Micro Four Thirds“ standartines kameras ir veidrodžių be veidrodžių, kurios forma yra „DMC-G1“.'
            }
};
$(function(){
     $('.dropdown-item').click(function(){
        localStorage.setItem(lang, $(this).attr('id'))
        window.location.reload()
    });
    $('.nav-links').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.nav').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.dropdown-item').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.dropdown').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.dropdown-menu').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.but').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.rights-text').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.a').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.e').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
     $('[data-translate]').each(function(index, element){
        $(this).attr('placeholder', arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.title').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.description').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.about').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
