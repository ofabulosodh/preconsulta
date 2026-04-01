const chat = document.getElementById("chat");
const inputArea = document.getElementById("input-area");

const respostas = {};

const avatarSrc = "assets/foto_ewerton.png";

const perguntas = [
  {
    key: "nome_completo",
    pergunta: "Nome completo:",
    tipo: "texto",
    placeholder: "Digite seu nome completo"
  },
  {
    key: "cpf",
    pergunta: "CPF:",
    tipo: "texto",
    placeholder: "Digite seu CPF"
  },
  {
    key: "data_nascimento",
    pergunta: "Data de nascimento:",
    tipo: "texto",
    placeholder: "DD/MM/AAAA"
  },
  {
    key: "profissao",
    pergunta: "Qual a sua profissão?",
    tipo: "texto",
    placeholder: "Digite sua profissão"
  },
  {
    key: "estado_civil",
    pergunta: "Qual é o seu estado civil?",
    tipo: "opcoes",
    opcoes: ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"]
  },
  {
    key: "endereco",
    pergunta: "Endereço:",
    tipo: "texto",
    placeholder: "Digite seu endereço completo (rua, número, bairro e cidade)"
  },

  {
    key: "saude_hoje",
    pergunta: "Como você avalia sua saúde hoje?",
    tipo: "opcoes",
    opcoes: ["Excelente", "Boa", "Regular", "Ruim", "Muito ruim"]
  },
  {
    key: "satisfacao_saude",
    pergunta: "Quão satisfeito(a) você está com a sua saúde?",
    tipo: "opcoes",
    opcoes: ["Muito satisfeito(a)", "Satisfeito(a)", "Mais ou menos", "Insatisfeito(a)", "Muito insatisfeito(a)"]
  },
  {
    key: "acima_peso",
    pergunta: "Você considera que está acima do peso?",
    tipo: "opcoes",
    opcoes: ["Sim", "Não"]
  },
  {
    key: "dor_impede_rotina",
    pergunta: "Em que medida você acha que sua dor física impede você de fazer o que você precisa?",
    tipo: "opcoes",
    opcoes: ["Nada", "Pouco", "Moderadamente", "Muito", "Extremamente"]
  },
  {
    key: "tratamento_medico_vida_diaria",
    pergunta: "Você precisa de algum tratamento médico para levar sua vida diária?",
    tipo: "opcoes",
    opcoes: ["Sim", "Não"]
  },

  {
    key: "qualidade_sono",
    pergunta: "Como você avalia a qualidade do seu sono?",
    tipo: "opcoes",
    opcoes: ["Excelente", "Bom", "Regular", "Ruim"]
  },
  {
    key: "energia_dia_a_dia",
    pergunta: "Você tem energia suficiente para o seu dia a dia?",
    tipo: "opcoes",
    opcoes: ["Sim", "Não"]
  },
  {
    key: "aceitacao_aparencia",
    pergunta: "Você é capaz de aceitar sua aparência física?",
    tipo: "opcoes",
    opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
  },
  {
    key: "sono_avaliacao",
    pergunta: "Como avalia seu sono?",
    tipo: "opcoes",
    opcoes: ["Excelente", "Bom", "Regular", "Ruim", "Muito ruim"]
  },
  {
    key: "habitos_intestinais",
    pergunta: "Como avalia seus hábitos intestinais?",
    tipo: "opcoes",
    opcoes: ["Excelente", "Bom", "Regular", "Ruim", "Muito ruim"]
  },

  {
    key: "intestino",
    pergunta: "O seu intestino funciona bem? (Vai regularmente todos os dias ao banheiro)",
    tipo: "opcoes",
    opcoes: ["Sim", "Não"]
  },
  {
    key: "disposicao",
    pergunta: "Como você avalia a sua disposição ao longo do dia?",
    tipo: "opcoes",
    opcoes: ["Excelente", "Boa", "Regular", "Ruim"]
  },
  {
    key: "humor",
    pergunta: "Como você avalia o seu humor ao longo do dia?",
    tipo: "opcoes",
    opcoes: ["Excelente", "Bom", "Regular", "Ruim"]
  },
  {
    key: "agua_diaria",
    pergunta: "Você bebe pelo menos 2 litros de água diariamente?",
    tipo: "opcoes",
    opcoes: ["Sim", "Não"]
  },
  {
    key: "libido",
    pergunta: "Você gostaria de melhorar a sua libido (desejo sexual)?",
    tipo: "opcoes",
    opcoes: ["Sim", "Não, estou satisfeito(a)"]
  },
  {
    key: "libido_avaliacao",
    pergunta: "Como avalia sua libido (desejo sexual)?",
    tipo: "opcoes",
    opcoes: ["Muito baixa", "Baixa", "Regular", "Boa", "Muito boa"]
  },
  {
    key: "bebidas_alcoolicas",
    pergunta: "Faz uso de bebidas alcoólicas?",
    tipo: "opcoes",
    opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
  },
  {
    key: "precisa_emagrecer",
    pergunta: "Você considera que precisa emagrecer e melhorar sua vida?",
    tipo: "opcoes",
    opcoes: ["Sim", "Não"]
  },
  {
    key: "sentimentos_negativos",
    pergunta: "Com que frequência você tem sentimentos negativos tais como mau humor, desespero, ansiedade, depressão?",
    tipo: "opcoes",
    opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"]
  },
  {
    key: "satisfeita_composicao_corporal",
    pergunta: "Você está satisfeita com sua composição corporal atual?",
    tipo: "opcoes",
    opcoes: ["Sim", "Não"]
  },
  {
    key: "peso_aproximado",
    pergunta: "Qual seu peso (aproximado) atualmente?",
    tipo: "texto",
    placeholder: "Ex.: 78 kg"
  },
  {
    key: "altura",
    pergunta: "Sua altura?",
    tipo: "texto",
    placeholder: "Ex.: 1,70 m"
  },
  {
    key: "principal_problema_saude",
    pergunta: "Qual seu principal problema de saúde?",
    tipo: "texto",
    placeholder: "Digite aqui"
  },

  {
    key: "alergias",
    pergunta: "Qual das alergias abaixo você tem?",
    tipo: "opcoes",
    opcoes: ["Não tenho", "Medicamentos", "Alimentos", "Poeira", "Mofo", "Outras"]
  },
  {
    key: "exercicios",
    pergunta: "Como são seus hábitos de exercícios físicos?",
    tipo: "opcoes",
    opcoes: [
      "Não pratico",
      "1 a 2 vezes por semana",
      "3 a 4 vezes por semana",
      "5 ou mais vezes por semana e gosto"
    ]
  },
  {
    key: "fumantes",
    pergunta: "Você fuma ou convive com fumantes?",
    tipo: "opcoes",
    opcoes: ["Não", "Sim, convivo", "Sim, fumo"]
  },
  {
    key: "historico_cancer",
    pergunta: "Você tem histórico de câncer?",
    tipo: "opcoes",
    opcoes: [
      "Nunca tive e nem na família próxima (parentes de 1º grau)",
      "Já tive",
      "Há casos na família próxima"
    ]
  },
  {
    key: "doencas",
    pergunta: "Das doenças abaixo, qual você tem ou teve?",
    tipo: "multipla",
    opcoes: [
      "Hipertensão arterial (pressão alta)",
      "Diabetes",
      "Glaucoma",
      "Alergias",
      "Infarto com revascularização (Stent ou ponte safena)",
      "Infarto sem revascularização",
      "AVC",
      "Trombose",
      "Complicações no parto",
      "Desmaios ou tonturas",
      "Doenças da tireóide com cirurgia (cistos ou nódulos)",
      "Doenças da tireóide sem cirurgia",
      "Doenças reumatológicas (lúpus, artrite reumatóide, espondilite etc)",
      "Doença rara",
      "Nenhuma"
    ]
  }
];

