
document.querySelector('.section-btn').addEventListener('click', (e) => {
    e.preventDefault();
    sectionNavigator('home'); // Assuming you have a function handling section navigation
});



const slideNavigator = name =>{
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide=>{
        slide.classList.remove('active');
        if (slide.classList.contains(name)){
            slide.classList.add('active');
        }
    });
};



window.addEventListener('load',()=>{
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn =>{
        btn.addEventListener('click', function (e){
            e.preventDefault();
            slideBtnList.forEach(el=>{
                el.classList.remove('active');
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});

const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelectorAll('header');
    sections.forEach(section =>{
        section.classList.remove('section-show');
        if (section.classList.contains(name)) {
            section.classList.add('section-show');
            header.classList.add('active');
        }
    });
};

// window.addEventListener('load', () =>{
//     const navList = document.querySelectorAll('.about1');
//     navList.forEach(nav => {
//         nav.addEventListener('click', function (e) {
//             e.preventDefault();
//             navList.forEach(el => {
//                 el.classList.remove('active');
//             });
//             this.classList.add('active');
//             sectionNavigator(this.getAttribute('data-target'));
//             screen.width < 768 && toggleMenu();
//         });
//     });
// });


window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.about1 , .contact1');

    navList.forEach(nav => {
        nav.addEventListener('click', function (e) {
            e.preventDefault();

            // Check if the clicked button is already active
            if (this.classList.contains('active')) {
                this.classList.remove('active'); // Remove active state if clicked again
                sectionNavigator('home'); // Navigate back to home or previous section
            } else {
                navList.forEach(el => el.classList.remove('active')); // Remove active from others
                this.classList.add('active'); // Make the clicked button active
                sectionNavigator(this.getAttribute('data-target')); // Navigate to "About"
            }

            screen.width < 768 && toggleMenu();
        });
    });
});


const resetHeader = () => {
    let header = document.querySelectorAll('header');
    header.classList.remove('active');
};

const initNavigation = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'about') {
            el.classList.add('active');
        }
    });
    sectionNavigator('about');
};

const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
};