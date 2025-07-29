/* It is the main class for the application , every js is called from here*/
const param = new params();
class Main {
    constructor() {
        // this.howToGeitFlagAnimation = false;
        // this.millisecondIntervalAnimation = 6000;
        // this.intervalFunct;
        // this.indexAnimation = 0;
        // this.isHovered = false;
        // this.slideActive = 'remodel';
        // this.slides = [
        //     'remodel',
        //     'buyit',
        //     'pack'
        // ];
        // this.title = [
        //     {
        //         lineOne: 'Remodela tu casa',
        //         lineTwo: 'y estrena hoy mismo'
        //     },
        //     {
        //         lineOne: 'Compra eso que',
        //         lineTwo: 'siempre has querido'
        //     },
        //     {
        //         lineOne: 'Empaca tus maletas y',
        //         lineTwo: 'viaja donde quieras'
        //     }
        // ]
        //this.remodelAnimation();
        this.detectScroll();
        this.urlParamSimulator = param.urlParamSimulator;
        this.urlParamFlew = param.urlParamFlew;
        this.urlPreAuth = param.urlPreAuth;
        this.tagManager = param.tagManager;
        this.addingScripts();
        this.changeHref();
        //this.setIntervalAnimation();
        this.slideCookie();
    }

    changeHref(){
        if (this.screemWidth > 766){
            document.getElementById('whatweofferlink').href = '#needandoffer';
        }
    }

    redirectSimulator(){
        let params = new URL(window.location.href).searchParams;
        window.location.href = `${this.urlParamSimulator}?${params}`;
    }
    
    redirectToApp(){
        window.location.href = this.determinateRedirection();
    }

    setIntervalAnimation(){
        this.intervalFunct  =  this.intervalInit;
        window.addEventListener('mousemove', (e) => {
            this.isHovered = this.isHover(document.getElementsByClassName('bg-img')[0]);
            if (this.isHovered){
                clearInterval(this.intervalFunct);
            } else {
                clearInterval(this.intervalFunct);
                this.intervalFunct = this.intervalInit;
            }
        })

    }
    isHover(e) {
        return (e.parentElement.querySelector(':hover') === e);
    }

    get intervalInit(){
        return setInterval(() => {
            this.indexAnimation++;
            this.controlSlides(this.slides[this.indexAnimation]);
            if (this.indexAnimation === (this.slides.length - 1)){
                this.indexAnimation = -1;
            }
        }, this.millisecondIntervalAnimation)
    }

    addingScripts(){
        let params = new URL(window.location.href).searchParams;
        if (!params.get('from_launcher') || params.get('from_launcher') == 'false' ){
            var tagMgr = document.createElement('script');
            var head = document.getElementsByTagName('head')[0];

            tagMgr.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':" +
                "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]," +
                "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=" +
                "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);" +
                `})(window,document,'script','dataLayer','`+this.tagManager+`');`;

            head.appendChild(tagMgr);
        }
    }

    redirectGooglePlay(){
        window.open('https://play.google.com/store/apps/details?id=com.bancodebogota.bancamovil', '_blank');
    }
    redirectIos(){
        window.open('https://itunes.apple.com/co/app/banco-de-bogot%C3%A1/id741196012?mt=8', '_blank');
    }