let etapaAtual = 0;

function iniciarChat() {
  document.getElementById("texto").classList.add("hidden");
  document.getElementById("chat-section").classList.remove("hidden");

  etapaAtual = 0;
  chat.innerHTML = "";
  inputArea.innerHTML = "";

  renderPerguntaAtual();
}

function scrollChatToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }, 80);
}

function criarAvatar() {
  const img = document.createElement("img");
  img.src = avatarSrc;
  img.alt = "Avatar";
  img.className = "avatar";
  return img;
}

function addMensagemBot(texto) {
  const row = document.createElement("div");
  row.className = "message-row";

  const avatar = criarAvatar();

  const bubble = document.createElement("div");
  bubble.className = "msg bot";
  bubble.textContent = texto;

  row.appendChild(avatar);
  row.appendChild(bubble);
  chat.appendChild(row);

  scrollChatToBottom();
}

function addMensagemUser(texto) {
  const row = document.createElement("div");
  row.className = "message-row user-row";

  const bubble = document.createElement("div");
  bubble.className = "msg user";
  bubble.textContent = texto;

  row.appendChild(bubble);
  chat.appendChild(row);

  scrollChatToBottom();
}

function limparInputArea() {
  inputArea.innerHTML = "";
}

function manterUltimaPerguntaVisivel() {
  setTimeout(() => {
    const mensagensBot = chat.querySelectorAll(".message-row:not(.user-row)");
    const ultimaPergunta = mensagensBot[mensagensBot.length - 1];

    if (ultimaPergunta) {
      ultimaPergunta.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, 250);
}

function renderTexto(perguntaObj) {
  limparInputArea();

  const wrapper = document.createElement("div");
  wrapper.className = "input-shell";

  const textWrap = document.createElement("div");
  textWrap.className = "text-input-wrap";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = perguntaObj.placeholder || "Digite aqui";

  input.addEventListener("focus", () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }, 300);
  });

  if (perguntaObj.key === "cpf") {
    input.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "").slice(0, 11);

      if (v.length > 3) v = v.slice(0, 3) + "." + v.slice(3);
      if (v.length > 7) v = v.slice(0, 7) + "." + v.slice(7);
      if (v.length > 11) v = v.slice(0, 11) + "-" + v.slice(11);

      e.target.value = v;
    });
  }

  if (perguntaObj.key === "data_nascimento") {
    input.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "").slice(0, 8);

      if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
      if (v.length > 5) v = v.slice(0, 5) + "/" + v.slice(5);

      e.target.value = v;
    });
  }

  const btn = document.createElement("button");
  btn.className = "send-btn";
  btn.textContent = "Enviar";

  function enviarTexto() {
    const valor = input.value.trim();
    if (!valor) return;

    if (perguntaObj.key === "cpf") {
      const apenasNumeros = valor.replace(/\D/g, "");
      if (apenasNumeros.length !== 11) {
        alert("Digite um CPF válido com 11 números.");
        return;
      }
    }

    if (perguntaObj.key === "data_nascimento") {
      const formatoData = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!formatoData.test(valor)) {
        alert("Digite a data no formato DD/MM/AAAA.");
        return;
      }
    }

    if (perguntaObj.key === "endereco") {
      const partes = valor
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      if (partes.length < 4) {
        alert("Digite o endereço completo com rua, número, bairro e cidade.");
        return;
      }
    }

    respostas[perguntaObj.key] = valor;
    addMensagemUser(valor);
    etapaAtual++;
    renderPerguntaAtual();
  }

  btn.addEventListener("click", enviarTexto);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") enviarTexto();
  });

  textWrap.appendChild(input);
  textWrap.appendChild(btn);
  wrapper.appendChild(textWrap);

  if (perguntaObj.key === "cpf") {
    const helper = document.createElement("div");
    helper.className = "helper-text";
    helper.textContent = "Digite o CPF completo. A formatação será feita automaticamente.";
    wrapper.appendChild(helper);
  }

  if (perguntaObj.key === "data_nascimento") {
    const helper = document.createElement("div");
    helper.className = "helper-text";
    helper.textContent = "Digite a data no formato DD/MM/AAAA.";
    wrapper.appendChild(helper);
  }

  if (perguntaObj.key === "endereco") {
    const helper = document.createElement("div");
    helper.className = "helper-text";
    helper.textContent = "Digite: rua, número, bairro e cidade.";
    wrapper.appendChild(helper);
  }

  inputArea.appendChild(wrapper);

  setTimeout(() => {
    input.focus();

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }, 300);
  }, 100);
}

