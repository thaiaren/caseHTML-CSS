var elements = document.querySelectorAll('.popular-content');

var optionsArray = [
    {
        autoplay: {
            delay: 4000,
            disableOnInteration: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // khi màn hình 320 thì hiện 2 ảnh và khoảng cách là 10px

            320: {
                slidesPerView: 2,
                spacebetween: 10,
            },
            510: {
                slidesPerView: 2,
                spacebetween: 10,
            },
            758: {
                slidesPerView: 3,
                spacebetween: 15,
            },
            900: {
                slidesPerView: 4,
                spacebetween: 20,
            },
        },
    },
];

for (var i = 0; i < elements.length; i++) {
    var swiper = new Swiper(elements[i], optionsArray[i]);
}

const videoModule = (function () {
    let video = document.querySelector('.video-container');
    let videotrailer = document.querySelector('.video-trailer');
    let playbutton = document.querySelector('.watch-btn');

    let playmovie = document.querySelector('.watch-movie');
    let playtrailer = document.querySelector('.watch-trailer');
    let mytrailer = document.querySelector('#trailer');
    let myvideo = document.querySelector('#video');
    let closebtn = document.querySelector('.close-video');
    let closetrailer = document.querySelector('.fa-xmark');
    console.log(document.body);

    function addClickEvent() {
        playbutton.onclick = function (e) {
            video.classList.add('show-video');
            myvideo.play();
        };
        playmovie.onclick = function () {
            video.classList.add('show-video');
            myvideo.play();
        };
        closebtn.onclick = function () {
            video.classList.remove('show-video');
            myvideo.pause();
        };
        playtrailer.onclick = function () {
            videotrailer.classList.add('show-trailer');
            mytrailer.play();
        };
        closetrailer.onclick = function () {
            videotrailer.classList.remove('show-trailer');
            mytrailer.pause();
        };
    }
    window.addEventListener('DOMContentLoaded', addClickEvent);
})();

/////

class Moviee {
    constructor(id, photo, name, linkMovie) {
        this.id = id;
        this.photo = photo;
        this.name = name;
        this.linkMovie = linkMovie;
    }
}
let movies = [
    new Moviee(
        1,
        './play-page/avengers_2/avengers-end.jpg',
        'Avengers 4: Hồi Kết',
        'avengers_2.html',
    ),
    new Moviee(
        2,
        './play-page/avenger-1/avengers.jpg',
        'Avengers 3 : cuộc chiến vô cực',
        'avengers_1.html',
    ),
    new Moviee(
        3,
        './play-page/transformer/transformer.webp',
        'Transformer 5: Chiến Binh Cuối Cùng',
        'transformer.html',
    ),
    new Moviee(
        4,
        './play-page/black-adam/black-dam-img.webp',
        'Black Adam',
        'blackAdam.html',
    ),
    new Moviee(
        5,
        './play-page/deadpool/img-deadpool.jpeg',
        'Deadpool',
        'deadpool.html',
    ),
    new Moviee(
        6,
        './play-page/MoonKnight/moon.jpg',
        'Hiệp Sĩ Mặt Trăng',
        'moonKnight.html',
    ),
    new Moviee(7, './play-page/venom/venom1.jpg', 'Venom', 'venom.html'),
    new Moviee(
        8,
        'play-page/docter/doctor1.jpg',
        'Doctor Strange 2',
        'doctor.html',
    ),
    new Moviee(
        9,
        './play-page/deadpool/img-deadpool.jpeg',
        'Deadpool',
        'deadpool.html',
    ),
    new Moviee(
        10,
        './play-page/black-adam/black-dam-img.webp',
        'Black Adam',
        'blackAdam.html',
    ),
];
let list = document.querySelector('.movies-content');

if (list) {
    function waterss() {
        list.innerHTML = '';
        for (let i = 0; i < movies.length; i++) {
            list.innerHTML += `
        <div class="movie-box">
            <img src="${movies[i].photo} " alt="" class="movie-box-img">
            <div class="box-text">
                <h2 class="movie-title">${movies[i].name} </h2>
                <span class="movie-type">Acdion</span>
                <a href="${movies[i].linkMovie}" class="watch-btn play-btn">
                    <i class="fa-solid fa-play"></i>
                </a>
            </div>
        </div>`;
        }
    }
    waterss();
}

function remove(id) {
    let confirm = window.confirm('Are you sure to remove this vendor?');
    if (confirm == true) {
        movies = movies.filter(function (movie) {
            return movie.id != id;
            // nếu khác id sẽ ko bị xoá
        });
        waterss();
    }
}

function addRemove() {
    let icons = document.querySelectorAll('.fa-regular');
    icons.forEach(function (icon) {
        icon.style.display = 'block';
    });
}

let icon = document.querySelector('.fa-heart');
icon.addEventListener('click', function () {
    let icons = document.querySelectorAll('.fa-regular');
    icons.forEach(function (icon) {
        icon.style.display = 'block';
    });
});

// icon

let iconMenu = document.querySelector('.toggle-icon');
let toogle = document.querySelector('.toogle-box');
let toggleList = document.querySelector('.list-toogle');
let iconSeach = document.querySelector('.icon-seach');
let iconOnSeach = document.querySelector('.icon-on-input');
let iconOffSeach = document.querySelector('.icon-off-input');
let seachBox = document.querySelector('.seach-box');

// const handelActive = (e) => {

// };
iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
    toogle.classList.toggle('active');
    toggleList.classList.toggle('active');
});
const handelIconInput = (e) => {
    iconOnSeach.classList.toggle('active');
    iconOffSeach.classList.toggle('active');
    seachBox.classList.toggle('active');
};
iconSeach.addEventListener('click', handelIconInput);

// show text

let showText = document.querySelector('.show-text');
let infoContentMovie = document.querySelector('.text-info');

const handelShowText = (e) => {
    infoContentMovie.classList.toggle('active');
    if (document.querySelector('.text-info.active')) {
        e.target.innerText = 'Thu gọn';
    } else {
        e.target.innerText = '...xem thêm';
    }
};
showText.addEventListener('click', handelShowText);