    /**
     *
     * @param {*} id
     * @param {*} idTri id which contains the triangule
     */
    openFaq(id, idTri) {
        let height = document.getElementById(id).style.maxHeight;
        let documents = document.getElementsByClassName('item-faq__description');
        let tri = document.getElementsByClassName('questiontri__tri--normal');
        /*Hiding every tab opened*/
        for (let index = 0; index < documents.length; index++) {
            document.getElementById(documents[index].id).style.maxHeight = '0';
        }
        for (let index = 0; index < tri.length; index++) {
            document.getElementById(tri[index].id).style.transform = 'rotate(225deg)';
        }

        if (!height || height === '0px') {
            /*We open the tab description and rotate the row*/
            document.getElementById(id).style.maxHeight = '200px';
            document.getElementById(idTri).style.transform = 'rotate(45deg)';
        } else {
            document.getElementById(id).style.maxHeight = '0';
            document.getElementById(idTri).style.transform = 'rotate(225deg)';
        }
    }
    /**
     * Method for initialize the slide images 'remodel'
     */
    remodelAnimation() {
        this.hideAllSlides();
        this.animationMainText();
        document.getElementById('title_line_one').innerHTML = this.title[0].lineOne;
        document.getElementById('title_line_two').innerHTML = this.title[0].lineTwo;
        document.getElementById(this.slides[0]).style.display = 'block';
        document.getElementsByClassName('bg-img__bg')[0].className = 'bg-img__bg remodel-animation-hide';
            document.getElementsByClassName('bg-img__img-reference')[0].className = 'bg-img__img-reference remodel-animation-hide';
            document.getElementsByClassName('bg-img__sofa')[0].className = 'bg-img__sofa remodel-animation-hide';
            document.getElementsByClassName('bg-img__lamp-2')[0].className = 'bg-img__lamp-2 remodel-animation-hide';
            document.getElementsByClassName('bg-img__lamp')[0].className = 'bg-img__lamp remodel-animation-hide';
        setTimeout(() => {
            document.getElementsByClassName('bg-img__img-reference')[0].className = 'bg-img__img-reference remodel-animation-show';
            setTimeout(() => {
                document.getElementsByClassName('bg-img__bg')[0].className = 'bg-img__bg remodel-animation-show';
                document.getElementsByClassName('bg-img__sofa')[0].className = 'bg-img__sofa remodel-animation-show';
                document.getElementsByClassName('bg-img__lamp-2')[0].className = 'bg-img__lamp-2 remodel-animation-show';
                setTimeout(() => {
                    document.getElementsByClassName('bg-img__lamp')[0].className = 'bg-img__lamp remodel-animation-show';
                }, 500);
            }, 500);
        }, 500);

    }

    animationMainText(){
        let documents = document.getElementsByClassName('text__title--normal');
        for (let index = 0; index < documents.length; index++) {
            setTimeout(() => {
                documents[index].style.position = 'relative';
                documents[index].style.opacity = '0';
            }, 1);
        }
        for (let index = 0; index < documents.length; index++) {
            setTimeout(() => {
                documents[index].style.top = '-200px';
                documents[index].style.height = '0';
            }, 1);
        }
        for (let index = 0; index < documents.length; index++) {
            setTimeout(() => {
                documents[index].style.height = 'auto';
                documents[index].style.top = '0';
                documents[index].style.opacity = '1';
            }, 800);
        }
    }
    buyitAnimation(){
        this.hideAllSlides();
        this.animationMainText();
        document.getElementById('title_line_one').innerHTML = this.title[1].lineOne;
        document.getElementById('title_line_two').innerHTML = this.title[1].lineTwo;
        document.getElementById(this.slides[1]).style.display = 'block';
        document.getElementsByClassName('bg-img__bg-buy-it')[0].className = 'bg-img__bg-buy-it buy-it-hide';
        document.getElementsByClassName('bg-img__referece-buy-it')[0].className = 'bg-img__referece-buy-it bg-img__bg-buy-it buy-it-hide';
        document.getElementsByClassName('bg-img__beach')[0].className = 'bg-img__beach buy-it-hide';
        document.getElementsByClassName('bg-img__palm-tree')[0].className = 'bg-img__palm-tree buy-it-hide';
        document.getElementsByClassName('bg-img__sun')[0].className = 'bg-img__sun  buy-it-hide';
        document.getElementsByClassName('bg-img__cloud')[0].className = 'bg-img__cloud buy-it-hide';
        document.getElementsByClassName('bg-img__star')[0].className = 'bg-img__star buy-it-hide';
        setTimeout(() => {
            document.getElementsByClassName('bg-img__bg-buy-it')[0].className = 'bg-img__bg-buy-it buy-it-show';
            document.getElementsByClassName('bg-img__referece-buy-it')[0].className = 'bg-img__referece-buy-it buy-it-show';
            document.getElementsByClassName('bg-img__beach')[0].className = 'bg-img__beach buy-it-show';
            setTimeout(() => {
                document.getElementsByClassName('bg-img__palm-tree')[0].className = 'bg-img__palm-tree buy-it-show';
            }, 500);
            document.getElementsByClassName('bg-img__sun')[0].className = 'bg-img__sun  buy-it-show';
            document.getElementsByClassName('bg-img__cloud')[0].className = 'bg-img__cloud buy-it-show';
            document.getElementsByClassName('bg-img__star')[0].className = 'bg-img__star buy-it-show';
        }, 500);
    }

