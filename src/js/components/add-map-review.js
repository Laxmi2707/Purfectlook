const createReviewHTML = () => `
  <div class="reviews__block">
    <iframe
      style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box"
      src="https://yandex.ru/maps-reviews-widget/1498451717?comments" 
      title="Promoitalia & Estrada - отзывы" 
      defer>
    </iframe>
    <a
      href="https://yandex.ru/maps/org/promoitalia_estrada/1498451717/" 
      target="_blank"
      style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box" 
      defer>
      Promoitalia & Estrada на карте Самары — Яндекс Карты
    </a>
  </div>
`;

const createMapHTML = () => `
  <div style="position:relative;overflow:hidden;">
    <a
      href="https://yandex.ru/maps/org/promoitalia_estrada/1498451717/?utm_medium=mapframe&utm_source=maps"
      style="color:#eee;font-size:12px;position:absolute;top:0px;">
      Promoitalia & Estrada
    </a>
    <a
      href="https://yandex.ru/maps/51/samara/category/beauty_salon/184105814/?utm_medium=mapframe&utm_source=maps"
      style="color:#eee;font-size:12px;position:absolute;top:14px;">
      Салон красоты в Самаре
    </a>
    <a
      href="https://yandex.ru/maps/51/samara/category/nail_salon/20476284572/?utm_medium=mapframe&utm_source=maps"
      style="color:#eee;font-size:12px;position:absolute;top:28px;">
      Ногтевая студия в Самаре
    </a>
    <iframe
      src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1498451717"
      frameborder="1" 
      allowfullscreen="true" 
      style="position:relative;" 
      title="Promoitalia & Estrada на карте Самары — Яндекс Карты" 
      defer>
    </iframe>
  </div>
`;

const updateContent = () => {
  const reviewBlock = document.querySelector('.reviews');
  const mapBlock = document.querySelector('.map');

  reviewBlock.innerHTML = createReviewHTML();
  mapBlock.innerHTML = createMapHTML();
};

setTimeout(updateContent, 2000);
