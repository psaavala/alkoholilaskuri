document.querySelector('button').addEventListener('click', () => {
    const paino = document.querySelector('input[type=number]').value
    const tunnit = document.querySelector('#aika').value
    const pullot = document.querySelector('#pullot').value
    const radioButtonGroup = document.getElementsByName('sukupuoli')
    const checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked)
    const sukupuoli = checkedRadio.value
    const litrat = pullot * 0.33
    const grammat = litrat * 8 * 4.5
    const palamisvauhti = paino / 10
    const jaljella = grammat - (palamisvauhti * tunnit)

let promillet = 0
    

    if (sukupuoli === "mies") {
        promillet = jaljella / (paino * 0.7) }
    else {
        promillet = jaljella / (paino * 0.6) }



const vastaus = document.querySelector('output')
vastaus.innerHTML = promillet.toFixed(2)
})