
    // Para añadir otra aplicación, copia uno de estos objetos y modifica sus datos.
    const apps = [
      {title:'Obras del P. Buela',description:'Escritos y obras para la lectura, el estudio y la reflexión.',icon:'✍',url:'https://vcfe1984.github.io/buela_obras/'},
      {title:'Nuestro Carisma',description:'Una puerta de entrada a la espiritualidad y al carisma del Instituto.',icon:'✦',url:'https://vcfe1984.github.io/nuestro_carisma/'},
      {title:'Derecho Propio IVE',description:'Documentos y textos normativos del Instituto del Verbo Encarnado.',icon:'⚖',url:'https://vcfe1984.github.io/derecho-IVE/'},
      {title:'Derecho Propio SSVM',description:'Documentos y textos normativos de las Servidoras del Señor y de la Virgen de Matará.',icon:'❖',url:'https://vcfe1984.github.io/derecho-SSVM/'}
    ];
    const grid=document.getElementById('app-grid');
    for(const app of apps){const a=document.createElement('a');a.className='card';a.href=app.url;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',`${app.title} (se abre en una pestaña nueva)`);const icon=document.createElement('div');icon.className='icon';icon.setAttribute('aria-hidden','true');icon.textContent=app.icon;const h=document.createElement('h3');h.textContent=app.title;const p=document.createElement('p');p.textContent=app.description;const arrow=document.createElement('span');arrow.className='arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';a.append(icon,h,p,arrow);grid.append(a)}
    document.getElementById('count').textContent=`${apps.length} recursos disponibles`;
  