document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.icon-button');
    const userButton = document.querySelector('.user-button');
    const userForm = document.querySelector('.user-form');
    const contentButtons = document.querySelectorAll('.end-button');

    // end-button
    const icon = document.querySelector('.icon-button .fa-sun');


    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    userButton.addEventListener('click', () => {
        console.log(userForm)
        if (userForm.classList.contains('show-user-form')) {
            userForm.classList.remove('show-user-form');
        } else {
            userForm.classList.add('show-user-form');
        }
    })

    contentButtons[0].children[0].addEventListener('click', () => {
        console.log(contentButtons)

        alert("saqlandi!")
        userForm.classList.remove('show-user-form');
    })

    
    contentButtons[0].children[1].addEventListener('click', () => {
        console.log(contentButtons)

        userForm.classList.remove('show-user-form');
    })
});

function search() {
    const searchInput = document.getElementById('searchInput').value.trim();

    if (!searchInput) {
        alert("Iltimos, qidiruv sozini kiriting!");
        return;
    }

    const elements = Array.from(document.body.querySelectorAll('*'));
    let found = false;

    elements.forEach((element) => {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
            const text = element.textContent;
            const searchRegex = new RegExp(searchInput, 'gi');

            element.innerHTML = element.innerHTML.replace(/<span style="background-color: yellow;">(.*?)<\/span>/g, '$1');

            if (searchRegex.test(text)) {
                found = true;

                element.innerHTML = text.replace(searchRegex, (match) => {
                    return `<span style="background-color: yellow;">${match}</span>`;
                });

                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    if (!found) {
        alert("Qidirilgan so'z topilmadi!");
    }

    console.log(`Qidiruv so'zi: ${searchInput}`);
}


