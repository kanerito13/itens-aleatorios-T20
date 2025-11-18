class Random {
    constructor(popupId, mensagemId) {
        this.popup = document.getElementById(popupId);
        this.mensagem = document.getElementById(mensagemId);

        window.addEventListener("click", (event) => {
            if (event.target === this.popup) {
                this.fechar();
            }
        });
    }

    mostrar(mensagem) {
        this.mensagem.textContent = mensagem;
        this.popup.style.display = "block";
    }

    fechar() {
        this.popup.style.display = "none";
    }

    randomizar(tabelaId) {
        const tabela = document.getElementById(tabelaId);
        const linhas = tabela.getElementsByTagName("tr");

        const aleatorio = Math.floor(Math.random() * linhas.length);
        const item = linhas[aleatorio].getElementsByTagName("td")[0];

        this.mostrar(item.textContent);
    }
}

const roleta = new Random ("popup", "mensagemPopup");

function ARM() { roleta.randomizar("tb-arma"); }
function ESC() { roleta.randomizar("tb-escudo"); }
function AMD() { roleta.randomizar("tb-armadura"); }
function ESO() { roleta.randomizar("tb-esoterico"); }

function ARMML() { roleta.randomizar("tb-arma(ML)"); }
function ESCML() { roleta.randomizar("tb-escudo(ML)"); }
function AMDML() { roleta.randomizar("tb-armadura(ML)"); }
function ESOML() { roleta.randomizar("tb-esoterico(ML)"); }
function FVML()  { roleta.randomizar("tb-ferr-&-vest(ML)"); }

function ARMEC() { roleta.randomizar("tb-arma(EC)"); }
function ESCEC() { roleta.randomizar("tb-escudo(EC)"); }
function AMDEC() { roleta.randomizar("tb-armadura(EC)"); }
function ESOEC() { roleta.randomizar("tb-esoterico(EC)"); }
function ACSEC() { roleta.randomizar("tb-acessorio(EC)"); }

function ARMMD()   { roleta.randomizar("tb-arma(MD)"); }
function RESTMD()  { roleta.randomizar("tb-resto(MD)"); }

function ARMSP() { roleta.randomizar("tb-arma(SP)"); }
function ESCSP() { roleta.randomizar("tb-escudo(SP)"); }
function AMDSP() { roleta.randomizar("tb-armadura(SP)"); }
function ESOSP() { roleta.randomizar("tb-esoterico(SP)"); }

function ACSMN() { roleta.randomizar("tb-acessorio(MN)"); }
function ACSMED() { roleta.randomizar("tb-acessorio(MED)"); }
function ACSMA() { roleta.randomizar("tb-acessorio(MA)"); }

function EAV() { roleta.randomizar("tb-equipamento"); }
function FER() { roleta.randomizar("tb-ferramenta"); }
function ITM() { roleta.randomizar("tb-instrumento"); }
function VEST() { roleta.randomizar("tb-vestuario"); }
function ALQ() { roleta.randomizar("tb-alquimico"); }
function PRAT() { roleta.randomizar("tb-prato"); }
function BEBI() { roleta.randomizar("tb-bebida"); }
function CAT() { roleta.randomizar("tb-categoria"); }
function CAT_ITG() { roleta.randomizar("tb-categoria-geral"); }
function ME() { roleta.randomizar("tb-material"); }
