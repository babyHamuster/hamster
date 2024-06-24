$(document).ready(function(){
        const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_prev',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_next',  
        },
    });

        const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 24, 
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
     });

     /* 스크롤을 내리면 header에 fixed 클래스를 추가 
        스크롤이 맨 위에 있을때는 fixed 클래스 삭제
                조금이라도 내려오면 fixed 클래스 추가
        브라우저가 스크롤 된 정도를 체크하는 값.....
        $(window).scrollTop()
        맨 위 0
        스크롤을 내리면 상단에서부터 스크롤 한 만큼 출력

        $(window).scrollTop()이 0이면 fixed 삭제
                                0보다 크면 fixed 추가
        
     */
     $(window).scroll(function(){//브라우저가 스크롤 될때마다 실행
        $(window).scrollTop()
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed')
            /* header태그에 fixed 클래스를 추가 */
        }else{ //그외 전부 (0일때)
            $('header').removeClass('fixed')
            /* header태그에 fixed 클래스를 삭제 */
        }//if
     })//scroll

     /*
        .interview .list ul li
        오버한 li에만 on클래스를 주고
        이전에 오버했던 li에는 on클래스를 삭제

     */
})//documant.ready