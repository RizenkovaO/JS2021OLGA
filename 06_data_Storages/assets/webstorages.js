if ('sessionStorage' in window) {
    // when working with storages need to try/catch
  try {
    sessionStorage.setItem('name', 'Arturs');
    const nameValueFromStorage = sessionStorage.getItem('name');
    console.log(nameValueFromStorage);
    sessionStorage.clear();
    sessionStorage.removeItem('name');
  } catch (err) {
    console.error(err);
  }
} else {
    console.log("Browser doesn't support session storage!");
}