    packAnimation(){
        this.hideAllSlides();
        this.animationMainText();
        document.getElementById('title_line_one').innerHTML = this.title[2].lineOne;
        document.getElementById('title_line_two').innerHTML = this.title[2].lineTwo;
        document.getElementById(this.slides[2]).style.display = 'block';
        document.getElementsByClassName('bg-img__bg-trips')[0].className = 'bg-img__bg-trips trips-animation-hide';
        document.getElementsByClassName('bg-img__beach-trip')[0].className = 'bg-img__beach-trip trips-animation-hide';
        document.getElementsByClassName('bg-img__reference-trip')[0].className = 'bg-img__reference-trip trips-animation-hide';
        document.getElementsByClassName('bg-img__birds-trip')[0].className = 'bg-img__birds-trip trips-animation-hide';
        document.getElementsByClassName('bg-img__bush-trip-s')[0].className = 'bg-img__bush-trip-s trips-animation-hide';
        document.getElementsByClassName('bg-img__bush-trip-f')[0].className = 'bg-img__bush-trip-f  trips-animation-hide';
        document.getElementsByClassName('bg-img__tree-trip-s')[0].className = 'bg-img__tree-trip-s trips-animation-hide';
        document.getElementsByClassName('bg-img__tree-trip-f')[0].className = 'bg-img__tree-trip-f trips-animation-hide';
        document.getElementsByClassName('bg-img__cloud-trip')[0].className = 'bg-img__cloud-trip trips-animation-hide';
        document.getElementsByClassName('bg-img__sun-trip')[0].className = 'bg-img__sun-trip trips-animation-hide';
        document.getElementsByClassName('bg-img__bg-trips')[0].className = 'bg-img__bg-trips trips-animation-hide';
        setTimeout(() => {
            document.getElementsByClassName('bg-img__bg-trips')[0].className = 'bg-img__bg-trips trips-animation-show';
            document.getElementsByClassName('bg-img__beach-trip')[0].className = 'bg-img__beach-trip trips-animation-show';
            setTimeout(() => {
                document.getElementsByClassName('bg-img__reference-trip')[0].className = 'bg-img__reference-trip trips-animation-show';
                document.getElementsByClassName('bg-img__birds-trip')[0].className = 'bg-img__birds-trip trips-animation-show';
                document.getElementsByClassName('bg-img__cloud-trip')[0].className = 'bg-img__cloud-trip trips-animation-show';
                setTimeout(() => {
                    document.getElementsByClassName('bg-img__sun-trip')[0].className = 'bg-img__sun-trip trips-animation-show';
                }, 300);
            }, 200);
            setTimeout(() => {
                document.getElementsByClassName('bg-img__bush-trip-s')[0].className = 'bg-img__bush-trip-s trips-animation-show';
                document.getElementsByClassName('bg-img__tree-trip-s')[0].className = 'bg-img__tree-trip-s trips-animation-show';
                setTimeout(() => {
                    document.getElementsByClassName('bg-img__bush-trip-f')[0].className = 'bg-img__bush-trip-f  trips-animation-show';
                    document.getElementsByClassName('bg-img__tree-trip-f')[0].className = 'bg-img__tree-trip-f trips-animation-show';
                }, 500);
            }, 500);
        }, 500);

    }

