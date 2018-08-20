console.log("Let's get started!");

//call modal----------------
function callModal () {
    var modal = document.getElementById('myModal');
    var img = document.getElementById('1stcarou');
    var modalImg = document.getElementById("img01");
    
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    var span = document.getElementsByClassName("close")[0];

    //  close modal on X
    span.onclick = function() { 
        modal.style.display = "none";
    }
};
callModal();
//end of modal ---------------------

//form validation ------------------
function formVal () {
$('.form-content-container').on('submit', function (event) { 
        event.preventDefault();
        $('form input').each(function () {
            if ($(this).val() == false) {
                $(this).addClass('error');
                $(this).siblings('.error-message').fadeIn(600);
            } else {
                $(this).removeClass('error');
                $(this).siblings('.error-message').fadeOut(600);
            }
        });

        $('form textarea').each(function () {
            if ($(this).val() == false) {
                $(this).addClass('error');
                $(this).siblings('.error-message').fadeIn(600);
            } else {
                $(this).removeClass('error');
                $(this).siblings('.error-message').fadeOut(600);
            }
        });
    })
}

formVal();
//end of form validation --------------------------

//nav bar smoothscrolling
//shelved the horizontal one for now

function smoothScoll () {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');
    for (anchorlinks) {
        item.addEvent/addEventListener('click', (e) => {


        })
    }
}

smoothScoll();


$('nav, ul, li').each.on('click', function() {
    $(this).addClass('underline');
})