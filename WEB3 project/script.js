const nftButton = document.getElementById('nft');

nftButton.onclick =connect;

document.getElementById('post').addEventListener('click', function() {
    alert('So you have posted comment all bacause of Web2');
});

async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" })
      } catch (error) {
        console.log(error)
      }
      nftButton.innerHTML = "Connected"
      const accounts = await ethereum.request({ method: "eth_accounts" })
      console.log(accounts)
    } else {
      nftButton.innerHTML = "Please install MetaMask"
    }
  }


const buttons = document.querySelectorAll('[data-carousel-btn]');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const offset = btn.dataset.carouselButton === 'next' ? 1 : -1
        const slides = btn.closest('[data-carousel]').querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    });
});