function renderOpcoes(perguntaObj) {
  limparInputArea();

  const wrapper = document.createElement("div");
  wrapper.className = "input-shell";

  const grid = document.createElement("div");
  grid.className = "options-grid";

  perguntaObj.opcoes.forEach((opcao) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opcao;

    btn.addEventListener("click", () => {
      respostas[perguntaObj.key] = opcao;
      addMensagemUser(opcao);
      etapaAtual++;
      renderPerguntaAtual();
    });

    grid.appendChild(btn);
  });

  wrapper.appendChild(grid);
  inputArea.appendChild(wrapper);

  manterUltimaPerguntaVisivel();
}

function renderMultipla(perguntaObj) {
  limparInputArea();

  const wrapper = document.createElement("div");
  wrapper.className = "input-shell";

  const grid = document.createElement("div");
  grid.className = "options-grid";

  const selecionados = new Set();

  perguntaObj.opcoes.forEach((opcao) => {
    const btn = document.createElement("button");
    btn.className = "multi-btn";
    btn.textContent = opcao;

    btn.addEventListener("click", () => {
      const nenhumaSelecionada = selecionados.has("Nenhuma");

      if (opcao === "Nenhuma") {
        selecionados.clear();
        document.querySelectorAll(".multi-btn").forEach((b) => {
          b.classList.remove("selected");
        });
        selecionados.add("Nenhuma");
        btn.classList.add("selected");
        return;
      }

      if (nenhumaSelecionada) {
        selecionados.delete("Nenhuma");
        document.querySelectorAll(".multi-btn").forEach((b) => {
          if (b.textContent === "Nenhuma") {
            b.classList.remove("selected");
          }
        });
      }

      if (selecionados.has(opcao)) {
        selecionados.delete(opcao);
        btn.classList.remove("selected");
      } else {
        selecionados.add(opcao);
        btn.classList.add("selected");
      }
    });

    grid.appendChild(btn);
  });

  const actions = document.createElement("div");
  actions.className = "multi-actions";

  const finalizar = document.createElement("button");
  finalizar.className = "finalizar-btn";
  finalizar.textContent = "Enviar";

  finalizar.addEventListener("click", () => {
    const lista = Array.from(selecionados);
    if (!lista.length) return;

    respostas[perguntaObj.key] = lista;
    addMensagemUser(lista.join(", "));
    etapaAtual++;
    renderPerguntaAtual();
  });

  actions.appendChild(finalizar);

  const helper = document.createElement("div");
  helper.className = "helper-text";
  helper.textContent = "Você pode marcar mais de uma opção.";

  wrapper.appendChild(grid);
  wrapper.appendChild(actions);
  wrapper.appendChild(helper);

  inputArea.appendChild(wrapper);

  manterUltimaPerguntaVisivel();
}

