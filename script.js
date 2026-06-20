// Hàm chạy khi onload được kích hoạt
function initializeGallery() {
    console.log("Page fully loaded! Chạy hàm setup nè bồ ơi... 🚀");
    addTabindexToFigures();
}

// Vòng lặp tự động add tabindex cho các figure
function addTabindexToFigures() {
    const figures = document.querySelectorAll('.gallery-item');
    
    for (let i = 0; i < figures.length; i++) {
        // Sử dụng thuộc tính chuẩn chỉnh 'tabindex', đặt bằng '0' để có thể dùng phím Tab
        figures[i].setAttribute('tabindex', '0'); 
    }
    console.log(`Đã add thành công tabindex cho ${figures.length} cái figure! ✨`);
}

// Hàm hiển thị ảnh khi tương tác (chuột + bàn phím)
function previewImage(element) {
    const imgElement = element.querySelector('img');
    const previewBox = document.getElementById('preview-box');
    
    // Thay đổi background và text hiển thị
    previewBox.style.backgroundImage = `url('${imgElement.src}')`;
    previewBox.textContent = imgElement.alt;
    
    console.log("Đang preview ảnh: " + imgElement.alt + " 👀");
}

// Hàm reset khi không tương tác nữa
function resetPreview() {
    const previewBox = document.getElementById('preview-box');
    
    previewBox.style.backgroundImage = "none";
    previewBox.textContent = "Hover or Tab to an image below to preview!";
    
    console.log("Đã reset preview về trạng thái ban đầu! 🔄");
}
