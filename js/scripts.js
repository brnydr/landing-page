window.onload = function() {
    let lightmode = document.getElementById('lightmode');
    let darkmode = document.getElementById('darkmode');
    let interests = document.getElementById('interests');
    let aboutMe = document.getElementById('aboutMe');
    let projects = document.getElementById('projects');
    let nameAndImage = document.getElementById('nameAndImage');
    let background = document.getElementById('background');

    
    lightmode.onclick = function() {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        interests.classList.add('boxborders');
        interests.classList.remove('darkmode');
        aboutMe.classList.add('boxborders');
        aboutMe.classList.remove('darkmode');
        projects.classList.add('boxborders');
        projects.classList.remove('darkmode');
        nameAndImage.classList.add('boxborders');
        nameAndImage.classList.remove('darkmode');
        background.classList.add('boxborders');
        background.classList.remove('darkmode');

    };
    
    darkmode.onclick = function() {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        interests.classList.add('darkmode');
        interests.classList.remove('boxborders');
        aboutMe.classList.add('darkmode');
        aboutMe.classList.remove('boxborders');
        projects.classList.add('darkmode');
        projects.classList.remove('boxborders');
        nameAndImage.classList.add('darkmode');
        nameAndImage.classList.remove('boxborders');
        background.classList.add('darkmode');
        background.classList.remove('boxborders');

    };
};