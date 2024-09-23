sliderArr = [];
arrSlide = [];

fetch('http://localhost:3000/slider-first')
    .then(res => res.json())
    .then(data => {
        let imageContainer = document.querySelector('.image-container');
        let currentIndex = 0;
        imageContainer.innerHTML = `<div class="first-slide"><img src="${data[0].image}" alt="${data[0].caption}"></div>`;
        document.querySelector('.prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + data.length) % data.length;
            updateImage();
        });
        document.querySelector('.next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % data.length;
            updateImage();
        });

        function updateImage() {
            imageContainer.innerHTML = `<img src="${data[currentIndex].image}" alt="${data[currentIndex].caption}">`;
        }
    });

{
    fetch('http://localhost:3000/ads1').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".boxs-rev1");
        let box2 = document.querySelector(".boxs-rev2");
        let box3 = document.querySelector(".boxs-rev3");
        let box4 = document.querySelector(".boxs-rev4");
        box1.innerHTML = `<a href=""><img src="${crew[0].image2}">
        <p>${crew[0].title}</p> </a>`
        box2.innerHTML = `<a href=""><img src="${crew[1].image1}">
        <p>${crew[1].title}</p> </a>`
        box3.innerHTML = `<a href=""><img src="${crew[2].image1}">
        <p>${crew[2].title}</p> </a>`
        box4.innerHTML = `<a href=""><img src="${crew[3].image1}">
        <p>${crew[3].title}</p> </a>`
    }).catch((err) => console.log(err))
}
{
    fetch('http://localhost:3000/ads2').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".don1");
        let box2 = document.querySelector(".don2");
        let box3 = document.querySelector(".don3");
        let box4 = document.querySelector(".don4");
        box1.innerHTML = `<a href=""><img src="${crew[0].image2}">
    <p>${crew[0].title}</p> </a>`
        box2.innerHTML = `<a href=""><img src="${crew[1].image1}">
    <p>${crew[1].title}</p> </a>`
        box3.innerHTML = `<a href=""><img src="${crew[2].image1}">
    <p>${crew[2].title}</p> </a>`
        box4.innerHTML = `<a href=""><img src="${crew[3].image1}">
    <p>${crew[3].title}</p> </a>`
    }).catch((err) => console.log(err))
}
{
    fetch('http://localhost:3000/ads3').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".a1");
        let box2 = document.querySelector(".a2");
        let box3 = document.querySelector(".a3");
        let box4 = document.querySelector(".a4");
        box1.innerHTML = `<a href=""><img src="${crew[0].image2}">
        <p>${crew[0].title}</p> </a>`
        box2.innerHTML = `<a href=""><img src="${crew[1].image1}">
        <p>${crew[1].title}</p> </a>`
        box3.innerHTML = `<a href=""><img src="${crew[2].image1}">
        <p>${crew[2].title}</p> </a>`
        box4.innerHTML = `<a href=""><img src="${crew[3].image1}">
        <p>${crew[3].title}</p> </a>`
    }).catch((err) => console.log(err))
}
{
    fetch('http://localhost:3000/ads4').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".b1");
        let box2 = document.querySelector(".b2");
        let box3 = document.querySelector(".b3");
        let box4 = document.querySelector(".b4");
        box1.innerHTML = `<a href=""><img src="${crew[0].image2}">
        <p>${crew[0].title}</p> </a>`
        box2.innerHTML = `<a href=""><img src="${crew[1].image1}">
        <p>${crew[1].title}</p> </a>`
        box3.innerHTML = `<a href=""><img src="${crew[2].image1}">
        <p>${crew[2].title}</p> </a>`
        box4.innerHTML = `<a href=""><img src="${crew[3].image1}">
        <p>${crew[3].title}</p> </a>`
    }).catch((err) => console.log(err))
}
{
    fetch('http://localhost:3000/ads5').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".c1");
        let box2 = document.querySelector(".c2");
        let box3 = document.querySelector(".c3");
        let box4 = document.querySelector(".c4");
        box1.innerHTML = `<a href=""><img src="${crew[0].image2}">
        <p>${crew[0].title}</p> </a>`
        box2.innerHTML = `<a href=""><img src="${crew[1].image1}">
        <p>${crew[1].title}</p> </a>`
        box3.innerHTML = `<a href=""><img src="${crew[2].image1}">
        <p>${crew[2].title}</p> </a>`
        box4.innerHTML = `<a href=""><img src="${crew[3].image1}">
        <p>${crew[3].title}</p> </a>`
    }).catch((err) => console.log(err))
}
{
    fetch('http://localhost:3000/ads6').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".d1");
        let box2 = document.querySelector(".d2");
        let box3 = document.querySelector(".d3");
        let box4 = document.querySelector(".d4");
        box1.innerHTML = `<a href=""><img src="${crew[0].image2}">
        <p>${crew[0].title}</p> </a>`
        box2.innerHTML = `<a href=""><img src="${crew[1].image1}">
        <p>${crew[1].title}</p> </a>`
        box3.innerHTML = `<a href=""><img src="${crew[2].image1}">
        <p>${crew[2].title}</p> </a>`
        box4.innerHTML = `<a href=""><img src="${crew[3].image1}">
        <p>${crew[3].title}</p> </a>`
    }).catch((err) => console.log(err))
}
{
    fetch('http://localhost:3000/ads7').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".e1");
        let box2 = document.querySelector(".e2");
        let box3 = document.querySelector(".e3");
        let box4 = document.querySelector(".e4");
        box1.innerHTML = `<a href=""><img src="${crew[0].image2}">
        <p>${crew[0].title}</p> </a>`
        box2.innerHTML = `<a href=""><img src="${crew[1].image1}">
        <p>${crew[1].title}</p> </a>`
        box3.innerHTML = `<a href=""><img src="${crew[2].image1}">
        <p>${crew[2].title}</p> </a>`
        box4.innerHTML = `<a href=""><img src="${crew[3].image1}">
        <p>${crew[3].title}</p> </a>`
    }).catch((err) => console.log(err))
}
{
    fetch('http://localhost:3000/ads8').then((res) => res.json()).then((p) => {
        let box11 = document.querySelector(".f1");
        let box2 = document.querySelector(".f2");
        let box3 = document.querySelector(".f3");
        let box4 = document.querySelector(".f4");
        box11.innerHTML = `<a href=""><img src="${p[0].image2}">
        <p>${p[0].title}</p> </a>`
        box2.innerHTML = `<a href=""><img src="${p[1].image1}">
        <p>${p[1].title}</p> </a>`
        box3.innerHTML = `<a href=""><img src="${p[2].image1}">
        <p>${p[2].title}</p> </a>`
        box4.innerHTML = `<a href=""><img src="${p[3].image1}">
        <p>${p[3].title}</p> </a>`
    }).catch((err) => console.log(err))

}

