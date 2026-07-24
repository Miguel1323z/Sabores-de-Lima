document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------------------------
     DATA SET
     ----------------------------------------------------------------------- */

  const platos = [
    {
      nombre: 'Cebiche combinado',
      img: 'img/platos/ceviche.jpg',
      colores: ['#2E7D6B', '#134D40'],
      desc: 'Pescado fresco cocido en limón, con cebolla, ají y camote dulce.',
      picante: 3
    },
    {
      nombre: 'Lomo Saltado',
      img: 'img/platos/lomo-saltado.jpg',
      colores: ['#A31621', '#5C0B12'],
      desc: 'Salteado criollo-chino de carne, cebolla, tomate y papas fritas.',
      picante: 1
    },
    {
      nombre: 'Ají de Gallina',
      img: 'img/platos/aji-gallina.jpg',
      colores: ['#D98E1F', '#8A5A0F'],
      desc: 'Crema untuosa de ají amarillo y gallina deshilachada sobre papa y arroz.',
      picante: 2
    },
    {
      nombre: 'Causa Limeña',
      img: 'img/platos/causa.jpg',
      colores: ['#C9A227', '#8A6E10'],
      desc: 'Capas frías de puré de papa amarilla, ají y relleno de pollo o mariscos.',
      picante: 1
    },
    {
      nombre: 'Anticuchos',
      img: 'img/platos/anticuchos.jpg',
      colores: ['#8B1E1E', '#4A0E0E'],
      desc: 'Brochetas de corazón de res marinadas y asadas a la parrilla.',
      picante: 3
    },
    {
      nombre: 'Arroz con Mariscos',
      img: 'img/platos/arroz-mariscos.jpg',
      colores: ['#B5461F', '#7A2E12'],
      desc: 'Arroz meloso teñido de culantro, cargado de mariscos frescos.',
      picante: 1
    },
    {
      nombre: 'Choritos a la Chalaca',
      img: 'img/platos/choritos-chalaca.jpg',
      colores: ['#2E7D6B', '#134D40'],
      desc: 'Choros servidos en su concha con una salsa fresca de cebolla, ají limo, choclo y limón.',
      picante: 2
    },
    {
      nombre: 'Tacu Tacu',
      img: 'img/platos/tacutacu.jpg',
      colores: ['#6E4A25', '#432C16'],
      desc: 'Mezcla dorada de arroz y frejoles del día anterior, servida con proteína.',
      picante: 1
    },
    {
      nombre: 'Carapulcra',
      img: 'img/platos/carapulcra.jpg',
      colores: ['#7A3B1D', '#4E230F'],
      desc: 'Guiso afroperuano de papa seca, maní y cerdo, de cocción lenta.',
      picante: 2
    },
    {
      nombre: 'Chanfainita',
      img: 'img/platos/chanfainita.jpg',
      colores: ['#7A3B1D', '#4E230F'],
      desc: 'Guiso tradicional limeño preparado con bofe de res, papa y ají panca, muy popular en mercados y huariques.',
      picante: 2
    }
  ];

  const postres = [
    {
      nombre: 'Suspiro a la Limeña',
      img: 'img/postres/suspiro-limeña.jpg',
      colores: ['#C9A227', '#8A6E10'],
      desc: 'Manjar blanco suave de yemas cubierto de merengue especiado al oporto.'
    },
    {
      nombre: 'Picarones',
      img: 'img/postres/picarones.jpg',
      colores: ['#B5461F', '#7A2E12'],
      desc: 'Aros fritos crujientes de zapallo y camote bañados en miel de chancaca con especias.'
    },
    {
      nombre: 'Combinado',
      img: 'img/postres/combinado.jpg',
      colores: ['#5E2A6B', '#3A1A44'],
      desc: 'El duelo limeño perfecto en un solo vaso: Mazamorra Morada tibia con Arroz con Leche cremoso.'
    },
    {
      nombre: 'Turrón de Doña Pepa',
      img: 'img/postres/turron.jpg',
      colores: ['#090908', '#5C3B0A'],
      desc: 'Capas de palitos de galleta anisada suavizada en miel de frutas y grageas coloridas.'
    }
  ];

  const bebidas = [
    {
      nombre: 'Chicha Morada',
      img: 'img/bebida/chicha.jpg',
      colores: ['#5E2A6B', '#3A1A44'],
      desc: 'Refresco de maíz morado hervido con especias y frutas.'
    },
    {
      nombre: 'Pisco Sour',
      img: 'img/bebida/pisco-sour.jpg',
      colores: ['#D9C27E', '#9C8A4E'],
      desc: 'El coctel bandera: pisco, limón, jarabe de goma y clara de huevo.'
    },
    {
      nombre: 'Emoliente',
      img: 'img/bebida/emoliente.jpg',
      colores: ['#3E6B3A', '#254221'],
      desc: 'Infusión herbal caliente, tradicional de las esquinas limeñas e inclusive de varios sabores.'
    },
    {
      nombre: 'Inca Kola',
      img: 'img/bebida/incakola.jpg',
      colores: ['#C9A227', '#8A6E10'],
      desc: 'La gaseosa dorada de sabor a hierba luisa, infaltable en la mesa peruana.'
    },
    {
      nombre: 'Chilcano',
      img: 'img/bebida/chilcano.jpg',
      colores: ['#D9C27E', '#9C8A4E'],
      desc: 'Cóctel refrescante preparado con pisco, ginger ale, limón y unas gotas de amargo de angostura.'
    }
  ];

  const zonas = [
    { nombre: 'Miraflores', img: 'img/zonas/miraflores.jpg', desc: 'Malecón con vista al mar, cebicherías clásicas y restaurantes.' },
    { nombre: 'Barranco', img: 'img/zonas/barranco.png', desc: 'Bohemio y colorido, con picanterías modernas y bares de pisco.' },
    { nombre: 'Centro de Lima', img: 'img/zonas/centro-de-lima.jpg', desc: 'Cuna de las picanterías criollas centenarias y los mercados tradicionales.' },
    { nombre: 'Surquillo', img: 'img/zonas/surquillo.jpg', desc: 'El mercado más auténtico de la ciudad; puestos de comida al paso irresistibles.' },
    { nombre: 'La Victoria', img: 'img/zonas/la-victoria.jpg', desc: 'Hogar de los anticuchos nocturnos y la cultura chicharronera.' },
    { nombre: 'San Isidro', img: 'img/zonas/san-isidro.jpg', desc: 'Restaurantes elegantes rodeados de olivares centenarios.' }
  ];

  /* -----------------------------------------------------------------------
     RENDER
     ----------------------------------------------------------------------- */

  const gradient = (colores) => `linear-gradient(135deg, ${colores[0]}, ${colores[1]})`;

  /** Renderizado de picante */
  function spiceIcons(nivel){
    if (nivel === undefined) return '';
    if (nivel === 0) return '<span style="color:var(--tinta-suave); font-size:.8rem;">Sin picante</span>';
    
    let html = '';
    for(let i = 1; i <= 3; i++){
      html += `<i class="fa-solid fa-pepper-hot ${i <= nivel ? 'active' : ''}"></i>`;
    }
    return html;
  }

  /** CARDS */
  function createDishCard(item, categoria){
    const card = document.createElement('article');
    card.className = 'dish-card reveal';

    // Footer solo se crea si el item tiene picante (Platos)
    const footerHtml = (item.picante !== undefined) ? `
      <div class="dish-footer">
        <div class="spice-level" aria-label="Nivel de picante">${spiceIcons(item.picante)}</div>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="dish-plate" style="background:${gradient(item.colores)}">
        <img src="${item.img}" alt="${item.nombre}" class="dish-img">  
      </div>
      <h3 class="dish-name">${item.nombre}</h3>
      <p class="dish-desc">${item.desc}</p>
      ${footerHtml}
      <button class="btn btn-outline" type="button">Ver más</button>
    `;
    
    card.querySelector('.btn-outline').addEventListener('click', () => openModal(item, categoria));
    return card;
  }

  function renderGrid(containerId, data, categoria){
    const container = document.getElementById(containerId);
    data.forEach(item => container.appendChild(createDishCard(item, categoria)));
  }

  renderGrid('platosGrid', platos, 'Plato principal');
  renderGrid('postresGrid', postres, 'Postre tradicional');
  renderGrid('bebidasGrid', bebidas, 'Bebida');

  /** Zonas del mapa gastronómico */
  const zonesGrid = document.getElementById('zonesGrid');
  zonas.forEach(z => {
    const card = document.createElement('div');
    card.className = 'zone-card reveal';
    card.innerHTML = `
      <div class="zone-card-img">
        <img src="${z.img}" alt="${z.nombre}" class="zone-img">
      </div>
      <div class="zone-card-body">
        <h3>${z.nombre}</h3>
        <p>${z.desc}</p>
      </div>
    `;
    zonesGrid.appendChild(card);
  });

  /* -----------------------------------------------------------------------
     DETALLE DE PLATO (MODAL)
     ----------------------------------------------------------------------- */

  const modalOverlay = document.getElementById('modalOverlay');
  const modalIcon = document.getElementById('modalIcon');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalIngredients = document.getElementById('modalIngredients');
  const modalSpice = document.getElementById('modalSpice');
  const modalPrice = document.getElementById('modalPrice');
  const modalClose = document.getElementById('modalClose');

  // Oculta/muestra un elemento junto con su subtítulo/contenedor padre
  function toggleFieldVisibility(el, show) {
    if (!el) return;
    el.style.display = show ? 'block' : 'none';
    
    // Si está dentro de un contenedor o grupo con subtítulo, oculta el grupo entero
    const parent = el.parentElement;
    if (parent && parent.id !== 'modalOverlay' && parent.tagName !== 'BODY') {
      parent.style.display = show ? 'block' : 'none';
    }
  }

  function openModal(item, categoria){
    modalIcon.style.background = gradient(item.colores);
    modalIcon.innerHTML = `<img src="${item.img}" alt="${item.nombre}" class="modal-dish-img">`;
    modalCategory.textContent = categoria;
    modalTitle.textContent = item.nombre;
    modalDesc.textContent = item.desc;
    
    // 1. Ingredientes: OCULTO SIEMPRE
    if (modalIngredients) {
      modalIngredients.textContent = '';
      toggleFieldVisibility(modalIngredients, false);
    }

    // 2. Precio: OCULTO SIEMPRE
    if (modalPrice) {
      modalPrice.textContent = '';
      toggleFieldVisibility(modalPrice, false);
    }

    // 3. Picante: SOLO SE MUESTRA SI ES PLATO (si tiene picante definido)
    if (modalSpice) {
      if (item.picante !== undefined) {
        modalSpice.innerHTML = spiceIcons(item.picante);
        toggleFieldVisibility(modalSpice, true);
      } else {
        modalSpice.innerHTML = '';
        toggleFieldVisibility(modalSpice, false);
      }
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
  });

  /* -----------------------------------------------------------------------
     NAVEGACIÓN MÓVIL 
     ----------------------------------------------------------------------- */

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });

  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('show', window.scrollY > 500);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const sections = document.querySelectorAll('section[id]');
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => spyObserver.observe(section));

  /* -----------------------------------------------------------------------
     SCROLL 
     ----------------------------------------------------------------------- */

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

});