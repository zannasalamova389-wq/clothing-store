// Ждем, пока страница загрузится
document.addEventListener("DOMContentLoaded", function() {
    
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');

    // Функция открытия окна
    window.openModal = function(title, price, imageSrc, description) {
        modalTitle.textContent = title;
        modalPrice.textContent = price + ' ₽';
        
        // Устанавливаем картинку и принудительно делаем её видимой
        modalImg.src = imageSrc;
        modalImg.style.display = 'block'; 
        
        modalDesc.textContent = description;
        modal.style.display = 'flex';
    }

    // Функция закрытия
    window.closeModal = function() {
        modal.style.display = 'none';
    }

    // Закрытие по клику на фон
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});