document.addEventListener("DOMContentLoaded", function () {
    // Create the button
    const openDialogButton = document.createElement('button');
    openDialogButton.id = 'openDialogButton';
    openDialogButton.textContent = 'Open Dialog Box';

    // Append the button to the body
    document.body.appendChild(openDialogButton);

    // Add click event listener to the button
    openDialogButton.addEventListener('click', openDialog);
});

function openDialog() {
    const dialog = document.createElement('div');
    dialog.style.position = 'fixed';
    dialog.style.bottom = '20px';
    dialog.style.right = '20px';
    dialog.style.width = '300px';
    dialog.style.backgroundColor = '#ddd';
    dialog.style.border = '1px solid #ccc';
    dialog.style.borderRadius = '5px';
    dialog.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

    const content = document.createElement('div');
    content.style.padding = '20px';

    const form = document.createElement('form');
    form.id = 'dialog-form';

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    form.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    form.appendChild(emailInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function () {
        dialog.remove();
    });
    form.appendChild(closeButton);

    content.appendChild(form);
    dialog.appendChild(content);

    document.body.appendChild(dialog);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Name: ${name}\nEmail: ${email}`);
        dialog.remove();
    });
}