function secondSlider() {
    fetch("http://localhost:3000/second-slider").then((res) => res.json()).then(data => {
        let currIndex = 0;
        let slider = document.querySelector(".dot1");
        let slide2 = document.querySelector(".dot2");
        let slide3 = document.querySelector(".dot3");

        slider.innerHTML = `<img src="${data[currIndex].image}">
        <img src="${data[currIndex + 1].image}">
        <img src="${data[currIndex + 2].image}">
        <img src="${data[currIndex + 3].image}">
        <img src="${data[currIndex + 4].image}">`;

        slide2.innerHTML = `<img src="${data[currIndex].image}">
        <img src="${data[currIndex + 5].image}">
        <img src="${data[currIndex + 6].image}">
        <img src="${data[currIndex + 7].image}">
        <img src="${data[currIndex + 8].image}">`;

        slide3.innerHTML = `<img src="${data[currIndex].image}">
        <img src="${data[currIndex + 9].image}">
        <img src="${data[currIndex + 10].image}">
        <img src="${data[currIndex + 11].image}">
        <img src="${data[currIndex + 12].image}">`;

        let slick = document.querySelectorAll(".image")
        let counter = 0;

        slick.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`
        })
        const slideImage = () => {
            slick.forEach((or) => {
                or.style.transform = `translateX(-${counter * 100}%)`
            })
        }
        document.querySelector('.nxt').addEventListener('click', () => {
            if (counter == 2) {
                return
            }
            counter++;
            slideImage();
            console.log("success")
        });
        document.querySelector('.prv').addEventListener('click', () => {
            if (counter == 0) {
                return
            }
            counter--;
            slideImage();
            console.log("success")
        });
    })
}
secondSlider();

function thirdSlider() {
    fetch("http://localhost:3000/Third-slider").then((res) => res.json()).then((data) => {
        let currIndex = 0;
        let slider = document.querySelector(".block1");
        let slide2 = document.querySelector(".block2");

        slider.innerHTML = `<img src="${data[currIndex].image}">
        <img src="${data[currIndex + 1].image}">
        <img src="${data[currIndex + 2].image}">
        <img src="${data[currIndex + 3].image}">
        <img src="${data[currIndex + 4].image}">
        <img src="${data[currIndex + 5].image}">
        <img src="${data[currIndex + 6].image}">
        <img src="${data[currIndex + 7].image}">
        <img src="${data[currIndex + 8].image}">`;

        slide2.innerHTML = `<img src="${data[currIndex].image}">
        <img src="${data[currIndex].image}">
        <img src="${data[currIndex + 1].image}">
        <img src="${data[currIndex + 2].image}">
        <img src="${data[currIndex + 3].image}">
        <img src="${data[currIndex + 4].image}">
        <img src="${data[currIndex + 5].image}">
        <img src="${data[currIndex + 6].image}">
        <img src="${data[currIndex + 7].image}">
        `;

        let slick = document.querySelectorAll(".blocks")
        console.log(slick)
        let counter = 0;

        slick.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`
        })
        const slideImage = () => {
            slick.forEach((or) => {
                or.style.transform = `translateX(-${counter * 100}%)`
            })
        }
        document.querySelector('.nt').addEventListener('click', () => {
            if (counter == 1) {
                return
            }
            counter++;
            slideImage();
            console.log("success")
        });
        document.querySelector('.pr').addEventListener('click', () => {
            if (counter == 0) {
                return
            }
            counter--;
            slideImage();
            console.log("success")
        });
    })
}
thirdSlider();
{
    fetch('http://localhost:3000/ads9').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".boxs-rev11");
        let box2 = document.querySelector(".boxs-rev22");
        let box3 = document.querySelector(".boxs-rev33");
        let box4 = document.querySelector(".boxs-rev44");
        box1.innerHTML = `<a href=""><img src="${crew[0].image}">`
        box2.innerHTML = `<a href=""><img src="${crew[1].image}">`
        box3.innerHTML = `<a href=""><img src="${crew[2].image}">`
        box4.innerHTML = `<a href=""><img src="${crew[3].image}">`;
        console.log(crew)
    }).catch((err) => console.log(err))
}
{
    fetch('http://localhost:3000/ads10').then((res) => res.json()).then((crew) => {
        let box1 = document.querySelector(".boxs-rev12");
        let box2 = document.querySelector(".boxs-rev23");
        let box3 = document.querySelector(".boxs-rev34");
        let box4 = document.querySelector(".boxs-rev45");
        box1.innerHTML = `<a href=""><img src="${crew[0].image}">`
        box2.innerHTML = `<a href=""><img src="${crew[1].image}">`
        box3.innerHTML = `<a href=""><img src="${crew[2].image}">`
        box4.innerHTML = `<a href=""><img src="${crew[3].image}">`;
        console.log(crew)
    }).catch((err) => console.log(err))
}

