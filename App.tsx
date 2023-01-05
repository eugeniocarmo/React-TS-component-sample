import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Custumised components</h1>
      <CustomButton 
        TextHello="Alerta texto da interface e componente" 
        eventOnClick={(texto) => {alert(texto)}}>
          Test 1 
      </CustomButton>


      <CustomButton
        TextHello="Alerta Testando"
        eventOnClick={() => alert('testando')}> 
          Test 2
      </CustomButton>

      <CustomButton
        TextHello="Qualquer coisa mesmo"
        eventOnClick={() => alert('Qualquer coisa')}>
          Test 3
      </CustomButton>


      <CustomButton
        TextHello="Clica aqui no texto pra ver o olá da DIVI"
        eventOnClick={(texto) => alert(texto)}> 
          Test 4
      </CustomButton>

      <CustomButton>
        <CustomButton> 
          <div>
            <p>
              <span>
                Test Children 
              </span>
            </p>
          </div>
        </CustomButton>
      </CustomButton>

      

      <h2>Componentes Nativos </h2>
      <ol>
        <li>
          Temos components nativos de HTML - tipos as tags HTMl -
          https://developer.mozilla.org/en-US/docs/Web/HTML/Element
        </li>
        <br />
        <li>Temos também os componentes customizados</li>
      </ol>
      <p> Podemos passar propriedades para eles. Ex: Um title</p>

      <div>
        <b>Configurando eventos</b>
        <p> </p>
        <button
          className="custom-button"
          onMouseLeave={() => alert('O Mouse me deixou :-( ')}
        >
          Leave me
        </button>
        <p> </p>
        <button
          className="custom-button2"
          onClick={() => alert('Voce me clicou :-) ')}
        >
          Click me
        </button>
        <p> Evento onChange é muito usado no input</p>
        <input
          onChange={() => {
            alert('mudou!');
          }}
        ></input>
        <p>
          Tudo isso pode também fazer para componentes customozidados onde vc
          adciona as propriedades e eventos
        </p>
        <br />
        <p>Conceito de children para componente Nativo ou não é usado também</p>
        <p> São elementos com as tags div, p, etc </p>
        <p> Eg: div == $0 - essa é a referência da div pegar os children</p>
        <p>$0. no console é uma referência e podever as dependências</p>
        <p>$0.children</p>
        <p>$0.innerText</p>
        <p>$0.innerHTML</p>
        <br />
        Componente Nativo do React - exemplo Só pode retornar no React um
        elemento por vêz - por isso se importa o FRAGMENT ou usa &#60; &#62; e
        &#60; &#47;&#62;etc - e raramente precisa usar o Fragment como
        componente e passar uma key pra ele.
        <h2>Componentes Customizados</h2>
        Uma funcao que consulta o baco de dados Outro que cria hooks? Uma página
        no React é um componente também EXEMPLO
        <br />
        {/*         const CustomButton = () {
                      return HTML
        } */}
        Ao em vez de passar todo o texto pode passar o componente customizado
        {/* eg:     const CustomButton = (recebe) => {return}     */}
        Duplicando o compponente CustomButton - 15:26 ''' Rrcebendo as
        propriedades ... 15:57''e'
        <br />
      </div>
    </div>
  );
}

// interface para o componente CustomButton - I{NomeComponente}Props{}
// Dentro de {} pode-se definir as tipagens
// Podemos também criar eventos na Interface eg:  onClick
// que pode então retornar VOID (nada, vazio) com a arrow function
// Agente coloca esse valor de onClick para ser recebido no componente
// Ele é repassado para o botão dentro do componente - eg: onClick={onClick}>Test</button>
// e agora ele pode ser usado especificamente no componente customizado<CustomButton />
// pode passar eg: um alerta de Javascript pra o qual quiser, eg:
// <CustomButton onClick = {() => alert('test')}/>
// Podemos também passar parametos dentro dessa função do interface onClick?: () => void;
// eg: onClick?: (texto: string) => void

interface ICustomButtonProps {
  TextHello?: string;
  eventOnClick?: (texto: string) => void;
}

// Componente que recebe props em () e retorna em {}
//const CustomButton = (props) => { }
// para o componente parar de reclamar que recebe ANY em (props)
// é só passar para o componente assim - componente: React.FC<>
// O FC significa FUNCTIONAL COMPONENT.
// Precisamos passar um parâmeto de tipagem da interface para o FC assim:
// componente: React.FC<nomeDaInterface>
// Pode dizer que o parameto string não é obrigatório no Interface
// Eg: TextHello?: string;
// senão, tem que adicionar um parameto tipo TextHello='Ola'qdo chama o componente.
// Como o valor da TextHello?: string; interface é string ou underfined, então
// pode passar o valor de OU no componente: EG:
// div>{props.TextHello || 'oi'}</div>
// Outro modo é a destruturalização do props (que tem o key, children e o texto)
// como isso é do Javascript, coloca ({ TextHello = 'oi'}) para repassar do componente
// e o props de envio não é preciso mais - <div>{props.TextHello}</div>
// O typescript sabe que o TextHello neste caso é só string e undefined é ignorado
// Então lá no botão do componente precisa passar um valor para o onClick={onClick} exe c/ arrow function
// <button className="buttom-custom" onClick={() => onClick('olá')}>Test</button>
// Probleminha agora é que o onClick que vai retornar do componente é void e botão não vai executar
// Para arrumar isso é só colocar ?. CONDITIONAL CHANING do JAvascript - Assim:
//onClick={() => onClick?.('olá')}>Test</button>
// ou sejá, ela não vai executar desde que ela tenha um valor.
// Outra maneira - um hack de lógica seria -
// ) => onClick && onClick('olá')}>Test</button>
// só vai executar o onClick SE o ontro onClick() tiver valor
// Agora pode receber texto CustomButton eg:
// <CustomButton onClick = {() => alert('test')}/>
// Estamos passondo filhos para componentes nativos
// Como se faz para passar filhos para um componente customizado 
// ef: uma tab <p> para o <CustomButton> eg: <CustomButton textHello={<p>Test</p>}>
// (recebendo o texto dentro do botão por exemplo)
// é só colocar na interface um React.ReactNode
// eg: textHello?: React.ReactNode;
// Se. quiser passar um children para o Button, dá pra fazer assim pois ele vem do React.FC, assim
// const CustomButton: React.FC<ICustomButtonProps> = ({TextHello = 'oi', eventOnClick, children })
// CMD + click pra ver dentro do FC
// e pode passar no lugar do test agora
//<const CustomButton: React.FC<ICustomButtonProps> = ({TextHello = 'oi', eventOnClick, children})=> {
// Agora pra não quebrar o botão pode abrir e fechar tag do componente customissado, assim


// Component CustomButton
const CustomButton: React.FC<ICustomButtonProps> = ({TextHello = 'oi', eventOnClick, children }) => {
  return (
    <>
      <div onClick={() => eventOnClick?.('olá da DIVI')}>{TextHello}</div>

      <button className="buttom-custom" onClick={() => eventOnClick?.('olá do Button')}>
        {children}
      </button>
    </>
  );
};
