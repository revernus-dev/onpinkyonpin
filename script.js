let count = 0; // 방문자 수를 저장할 변수

function increaseVisitorCount() {
    count++;
    const visitorCountSpan = document.getElementById('visitorCount');
    if (visitorCountSpan) {
        visitorCountSpan.textContent = count;
        alert(`방문자 수가 ${count}명으로 증가했습니다!`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const photoUpload = document.getElementById('photoUpload');
    const photoGallery = document.getElementById('photoGallery');

    if (photoUpload && photoGallery) {
        photoUpload.addEventListener('change', (event) => {
            const files = event.target.files;
            if (files.length > 0) {
                for (const file of files) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const imgUrl = e.target.result;
                        addPhotoToGallery(imgUrl);
                    };
                    reader.readAsDataURL(file);
                }
            }
        });
    }
});

function addPhotoToGallery(imgUrl) {
    const photoGallery = document.getElementById('photoGallery');
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = 'Uploaded Photo';
    
    photoItem.appendChild(img);
    photoGallery.appendChild(photoItem);
}
