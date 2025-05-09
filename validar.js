document.getElementById('formulario').addEventListener("submit", function(event)
{
    event.preventDefault();

    const email = document.getElementById('email').value;

    const valido = validacao(email);

    if(valido == true)
    {
        alert("Email válido!");
    }
    else
    {
        alert("Email inválido");
    }
})

function validacao(email)
{
    const regex = /[^\s]+@[^\s]+\.+[^\s]/
    return regex.test(email);
}