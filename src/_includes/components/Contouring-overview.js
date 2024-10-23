export function ContouringOverview({slug, image_scan, title, user_id, categories}){
  return `
  <article class="contouring-overview">
  <a href="/contourings/${slug}">
    <div>
      <img src="https://fdnd-agency.directus.app/assets/${image_scan}" alt="CT-Scans" width="384" height="384" />
      ${categories
        .map(
          (category) =>
            `<span>${category}</span>`
        )
      }     
    </div>
    <h3>${title}</h3>
    <p>${user_id}</p>
  </a>
</article>
`
}