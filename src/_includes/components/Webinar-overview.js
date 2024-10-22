export function WebinarOverview({slug, thumbnail, duration, title, speakers, categories}){  
  return `
  <article class="webinar">
    <a href="/webinars/${slug}">
      <div class="container-image">
        <img src="https://fdnd-agency.directus.app/assets/${thumbnail}" alt="thumbnail" width="400" height="225">
        <p class="duration">${duration}</p>
      </div>
      <h3>${title}</h3>
      <p class="speakers">

      
      </p>
      <div class="categories">
        {% for category in ${categories} %}
          <p class="category">{{ category.avl_categories_id.name }}</p>
        {% endfor %}  
      </div>
    </a>
  </article>
  `
}