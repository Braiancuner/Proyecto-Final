/**
 * Acá el problema que daba error en tu código era utilizar el punto en ".navegadorToggle":
 * const navToggle= document.getElementsByClassName(".navegadorToggle")
 * Lo correcto sería:
 * const navToggle= document.getElementsByClassName("navegadorToggle")
 *
 * Pero te recomiendo en realidad trabajar con id en estos dos casos,
 * que son elementos que existen en un sólo lugar de tu código, o sea,
 * no se repiten.
 */
const navToggle= document.getElementById("navegadorToggle")
const navMenu= document.getElementById("navegadorMenu")

navToggle.addEventListener("click",() =>{
    /**
     * Acá antes los tenías como "toggle('.navegadorMenu_visible')".
     * Por lo tanto también tenés que sacar el punto y simplemente pasar
     * como argumento el nombre de la clase, y no un selector completo de css
     */
    navMenu.classList.toggle('navegadorMenu_visible')
})
