function changeLanguage() {
  let seletor = document.getElementById("languageusa").hidden = true
  let seletor2 = document.getElementById("languagebr").hidden = false


  console.log(seletor)
  return
}
function changeLanguage2() {
  let seletor = document.getElementById("languagebr").hidden = true
  let seletor2 = document.getElementById("languageusa").hidden = false
  document.getElementById("languageusa").classList.remove("hidden");

  return
}
