function showSubmitAlert() {
  const catchNome = document.getElementById("nome").value;
  const catchTelefone = document.getElementById("telefone").value;
  const catchEmail = document.getElementById("email").value;
  const catchMtvContato = document.getElementById("mtvContato").value;

  const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions tabela

  if (
    catchNome === "" ||
    catchTelefone === "" ||
    catchEmail === "" ||
    catchMtvContato === ""
  ) {
    alert("Faltando preencher algo");
    return false;
  }

  if (!telefoneRegex.test(catchTelefone)) {
    alert(
      "Telefone inválido. Por favor, insira no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX."
    );
    return false;
  }

  if (!emailRegex.test(catchEmail)) {
    alert("Email inválido. Por favor, insira um email válido.");
    return false;
  }

  return true;
}