function renderPerguntaAtual() {
  limparInputArea();

  if (etapaAtual >= perguntas.length) {
    finalizarFluxo();
    return;
  }

  const perguntaObj = perguntas[etapaAtual];
  addMensagemBot(perguntaObj.pergunta);

  setTimeout(() => {
    if (perguntaObj.tipo === "texto") {
      renderTexto(perguntaObj);
    } else if (perguntaObj.tipo === "opcoes") {
      renderOpcoes(perguntaObj);
    } else if (perguntaObj.tipo === "multipla") {
      renderMultipla(perguntaObj);
    }
  }, 250);
}

async function finalizarFluxo() {
  limparInputArea();

  const success = document.createElement("div");
  success.className = "success-card";
  success.innerHTML = `
    <strong>Enviando sua pré-consulta...</strong><br><br>
    Aguarde só um instante.
  `;

  inputArea.appendChild(success);

  const payload = {
    access_key: "9e0e1627-3956-401f-ab80-b8d416d9049f",
    subject: `Nova pré-consulta - ${respostas.nome_completo || "Paciente"}`,
    from_name: "Formulario de pré-consulta",
    replyto: "EMAIL_DO_CLIENTE_AQUI@gmail.com",

    nome_completo: respostas.nome_completo || "",
    cpf: respostas.cpf || "",
    data_nascimento: respostas.data_nascimento || "",
    profissao: respostas.profissao || "",
    estado_civil: respostas.estado_civil || "",
    endereco: respostas.endereco || "",

    saude_hoje: respostas.saude_hoje || "",
    satisfacao_saude: respostas.satisfacao_saude || "",
    acima_peso: respostas.acima_peso || "",
    dor_impede_rotina: respostas.dor_impede_rotina || "",
    tratamento_medico_vida_diaria: respostas.tratamento_medico_vida_diaria || "",

    qualidade_sono: respostas.qualidade_sono || "",
    energia_dia_a_dia: respostas.energia_dia_a_dia || "",
    aceitacao_aparencia: respostas.aceitacao_aparencia || "",
    sono_avaliacao: respostas.sono_avaliacao || "",
    habitos_intestinais: respostas.habitos_intestinais || "",

    intestino: respostas.intestino || "",
    disposicao: respostas.disposicao || "",
    humor: respostas.humor || "",
    agua_diaria: respostas.agua_diaria || "",
    libido: respostas.libido || "",
    libido_avaliacao: respostas.libido_avaliacao || "",
    bebidas_alcoolicas: respostas.bebidas_alcoolicas || "",
    precisa_emagrecer: respostas.precisa_emagrecer || "",
    sentimentos_negativos: respostas.sentimentos_negativos || "",
    satisfeita_composicao_corporal: respostas.satisfeita_composicao_corporal || "",
    peso_aproximado: respostas.peso_aproximado || "",
    altura: respostas.altura || "",
    principal_problema_saude: respostas.principal_problema_saude || "",

    alergias: respostas.alergias || "",
    exercicios: respostas.exercicios || "",
    fumantes: respostas.fumantes || "",
    historico_cancer: respostas.historico_cancer || "",
    doencas: Array.isArray(respostas.doencas)
      ? respostas.doencas.join(", ")
      : (respostas.doencas || "")
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.success) {
      success.innerHTML = `
        <strong>Pré-consulta enviada com sucesso.</strong><br><br>
        Obrigado por preencher suas informações. Em breve entraremos em contato.
      `;
      console.log("RESPOSTAS DA PRÉ-CONSULTA:", respostas);
    } else {
      success.innerHTML = `
        <strong>Não foi possível enviar agora.</strong><br><br>
        Tente novamente em instantes.
      `;
      console.log("Erro Web3Forms:", result);
    }
  } catch (error) {
    success.innerHTML = `
        <strong>Erro ao enviar a pré-consulta.</strong><br><br>
        Verifique sua conexão e tente novamente.
      `;
    console.error("Erro ao enviar:", error);
  }

  scrollChatToBottom();
}