function FourthSlider() {
    fetch("http://localhost:3000/products1").then((res) => res.json()).then((data) => {
        let currIndex = 0;
        let slider = document.querySelector(".blue1");
        let slide2 = document.querySelector(".blue2");
        slider.innerHTML = `<div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[0].title)}&image=${encodeURIComponent(data[0].image)}&price=${encodeURIComponent(data[0].price)}&id=${encodeURIComponent(data[0].id)}&old_price=${encodeURIComponent(data[0].old_price)}"><div class="sleep"><img src="${data[0].image}"></div> <p>${data[0].title}</p><span>₹${data[0].new_price}</span><span class="old-price">₹${data[0].price}</span></a>
        </div>
        <div class="dyna">
                <a href="product.html?title=${encodeURIComponent(data[1].title)}&image=${encodeURIComponent(data[1].image)}&price=${encodeURIComponent(data[1].price)}&id=${encodeURIComponent(data[1].id)}&old_price=${encodeURIComponent(data[1].old_price)}&rating=${encodeURIComponent(data[1].rating)}">            <div class="sleep"><img src="${data[1].image}"></div> <p>${data[1].title}</p><span>₹${data[1].new_price}</span><span class="old-price">₹${data[1].price}</span>
                </a>
        </div>
        <div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[2].title)}&image=${encodeURIComponent(data[2].image)}&price=${encodeURIComponent(data[2].price)}&id=${encodeURIComponent(data[2].id)}&old_price=${encodeURIComponent(data[2].old_price)}&rating=${encodeURIComponent(data[2].rating)}"><div class="sleep"><img src="${data[2].image}"></div> <p>${data[2].title}</p><span>₹${data[2].new_price}</span><span class="old-price">₹${data[2].price}</span>
        </a></div>
        <div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[3].title)}&image=${encodeURIComponent(data[3].image)}&price=${encodeURIComponent(data[3].price)}&id=${encodeURIComponent(data[3].id)}&old_price=${encodeURIComponent(data[3].old_price)}&rating=${encodeURIComponent(data[3].rating)}"><div class="sleep"><img src="${data[3].image}"></div> <p>${data[3].title}</p><span>₹${data[3].new_price}</span><span class="old-price">₹${data[3].price}</span>
        </a></div>
        <div class="dyna">
            <a hred="product.html?title=${encodeURIComponent(data[4].title)}&image=${encodeURIComponent(data[4].image)}&price=${encodeURIComponent(data[4].price)}&id=${encodeURIComponent(data[4].id)}&old_price=${encodeURIComponent(data[4].old_price)}&rating=${encodeURIComponent(data[4].rating)}"><div class="sleep"><img src="${data[4].image}"></div> <p>${data[4].title}</p><span>₹${data[4].new_price}</span><span class="old-price">₹${data[4].price}</span>
            </a></div>
        <div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[5].title)}&image=${encodeURIComponent(data[5].image)}&price=${encodeURIComponent(data[5].price)}&id=${encodeURIComponent(data[5].id)}&old_price=${encodeURIComponent(data[5].old_price)}&rating=${encodeURIComponent(data[5].rating)}"><div class="sleep"><img src="${data[5].image}"></div> <p>${data[5].title}</p><span>₹${data[5].new_price}</span><span class="old-price">₹${data[5].price}</span>
        </a></div>`;
        slide2.innerHTML = `<div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[6].title)}&image=${encodeURIComponent(data[6].image)}&price=${encodeURIComponent(data[6].price)}&id=${encodeURIComponent(data[6].id)}&old_price=${encodeURIComponent(data[6].old_price)}&rating=${encodeURIComponent(data[6].rating)}"><div class="sleep"><img src="${data[6].image}"></div> <p>${data[6].title}</p><span>₹${data[6].new_price}</span><span class="old-price">₹${data[6].price}</span>
        </a></div>
        <div class="dyna">
         <a href="product.html?title=${encodeURIComponent(data[7].title)}&image=${encodeURIComponent(data[7].image)}&price=${encodeURIComponent(data[7].price)}&id=${encodeURIComponent(data[7].id)}&old_price=${encodeURIComponent(data[7].old_price)}&rating=${encodeURIComponent(data[7].rating)}">   <div class="sleep"><img src="${data[7].image}"></div> <p>${data[7].title}</p><span>₹${data[7].new_price}</span><span class="old-price">₹${data[7].price}</span>
        </div>
        <div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[8].title)}&image=${encodeURIComponent(data[8].image)}&price=${encodeURIComponent(data[8].price)}&id=${encodeURIComponent(data[8].id)}&old_price=${encodeURIComponent(data[8].old_price)}&rating=${encodeURIComponent(data[8].rating)}"><div class="sleep"><img src="${data[8].image}"></div> <p>${data[8].title}</p><span>₹${data[8].new_price}</span><span class="old-price">₹${data[8].price}</span>
        </a></div>
        <div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[9].title)}&image=${encodeURIComponent(data[9].image)}&price=${encodeURIComponent(data[9].price)}&id=${encodeURIComponent(data[9].id)}&old_price=${encodeURIComponent(data[9].old_price)}&rating=${encodeURIComponent(data[9].rating)}"><div class="sleep"><img src="${data[9].image}"></div> <p>${data[9].title}</p><span>₹${data[9].new_price}</span><span class="old-price">₹${data[9].price}</span>
        </a></div>
        <div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[10].title)}&image=${encodeURIComponent(data[10].image)}&price=${encodeURIComponent(data[10].price)}&id=${encodeURIComponent(data[10].id)}&old_price=${encodeURIComponent(data[10].old_price)}&rating=${encodeURIComponent(data[10].rating)}"><div class="sleep"><img src="${data[10].image}"></div> <p>${data[10].title}</p><span>₹${data[10].new_price}</span><span class="old-price">₹${data[10].price}</span>
            </a></div>
            <div class="dyna">
            <a href="product.html?title=${encodeURIComponent(data[11].title)}&image=${encodeURIComponent(data[11].image)}&price=${encodeURIComponent(data[11].price)}&id=${encodeURIComponent(data[11].id)}&old_price=${encodeURIComponent(data[11].old_price)}&rating=${encodeURIComponent(data[11].rating)}"><div class="sleep"><img src="${data[11].image}"></div> <p>${data[11].title}</p><span>₹${data[11].new_price}</span><span class="old-price">₹${data[11].price}</span>
        </a></div>`;
        let slick = document.querySelectorAll(".blue")
        let counter = 0;

        slick.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`
        })
        const slideImage = () => {
            slick.forEach((or) => {
                or.style.transform = `translateX(-${counter * 100}%)`
            })
        }
        document.querySelector('.ntt').addEventListener('click', () => {
            if (counter == 1) {
                return
            }
            counter++;
            slideImage();
            console.log("success")
        });
        document.querySelector('.prr').addEventListener('click', () => {
            if (counter == 0) {
                return
            }
            counter--;
            slideImage();
            console.log("success")
        });
    })
}
FourthSlider();
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const addToCartBtn = document.getElementById('addToCartBtn');

function addToCart() {
    const productTitle = document.getElementById('section-title').textContent;
    const productPrice = document.getElementById('price').textContent;
    const productImage = document.getElementById('image').src;

    const product = {
        title: productTitle,
        price: productPrice,
        image: productImage
    };

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartIcon();

}

addToCartBtn.addEventListener('click', addToCart);