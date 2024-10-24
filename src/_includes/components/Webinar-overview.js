export function WebinarOverview({slug, thumbnail, duration, title, speakers, categories}){  
  return `
  <article class="webinar-overview">
    <a href="/webinars/${slug}">
      <div class="container-image">
        <img src="https://fdnd-agency.directus.app/assets/${thumbnail}" alt="thumbnail" width="400" height="225">
        <p class="duration">${duration}</p>
      </div>
      <h3>${title}</h3>
      <p class="speakers">
      ${speakers
        .map(
          (speaker) =>
            `<span>${speaker.avl_speakers_id.fullname}</span>`
        )
        .join(" ")}
      </p>
      <div class="categories">
        ${categories
        .map(
          (category) =>
            `<p class="category">${category.avl_categories_id.name}</p>`
        )
        .join("")}
      </div>
    </a>
  </article>
  `
}