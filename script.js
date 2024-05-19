document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('https://i.ibb.co/Wg3wg0r/d7f7d7b7-a5ea-41cd-80d0-65608be7e0db.jpg')";
    alert('Você disse SIM! Não acreditooooo!!! Eu te amo mais do que tudo nesse mundoo!!!.');
    var container = document.querySelector('.container');
    container.style.background = 'transparent';
    container.innerHTML = '<img src="https://i.gifer.com/54vL.gif" alt="Pedido de Casamento">';
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('Oh, não! Por favor, pense com carinho.');
});
