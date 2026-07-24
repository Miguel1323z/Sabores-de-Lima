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
    { nombre: 'Miraflores', img: 'img/zonas/miraflores.jpg', desc: 'Malecón con vista al mar, cevicherías clásicas y restaurantes innovadores.' },
    { nombre: 'Barranco', img: 'img/zonas/barranco.png', desc: 'Artistico y colorido, con picanterías modernas y bares de pisco.' },
    { nombre: 'Centro de Lima', img: 'img/zonas/centro-de-lima.jpg', desc: 'Cuna de las picanterías criollas y los mercados tradicionales.' },
    { nombre: 'Surquillo', img: 'img/zonas/surquillo.jpg', desc: 'Lugar de los mejores huariques marinos.' },
    { nombre: 'La Victoria', img: 'img/zonas/la-victoria.jpg', desc: 'Hogar de los anticuchos nocturnos y la sazon chicharronera del barrio.' },
    { nombre: 'San Isidro', img: 'img/zonas/san-isidro.jpg', desc: 'Restaurantes elegantes rodeados del bosque de olivares centenarios.' }
  ];

  /* -----------------------------------------------------------------------
     RENDER
     ----------------------------------------------------------------------- */

  const gradient = (colores) => `linear-gradient(135deg, ${colores[0]}, ${colores[1]})`;

  function spiceIcons(nivel){
    if (nivel === undefined || nivel === null) return '';
    if (nivel === 0) return '<span style="color:var(--tinta-suave); font-size:.8rem;">Sin picante</span>';
    
    let html = '';
    for(let i = 1; i <= 3; i++){
      if (i <= nivel) {
        html += `<i class="fa-solid fa-pepper-hot active" style="color: #e63946; margin-right: 4px;"></i>`;
      } else {
        html += `<i class="fa-solid fa-pepper-hot" style="color: #ccc; margin-right: 4px;"></i>`;
      }
    }
    return html;
  }

  function createDishCard(item, categoria){
    const card = document.createElement('article');
    card.className = 'dish-card reveal';

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
    if (!container) return;
    data.forEach(item => container.appendChild(createDishCard(item, categoria)));
  }

  renderGrid('platosGrid', platos, 'Plato principal');
  renderGrid('postresGrid', postres, 'Postre tradicional');
  renderGrid('bebidasGrid', bebidas, 'Bebida');

  const zonesGrid = document.getElementById('zonesGrid');
  if (zonesGrid) {
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
  }

  /* -----------------------------------------------------------------------
     LIGHTBOX (AMPLIACIÓN DE IMAGEN A PANTALLA COMPLETA)
     ----------------------------------------------------------------------- */

  let lightboxOverlay = document.getElementById('lightboxOverlay');
  if (!lightboxOverlay) {
    lightboxOverlay = document.createElement('div');
    lightboxOverlay.id = 'lightboxOverlay';
    lightboxOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.88);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 99999;
      cursor: zoom-out;
      opacity: 0;
      transition: opacity 0.25s ease;
    `;

    lightboxOverlay.innerHTML = `
      <span id="lightboxClose" style="
        position: absolute;
        top: 20px;
        right: 30px;
        color: #fff;
        font-size: 36px;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        z-index: 100000;
      ">&times;</span>
      <img id="lightboxImg" style="
        max-width: 85%;
        max-height: 80vh;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.8);
        object-fit: contain;
        cursor: default;
      " src="" alt="Imagen ampliada">
    `;

    document.body.appendChild(lightboxOverlay);

    const closeLightbox = () => {
      lightboxOverlay.style.opacity = '0';
      setTimeout(() => {
        lightboxOverlay.style.display = 'none';
      }, 250);
    };

    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target !== document.getElementById('lightboxImg')) {
        closeLightbox();
      }
    });

    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxOverlay.style.display === 'flex') {
        e.stopPropagation();
        closeLightbox();
      }
    }, true);
  }

  function openLightbox(imgSrc, altText) {
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = imgSrc;
    lightboxImg.alt = altText || 'Imagen ampliada';
    lightboxOverlay.style.display = 'flex';
    setTimeout(() => {
      lightboxOverlay.style.opacity = '1';
    }, 10);
  }

  /* -----------------------------------------------------------------------
     DETALLE DE PLATO (MODAL)
     ----------------------------------------------------------------------- */

  const modalOverlay = document.getElementById('modalOverlay');
  const modalIcon = document.getElementById('modalIcon');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');

  function openModal(item, categoria){
    if (!modalOverlay) return;

    modalIcon.style.background = gradient(item.colores);
    modalIcon.innerHTML = `<img src="${item.img}" alt="${item.nombre}" class="modal-dish-img" style="cursor: pointer;">`;

    const circleImg = modalIcon.querySelector('.modal-dish-img');
    if (circleImg) {
      circleImg.addEventListener('click', () => openLightbox(item.img, item.nombre));
    }

    // 2. CREAR/GESTIONAR EL BOTÓN DEBAJO DEL CÍRCULO (CENTRADO)
    let zoomBtn = document.getElementById('modalZoomBtn');
    if (!zoomBtn) {
      zoomBtn = document.createElement('button');
      zoomBtn.id = 'modalZoomBtn';
      zoomBtn.type = 'button';
      zoomBtn.style.cssText = `
        display: flex;
        align-items: center;
        gap: 6px;
        margin: 10px auto 0 auto;
        padding: 5px 12px;
        font-size: 0.78rem;
        color: var(--tinta-suave, #666);
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.2s ease;
      `;
      zoomBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass-plus"></i> Ver imagen completa`;
      
      // Se inserta dinámicamente justo después de la foto circular
      modalIcon.parentNode.insertBefore(zoomBtn, modalIcon.nextSibling);
    }

    // Reasignar acción al botón centrado
    zoomBtn.onclick = () => openLightbox(item.img, item.nombre);

    modalCategory.textContent = categoria;
    modalTitle.textContent = item.nombre;
    modalDesc.textContent = item.desc;

    // 3. OCULTAR Y LIMPIAR INGREDIENTES Y PRECIO
    const idsParaOcultar = ['modalIngredients', 'modalPrice', 'ingredientsGroup', 'priceGroup', 'modalIngredientsGroup', 'modalPriceGroup'];
    idsParaOcultar.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = 'none';
        if (el.tagName !== 'DIV') el.textContent = '';
      }
    });

    const allParagraphs = modalOverlay.querySelectorAll('p, span, div, h4, h5');
    allParagraphs.forEach(el => {
      const txt = el.textContent.toLowerCase().trim();
      if ((txt.includes('ingrediente') || txt.includes('precio')) && !el.contains(modalDesc)) {
        if (el.children.length === 0 || el.classList.contains('modal-label')) {
          el.style.display = 'none';
          if (el.parentElement && el.parentElement !== modalOverlay && !el.parentElement.contains(modalDesc)) {
            el.parentElement.style.display = 'none';
          }
        }
      }
    });

    // 4. GESTIÓN DEL PICANTE EN EL MODAL
    let spiceContainer = document.getElementById('modalSpice');
    
    if (spiceContainer) {
      const parent = spiceContainer.parentElement;

      if (item.picante !== undefined) {
        spiceContainer.innerHTML = spiceIcons(item.picante);
        spiceContainer.style.display = 'block';

        if (parent && parent !== modalOverlay && parent.tagName !== 'BODY') {
          parent.style.display = 'block';
        }
      } else {
        spiceContainer.innerHTML = '';
        spiceContainer.style.display = 'none';

        if (parent && parent !== modalOverlay && parent.tagName !== 'BODY') {
          parent.style.display = 'none';
        }
      }
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    if (modalOverlay) modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if(e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && lightboxOverlay.style.display !== 'flex') closeModal();
  });

  /* -----------------------------------------------------------------------
     NAVEGACIÓN MÓVIL 
     ----------------------------------------------------------------------- */

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
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
  }

  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 500);
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

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