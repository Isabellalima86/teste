import useState from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './app.css';
import fotoCentral from './imagens/contratacao.jpg';
import contratada from './imagens/contratada.jpg'; 

const FormInput = styled.input`
border: 1,5px solid;
border-color: darkblue;
background-color: rgb(222, 235, 247);
width: 100%;
border-radius: 5px;
height: 20px;
padding: 3px;
`;

const Seletor = styled.select`
border: 2px solid;
border-color: darkblue;
background-color: rgb(222, 235, 247);
width: 100%;
border-radius: 5px;
height: 29px;
`;

const Opcoes = styled.option `
background-color: rgb(222, 235, 247);
`;

const Span = styled.span`
background-color: red;
border: 1px solid black;
color: white;
width: 15vw;
display: none;
`;

const App = () => {
  var ok = true;
  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, endereco: address.data.logradouro , bairro: address.data.bairro , cidade: address.data.localidade , estado: address.data.uf});
  };

     const createCandidate = async (candidate) => {
    
      if (form.cpf === ''){
        alert('Verifique se o campo CPF está em branco!');
        ok = false;
      }

      else if (form.rg === ''){
        alert('Verifique se o campo RG está em branco!');
        ok = false;
      }
      else if (form.nome === ''){
       alert('Verifique se o campo Nome está em branco!');
       ok = false;
     }
     else if (form.nascimento === ''){
       alert('Verifique se o campo Data de Nascimento está em branco!');
       ok = false;
     }
     else if (form.cep === ''){
       alert('Verifique se o campo CEP está em branco!');
       ok = false;
     }
     else if (form.endereco === ''){
       alert('Verifique se o campo Endereço está em branco!');
       ok = false;
     }
     else if (form.numero === ''){
       alert('Verifique se o campo Número está em branco!');
       ok = false;
     }
     else if (form.bairro === ''){
       alert('Verifique se o campo Bairro está em branco!');
       ok = false;
     }
     else if (form.cidade === ''){
       alert('Verifique se o campo Cidade está em branco!');
       ok = false;
     }
     else if (form.email === ''){
       alert('Verifique se o campo Email está em branco!');
       ok = false;
     }
     else if (form.profissao === ''){
       alert('Verifique se o campo Profissão está em branco!');
       ok = false;
     }
     else if (form.celular === ''){
       alert('Verifique se o campo Celular está em branco!');
       ok = false;
     }
     else{
       ok = true;
     }
   
      if (ok){
     const user = await axios.post('http://localhost:3550/register', form);
     if (user.status === 200){
       alert('Cadastro efetuado com sucesso!');
       window.location.reload();
     }

    }
  };

   const teste = async () => {
      
    const testar = await axios.post('http://localhost:3550/teste', form);
    if (testar.status === 200){
      document.getElementById('aviso').style.display = 'block';
      ok = false;
    }
    else {
      document.getElementById('aviso').style.display = 'none';
      ok = true;
    }
    

  };
  
  const [ form, setForm ] = useState({
    nome: '',
    cargo: '',
    nascimento:'',
    civil:'',
    sexo: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone1: '',
    telefone2: '',
    celular: '',
    contato: '',
    email: '',
    profissao: '',
    rg: '',
    cpf: '',
    veiculo: '',
    habilitacao: '',
  });

 
  return (
    <div className = 'fundo'>
      <header className = 'topo'> <h1 className='nomeEmpresa'>JobNet</h1>  </header>
      
      <div className = 'flex' > 
        <div className = 'iner' > 
          <img className = 'fotoCentral' src = {fotoCentral} alt='contratação'/>
          <p>Nossos a JobsNET especialista em recrutamento e seleção de profissionais nas mais 
            diversas áreas solicitou para a nossa fábrica de software desenvolver uma página 
            para atração de profissionais para conectar as oportunidades de emprego.</p> 
        </div>
      </div>

      <div className = 'flex2'> 
        <div className = 'texEmprego'> 
            <h4>Está procurando um novo emprego?</h4>           
              <p> Conectamos os melhores talentos às melhores oportunidades 
              e desenvolvemos tanto empresas quanto pessoas para que alcancem
              sua melhor versão, todos os dias. Preencha o formulário abaixo que
              te ajudaremos a ver qual vaga você dá match!</p>

        </div>

        <div> 
            <img className = 'contratada' src={contratada} alt = 'Contratada'/>
        </div>
      </div>
    
    
    
      <div className = 'cabecalho'> 
        <div> <h3 className = 'txtcadastro'>Faça o seu cadastro Aqui!</h3> </div>
  
        <div className = 'backForm' >
       
          <div> <h2>Dados Pessoais </h2> 
           <hr/> </div>

          <div className = 'linha'>    
            <div className='esp'> 
              <div><label> Nome Completo *</label></div>
              <FormInput placeholder= 'Ex. Janaina Martins' onChange= {(e) =>{
                setForm({ ...form, nome: e.target.value});
              }} value= {form.nome}/>  
            </div>
            
            <div className='esp'>  
              <div><label> Cargo Pretendido </label></div>
              <FormInput placeholder= 'Ex. Professora' onChange= {(e) =>{
                setForm({ ...form, cargo: e.target.value});
              }} value= {form.cargo}/>  
            </div>
          </div>

          <div className = 'linha'>
            <div className='esp'>  
              <div> <label> Data de Nascimento * </label></div>
              <FormInput type='date' onChange= {(e) =>{
                setForm({ ...form, nascimento: e.target.value});
              }} value= {form.nascimento}/>  
            </div>

            <div className='esp'>  
             <div> <label> Estado Civil</label> </div>
              <Seletor onChange= {(e) =>{
                setForm({ ...form, civil: e.target.value});
              }} value= {form.civil}>
                <Opcoes>            </Opcoes>
                <Opcoes> Casada(o) </Opcoes>
                <Opcoes> Solteira(o) </Opcoes>
                <Opcoes> Divorciada(o) </Opcoes>
                <Opcoes> Viúva(o) </Opcoes>
                <Opcoes> União Estável </Opcoes>
                <Opcoes> Prefiro não informar</Opcoes>
              </Seletor>  
            </div>
            
            <div className='esp'>
              <div><label> Sexo </label></div>
              <Seletor onChange= {(e) =>{
                setForm({ ...form, sexo: e.target.value});
              }} value= {form.sexo}>
                <Opcoes>            </Opcoes>
                <Opcoes> Mulher cis </Opcoes>
                <Opcoes> Homem cis </Opcoes>
                <Opcoes> Mulher trans </Opcoes>
                <Opcoes> Homem trans </Opcoes>
                <Opcoes> Prefiro não informar </Opcoes>
              </Seletor>
            </div>
          </div>

          <div className = 'linha'>
            <div className='esp2'>  
              <div><label> Endereço *</label></div>
              <FormInput placeholder= 'Ex. R. Hanibal Melo' onChange= {(e) =>{
                setForm({ ...form, endereco: e.target.value});
              }} value= {form.endereco}/>  
            </div>

            <div className='esp3'>  
              <div><label> Numero *</label></div>
              <FormInput placeholder= 'Ex. 1900' onChange= {(e) =>{
                setForm({ ...form, numero: e.target.value});
              }} value= {form.numero}/>  
            </div>

            <div className='esp'>  
              <div><label> Bairro *</label></div>
              <FormInput placeholder= 'Ex. Jardim Colégio' onChange= {(e) =>{
                setForm({ ...form, bairro: e.target.value});
              }} value= {form.bairro}/>  
            </div>
          </div>

          <div className = 'linha'>
            <div className='esp2'>  
              <div><label> Cidade *</label></div>
              <FormInput placeholder= 'Ex. Rio de Janeiro' onChange= {(e) =>{
                setForm({ ...form, cidade: e.target.value});
              }} value= {form.cidade}/>  
            </div>

            <div className='esp3'>  
              <div><label> Estado *</label></div>
              <FormInput placeholder= 'Ex. RJ' onChange= {(e) =>{
                setForm({ ...form, estado: e.target.value});
              }} value= {form.estado}/>  
            </div>

            <div className='esp'>  
              <div><label> CEP *</label></div>
              <FormInput placeholder= 'Ex. 21540504' onBlur={() => {
               fetchAddress();
              }}  onChange= {(e) =>{
                setForm({ ...form, cep: e.target.value});
              }} value= {form.cep}/>  
            </div>
          </div>
          
          <div className = 'linha'>
            <div className='esp'>  
              <div><label> Telefone Fixo 1 </label></div>
              <FormInput placeholder= 'Ex.(21)3000-0000' onChange= {(e) =>{
                setForm({ ...form, telefone1: e.target.value});
              }} value= {form.telefone1}/>  
            </div>
            
            <div className='esp'>  
              <div><label> Telefone Fixo 2 </label></div>
              <FormInput placeholder= 'Ex.(21)3000-0000' onChange= {(e) =>{
                setForm({ ...form, telefone2: e.target.value});
              }} value= {form.telefone2}/>  
            </div>

            <div className='esp'>  
              <div><label> Celular * </label> </div>
              <FormInput placeholder= 'Ex.(21)90000-0000' onChange= {(e) =>{
                setForm({ ...form, celular: e.target.value});
              }} value= {form.celular}/>  
            </div>
          </div>
          
          <div className = 'linha'>
            <div className='esp'>  
              <div><label> Contato </label> </div>
              <FormInput placeholder= 'Ex. Victor' onChange= {(e) =>{
                setForm({ ...form, contato: e.target.value});
              }} value= {form.contato}/>  
            </div>

            <div className='esp'>  
              <div><label> E-mail *</label></div>
              <FormInput placeholder= 'Ex. teste@teste.com'type = 'email' onChange= {(e) =>{
                setForm({ ...form, email: e.target.value});
              }} value= {form.email}/>  
            </div>

            <div className='esp'>  
              <div><label> Profissão *</label> </div>
              <FormInput placeholder= 'Ex. Contador' onChange= {(e) =>{
                setForm({ ...form, profissao: e.target.value});
              }} value= {form.profissao}/>  
            </div>
            

          </div>
          
          <div className = 'documentos'> <h2>Documentos </h2>  <hr/> </div>
          <div className = 'linha'>    
            <div className='esp'>  
              <div><label> Identidade* </label> </div>
              <FormInput placeholder= 'Ex.000000000' onChange= {(e) =>{
                setForm({ ...form, rg: e.target.value});
              }} value= {form.rg}/>  
            </div>

            <div className='esp'>  
              <div> <label> CPF * </label> </div>
              <FormInput placeholder= 'Ex.00000000000' onBlur={() => {
               teste();
              }} onChange= {(e) =>{
                setForm({ ...form, cpf: e.target.value});
              }} value= {form.cpf}/> 
               <Span id = 'aviso'>CPF inválido ou já cadastrado!</Span>
            </div>

            <div className='esp3'>
              <div><label> Possui Veículo? </label> </div>
              <Seletor onChange= {(e) =>{
                setForm({ ...form, veiculo: e.target.value});
              }} value= {form.veiculo}>
                <Opcoes>           </Opcoes>
                <Opcoes> Sim </Opcoes>
                <Opcoes> Não </Opcoes>
              </Seletor>
            </div>

            <div className='esp'>
              <div><label> Habilitação </label></div>
              <Seletor onChange= {(e) =>{
                setForm({ ...form, habilitacao: e.target.value});
              }} value= {form.habilitacao}>
                <Opcoes>            </Opcoes>
                <Opcoes> Não </Opcoes>
                <Opcoes> A </Opcoes>
                <Opcoes> B</Opcoes>
                <Opcoes> C </Opcoes>
                <Opcoes> D </Opcoes>
                <Opcoes> E </Opcoes>
              </Seletor>
            </div>
          </div>
          <div className = 'divBtn'>
            <button className = 'botaoEnviar' onClick={()=>createCandidate()} style={{cursor: 'pointer'}}>Enviar cadastro!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