    howToGetItAnimation(){
        if (!this.howToGeitFlagAnimation){
            this.howToGeitFlagAnimation = true;
            document.getElementsByClassName('wrapper__block-img')[0].style.position = 'relative';
            document.getElementById('wrapper-m').className = 'wrapper__block-item how-to-get-it-animation-hide';
            document.getElementsByClassName('img__main')[0].className = 'img__main how-to-get-it-animation-hide';
            document.getElementsByClassName('img__main')[1].className = 'img__main how-to-get-it-animation-hide';
            document.getElementsByClassName('img__pillow')[0].className = 'img__pillow how-to-get-it-animation-hide';
            document.getElementsByClassName('img__pillow')[1].className = 'img__pillow how-to-get-it-animation-hide';
            document.getElementsByClassName('img__bg')[0].className = 'img__bg how-to-get-it-animation-hide';
            document.getElementsByClassName('img__bg')[1].className = 'img__bg how-to-get-it-animation-hide';
            document.getElementsByClassName('wrapper-d')[0].className = 'wrapper-d how-to-get-it-animation-hide';
            document.getElementsByClassName('img__clock')[0].className = 'img__clock how-to-get-it-animation-hide';
            document.getElementsByClassName('img__clock')[1].className = 'img__clock how-to-get-it-animation-hide';
            document.getElementsByClassName('wrapper-text')[0].className = 'wrapper-text how-to-get-it-animation-hide';
            setTimeout(() => {
                document.getElementsByClassName('wrapper-text')[0].className = 'wrapper-text how-to-get-it-animation-show';
                document.getElementById('wrapper-m').className = 'wrapper__block-item how-to-get-it-animation-show';
                document.getElementsByClassName('img__clock')[0].className = 'img__clock how-to-get-it-animation-show';
                document.getElementsByClassName('img__clock')[1].className = 'img__clock how-to-get-it-animation-show';
                setTimeout(() => {
                    document.getElementsByClassName('wrapper-d')[0].className = 'wrapper-d how-to-get-it-animation-show';
                }, 500);
                document.getElementsByClassName('wrapper__block-img')[0].style.opacity = '1';
                document.getElementsByClassName('wrapper__block-img')[0].style.bottom = '0';
                document.getElementsByClassName('img__main')[0].className = 'img__main how-to-get-it-animation-show';
                document.getElementsByClassName('img__main')[1].className = 'img__main how-to-get-it-animation-show';
                document.getElementsByClassName('img__pillow')[0].className = 'img__pillow how-to-get-it-animation-show';
                document.getElementsByClassName('img__pillow')[1].className = 'img__pillow how-to-get-it-animation-show';
                document.getElementsByClassName('img__bg')[0].className = 'img__bg how-to-get-it-animation-show';
                document.getElementsByClassName('img__bg')[1].className = 'img__bg how-to-get-it-animation-show';
            }, 500);
        }
    }

    hideAllSlides(){
        this.slides.forEach((item) => {
            document.getElementById(item).style.display = 'none';
        })
    }

