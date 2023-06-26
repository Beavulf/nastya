const mainSlide = document.querySelector('.main-slide')
const leftButton = document.querySelector('.button-left')
const rightButton = document.querySelector('.button-right')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
const search = document.querySelector('#searchText')

let = activeSlideIndex = 0
// действия на клик по элементам управления в слайдере
leftButton.addEventListener('click', ()=> {
    changeSlide('left')
})
rightButton.addEventListener('click', ()=> {
    changeSlide('right')
})
// функция смены слайда в слайдере
function changeSlide (direction) {
    if (direction === 'right'){
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }      
    } else if (direction === 'left') {
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesCount-1
        }
    }
    const widht = container.clientWidth
    
    mainSlide.style.transform = `translateX(-${activeSlideIndex*widht}px)`


}
// установка картинки в строке поиска
let widthSearchText = search.clientWidth
search.style.backgroundPosition = `${widthSearchText-55}px`
// Сообщения о добавлению в корзину
const cardicons = document.querySelectorAll('.card-icon')
const itemBy = document.querySelector('.items')
for (let icon of cardicons){  
    icon.addEventListener('click',()=>{             
            itemBy.style.opacity = 1
            const timeClick = setTimeout(() => {
                itemBy.style.opacity = 0;
        }, 3500);
              
    })
}

// Кнопка профиля
const profileButton = document.querySelector('#profile-button')
const profileBox = document.querySelector('.profile-box')
profileButton.addEventListener('mouseover',()=>{profileBox.style.visibility = 'visible'})

profileBox.addEventListener('mouseout',()=>{profileBox.style.visibility = 'hidden'})
