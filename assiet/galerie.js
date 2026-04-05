
  
         const galleryItems = [
    { name: "Thieboudiene", thumb: "https://cdn.aistoucuisine.com/assets/d4908c8f-fbf0-4d6c-802e-a484f13328e3/riz-rouge-au-poulet.webp?format=webp&quality=75&width=1280", preview: "https://cdn.aistoucuisine.com/assets/d4908c8f-fbf0-4d6c-802e-a484f13328e3/riz-rouge-au-poulet.webp?format=webp&quality=75&width=1280" },
    { name: "Yassa Poulet", thumb: "https://cdn.aistoucuisine.com/assets/5ed67e74-0285-4599-bc1b-d5c7c3f661ea/yassa-poulet.webp?width=400", preview: "https://cdn.aistoucuisine.com/assets/5ed67e74-0285-4599-bc1b-d5c7c3f661ea/yassa-poulet.webp?width=1200" },
    { name: "Mafe Gombo", thumb: "https://cdn.aistoucuisine.com/assets/179daa92-d792-4594-8a5d-288cf2d61f7a/mafe-au-fonio.webp?width=400", preview: "https://cdn.aistoucuisine.com/assets/179daa92-d792-4594-8a5d-288cf2d61f7a/mafe-au-fonio.webp?width=1200" },
    { name: "C'BON", thumb: "https://afriseries.com/wp-content/uploads/2021/09/Cest-bon-plat-diola.jpg", preview: "https://afriseries.com/wp-content/uploads/2021/09/Cest-bon-plat-diola.jpg" },
    { name: "Thiéré", thumb: "https://cdn.aistoucuisine.com/assets/a9731b44-9b27-4613-af02-b22a5d3cbf12/thiere-yapp-couscous-senegalais-lagneau.webp?format=webp&quality=75&width=1280", preview: "https://cdn.aistoucuisine.com/assets/a9731b44-9b27-4613-af02-b22a5d3cbf12/thiere-yapp-couscous-senegalais-lagneau.webp?format=webp&quality=75&width=1280" },
    { name: "Maxal Saloum", thumb: "../image/mbaxal.jpg", preview: "../image/mbaxal.jpg" },
    { name: "Domoda", thumb: "https://static.wixstatic.com/media/504b32_2941afdd8b1846afbcc4f5d0649548e0~mv2.jpg", preview: "https://static.wixstatic.com/media/504b32_2941afdd8b1846afbcc4f5d0649548e0~mv2.jpg" },
    { name: "Soupe Sénégalaise", thumb: "https://cuisineteranga.wordpress.com/wp-content/uploads/2020/05/20200428_193408-1-e1588765962506.jpg?w=1024&h=468&crop=1", preview: "https://cuisineteranga.wordpress.com/wp-content/uploads/2020/05/20200428_193408-1-e1588765962506.jpg?w=1024&h=468&crop=1" },
    { name: "Thiébou Niébé", thumb: "https://z-p3-scontent.fdkr6-1.fna.fbcdn.net/v/t1.6435-9/107967404_769246847214648_4171752622261059036_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0327a3&_nc_eui2=AeF9lCkAVYRRMc96dmvCuqfk8xRjat2z0gzzFGNq3bPSDKze7JQd2oULTNiwom56nB8NYRv5G5JFued3n9B1wPRc&_nc_ohc=__YtlRqeKU8Q7kNvwGtdNXn&_nc_oc=AdruhEnldJPBYWuypsbmTsVqVIhdE4ozI8s99gyDC8--mG37UYU9CAMBcloxgDiMSiU&_nc_zt=23&_nc_ht=z-p3-scontent.fdkr6-1.fna&_nc_gid=GJ_DhG_Dm1hT5CJlG8OxlQ&_nc_ss=7a32e&oh=00_AfwVOA39QuNxdWbaRikgg580v_PEQKHEKH2DLtSFPpL5hg&oe=69EA9737", preview: "https://z-p3-scontent.fdkr6-1.fna.fbcdn.net/v/t1.6435-9/107967404_769246847214648_4171752622261059036_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0327a3&_nc_eui2=AeF9lCkAVYRRMc96dmvCuqfk8xRjat2z0gzzFGNq3bPSDKze7JQd2oULTNiwom56nB8NYRv5G5JFued3n9B1wPRc&_nc_ohc=__YtlRqeKU8Q7kNvwGtdNXn&_nc_oc=AdruhEnldJPBYWuypsbmTsVqVIhdE4ozI8s99gyDC8--mG37UYU9CAMBcloxgDiMSiU&_nc_zt=23&_nc_ht=z-p3-scontent.fdkr6-1.fna&_nc_gid=GJ_DhG_Dm1hT5CJlG8OxlQ&_nc_ss=7a32e&oh=00_AfwVOA39QuNxdWbaRikgg580v_PEQKHEKH2DLtSFPpL5hg&oe=69EA9737" },
    { name: " Soupe Kandja", thumb: "../image/soupou.jpg", preview: "../image/soupou.jpg"},
    { name: "Mafé", thumb: "../image/mafé.jpg", preview: "../image/mafé.jpg"},
    { name: "Double Burger", thumb: "../image/burger.png", preview: "../image/burger.png"},
];

let galleryIndex = 0;

const galleryGrid = document.querySelector("#gallery-grid");
const galleryPreview = document.querySelector("#gallery-preview");
const galleryCaption = document.querySelector("#gallery-caption");
const galleryArrows = document.querySelectorAll(".slider-arrow--gallery");

function renderGallery() {
    galleryGrid.innerHTML = galleryItems.map((item, index) => `
        <button class="gallery-item ${index === galleryIndex ? 'is-active' : ''}" onclick="setGallery(${index})">
            <img src="${item.thumb}" alt="${item.name}">
            <span>${item.name}</span>
        </button>
    `).join('');

    const current = galleryItems[galleryIndex];
    galleryPreview.src = current.preview;
    galleryCaption.textContent = current.name;
}

window.setGallery = (index) => {
    galleryIndex = index;
    renderGallery();
};

galleryArrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        const direction = arrow.dataset.galleryDirection;
        if (direction === "next") {
            galleryIndex = (galleryIndex + 1) % galleryItems.length;
        } else {
            galleryIndex = (galleryIndex - 1 + galleryItems.length) % galleryItems.length;
        }
        renderGallery();
    });
});

// Initialisation
document.addEventListener("DOMContentLoaded", renderGallery);