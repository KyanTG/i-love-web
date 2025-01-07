console.log('workie')

const LALA = document.querySelector('button')

// LALA.addEventListener('click', function(){

//     console.log('hahahaha') })

LALA.addEventListener('click', moveParagraph)

function moveParagraph() {
    
    const p = document.querySelector('p')

    p.classList.toggle('moveit')

    // change custom properties
    p.style.setProperty('--opa', 1)
}

// conventions
// use a named callback function instead of a anymous function
// use meaningful names for variables and functions
// never set styling directly from javascript, pass values through a custom property
// always use an button to trigger an action