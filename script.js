const carousel = document.getElementById('carousel');
    const subtitle = document.getElementById('subtitle');
    const description = document.getElementById('description');
    const items = document.querySelectorAll('.carousel-item');

    const texts = [
      { subtitle: 'PIXON', description: 'Un ojo que ve más allá del velo de la ignorancia. Científico incansable, se refugia en el conocimiento, no por miedo al mundo, sino por desdén hacia su mediocridad.' },
      { subtitle: 'ZURAN', description: 'Un intelecto infinito atrapado en acero y circuitos. Bajo sus palabras él idealiza el día en que el humano actúe en base a datos y no emociones.' },
      { subtitle: 'KRINGLE', description: 'Tres miradas, tres voces. Sin rumbo ni propósito, con un gran carisma de inicio se vio corrompido al momento de analizar la hipocresía en la historia.' },
      { subtitle: 'MINKLY', description: 'Detrás de la sonrisa afilada, un estratega sin piedad. No desafía al mundo, lo manipula. Donde otros ven caos, él busca encontrar su dominio.' },
      { subtitle: 'PAULINE', description: 'Belleza y poder en perfecta sintonía. No conquista con la fuerza, sino con el deseo ajeno. Dominar no es una opción, es su naturaleza, es manipulación de manual.' },
      { subtitle: 'AEURONI', description: 'Un espectro entre verdades incómodas. Su mirada perfora la ilusión del conformismo moderno, el conformismo no debería ser idealizado.' },
      { subtitle: 'TIRIXIS', description: 'Una risa afilada como un cuchillo. No intenta cambiar el mundo, solo desnudar su hipocresía absurda. -Ojos cerrados no ven, pero si sienten un golpe-.' },
    ];

    let currentIndex = 0;

    function updateCarousel() {
      const offset = (carousel.clientWidth / 2) - (items[currentIndex].offsetWidth / 2) - (currentIndex * (items[currentIndex].offsetWidth + 40));
      carousel.style.transform = `translateX(${offset}px)`;

      items.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
      });

      subtitle.textContent = texts[currentIndex].subtitle;
      description.textContent = texts[currentIndex].description;
    }

    function moveCarousel(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex >= items.length) currentIndex = items.length - 1;
      updateCarousel();
    }

    // Init
    window.onload = () => {
      updateCarousel();
    };