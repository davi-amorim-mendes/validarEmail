document.getElementById('formulario').addEventListener("submit", function(event)
{
    event.preventDefault();

    const email = document.getElementById('email').value;

    const valido = validacao(email);

    const error = document.querySelector('#error');
    const ok = document.querySelector('#ok');

    if(valido == true)
    {
        ok.style.display = 'flex';
        error.style.display = 'none';
    }
    else
    {
        error.style.display = 'flex';
        ok.style.display = 'none';
    }
})

function validacao(email)
{
    const regex = /^[^\s]+@+[^\s]+\.+[^\s]+$/
    return regex.test(email);
}