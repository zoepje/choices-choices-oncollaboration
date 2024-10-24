export function Search(){
  return `
  <form class="search">
  <input type="text" placeholder="Search" id="search" name="search">
  <button type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path fill="currentColor" fill-rule="evenodd" d="M10 2a8 8 0 1 0 4.906 14.32l5.387 5.387a1 1 0 0 0 1.414-1.414l-5.387-5.387A8 8 0 0 0 10 2m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" clip-rule="evenodd"></path>
    </svg>
  </button>
</form>`
}