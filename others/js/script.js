window.addEventListener('scroll', function(){
    let docHeight = window.pageYOffset;
    let navBar = document.getElementById('myNavbar');
    let toggleIcon = document.getElementById('toggleIcon');
    let navList1 = document.getElementById('navList1');
    let navList2 = document.getElementById('navList2');
    let navList3 = document.getElementById('navList3');
    let navList4 = document.getElementById('navList4');
    if(docHeight > 150){
        navBar.style.backgroundColor = '#fff';
        toggleIcon.style.fill = '#12c730';
        navList1.style.color = '#12c730';
        navList2.style.color = '#12c730';
        navList3.style.color = '#12c730';
        navList4.style.color = '#12c730';
    }else{
        navBar.style.backgroundColor = 'transparent';
        toggleIcon.style.fill = '#fff';
        navList1.style.color = '#fff';
        navList2.style.color = '#fff';
        navList3.style.color = '#fff';
        navList4.style.color = '#fff';
    }
})