    /**
     * Showing button fixed
     */
    detectScroll() {
        window.addEventListener('scroll', (e) => {

            let a = e.srcElement.scrollingElement.scrollTop;
            let b = e.srcElement.scrollingElement.scrollHeight - window.pageYOffset;

            let c = Math.round(a / b * 100); // WE concert it to a percentage 1 to 100

            if (c >= 11 && c < 320) {
                document.getElementById('btn_fixed').style.display = 'block';
                document.getElementById('btn_fixed').style.position = 'fixed';
                // document.getElementById('btn_fixed').style.width = '100%';
                if (document.getElementById('btn_fixed').style.bottom > 0 || !document.getElementById('btn_fixed').style.bottom) {
                    document.getElementById('btn_fixed').style.bottom = '-100px';
                    setTimeout(() => {
                        document.getElementById('btn_fixed').style.bottom = '24px';
                    }, 500);
                }
            } else {
                document.getElementById('btn_fixed').style.display = 'none';
                document.getElementById('btn_fixed').style.position = 'unset';
            }
            if (c >= 40 && c < 140){
                this.howToGetItAnimation();
            }
            if (a > 10){
                document.getElementById('ovalAux').style.display = 'none';
            } else {
                document.getElementById('ovalAux').style.display = 'flex';
            }
        });
    }

    /**
     * Open the menu
     */
    manageMenu(param){
        if (param){
            document.getElementsByClassName('item-menu')[0].style.display = 'none';
            document.getElementById('menu-float').className = "menu-float menu-open";
            setTimeout(() => {
                document.getElementsByClassName('item-menu')[0].style.display = 'block';
            }, 300);
        } else {
            if (this.screemWidth > 996){
                return;
            }
            document.getElementById('menu-float').className = "menu-float menu-close";
            setTimeout(() => {
                document.getElementsByClassName('item-menu')[0].style.display = 'none';
            }, 100);

        }
    }

    /**
     * Control the slides presentation
     */
    controlSlides(param){
        this.slideActive = param;
        this.slides.forEach((item) => {
            document.getElementById(this.screemWidth > 996 ? `${item}PointD` : item + 'Point').className = 'points__oval--normal' ;
        })
        switch (this.slideActive) {
            case 'remodel':
            this.remodelAnimation();
            document.getElementById(this.screemWidth > 996 ? 'remodelPointD' : 'remodelPoint').className = 'points__oval--active';
            break;
            case 'buyit':
            this.buyitAnimation();
            document.getElementById(this.screemWidth > 996 ? 'buyitPointD' : 'buyitPoint').className = 'points__oval--active';
            break;
            case 'pack':
            document.getElementById(this.screemWidth > 996 ? 'packPointD' : 'packPoint').className = 'points__oval--active';
            this.packAnimation();
            break;
        }
    }

    slideCookie(){
        setTimeout(() => {
            var element = document.getElementById('cookie');
            element.classList.add('slide-top');
            document.getElementById('btn_fixed').style.bottom = '74px';
        }, 500);
    }

    closeCookie(){
        var element = document.getElementById('cookie');
        element.classList.add('slide-bck-bottom');
        document.getElementById('btn_fixed').style.bottom = '24px';
    }

    redirectCookies(){
        window.open('https://www.bancodebogota.com/wps/portal/banco-de-bogota/bogota/atencion-al-cliente/proteccion-al-consumidor/uso-de-cookies', '_blank');
    }

    get screemWidth(){
        return window.screen.width;
    }

    /**
     * determina la re-dirección por pre autenticación
    */
    determinateRedirection() {
        let fullUrl = window.location.href;
        if (this.getQueryParams(fullUrl) != null){
            let params = this.getQueryParams(fullUrl);
            let stringParams = this.getStringParams(params);
            fullUrl = `${this.urlParamFlew}?${stringParams}`;
            if(params["preauth"]) {
                fullUrl = `${this.urlPreAuth}?${stringParams}`;
            }
        }
        console.log("redireccionar hacia: ", fullUrl);
        return fullUrl;
    }

    /**
     * Retorna los parametros desde un objeto
    */
    getStringParams (newQueryVars) {
        let newUrl = "";
        for (var newQueryVar in newQueryVars) {
            newUrl += newQueryVar + "=" + newQueryVars[newQueryVar] + "&";
        }
        newUrl = newUrl.substring(0, newUrl.length-1);
        return newUrl
    }

    /**
     * Obtiene el parametro de la url que se le envia
    */
    getQueryParams(url) {
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    }

}
