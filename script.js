document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o recarregamento da página

    emailjs.sendForm("service_m422nsr", "template_33oom0b", form, "YtN1lSFgRaE_YAnHf")
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa o formulário
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      });
  });
});



window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const infoTop = document.querySelector('.info-container').offsetTop;

  if (scrollPosition < infoTop - 50) {
    // Antes da segunda seção, fundo1
    document.body.style.backgroundImage = "url('imagens/fundo1.webp')";
  } else {
    // Depois que entra na segunda seção, fundo2
    document.body.style.backgroundImage = "url('imagens/fundo2.avif')";
  }
});
