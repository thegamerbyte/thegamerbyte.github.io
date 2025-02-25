document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons that will trigger the modals
    const buttons = document.querySelectorAll('.modal-trigger');
    const closeButtons = document.querySelectorAll('.close-button');

    // Function to open the modal with animations
    function openModal(event) {
        const modalId = event.target.getAttribute('data-modal'); // Get the modal ID from the button
        const modal = document.getElementById(modalId); // Find the modal by ID
        if (modal) {
            modal.style.display = 'flex'; // Use flex to center the content
            setTimeout(() => {
                modal.classList.add('modal-open');
            }, 10); // Small delay to allow display:flex to take effect before animation
        }
    }

    // Function to close the modal with animations
    function closeModal(event) {
        const modal = event.target.closest('.modal'); // Find the closest modal
        if (modal) {
            modal.classList.remove('modal-open');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match the duration of the fade-out animation
        }
    }

    // Add event listeners to all buttons to open the modal
    buttons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Add event listeners to all close buttons to close the modal
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event);
        }
    });
});