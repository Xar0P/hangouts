/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  ButtonAction, Footer, Header, NavigationBar,
} from '../../components';
import { Div } from './Login.styles';

type InputsLogin = {
  email: string;
  senha: string;
}
export function Login() {
  const { register, handleSubmit } = useForm<InputsLogin>();

  async function submit(data: InputsLogin) {
    try {
      if (!data.email || !data.senha) throw new Error('Campos vazios');
      if (!data.email && !data.senha) throw new Error('Campos vazios');
      if (data.senha.length < 6) throw new Error('A senha dever ter mais de 5 letras');
      toast.success(String('Logado com sucesso'));
      console.log(data);
    } catch (error: any) {
      toast.error(String(error));
    }
  }

  return (
    <>
      <NavigationBar />
      <Header title="Login" />
      <Div>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <p>E-mail:</p>
            <input {...register('email')} />

            <p>Senha:</p>
            <input type="password" {...register('senha')} />

            <ButtonAction small>Entrar</ButtonAction>
          </form>
          <p>
            Ainda não tem uma conta?
            {' '}
            <Link to="/register">CRIE UMA AGORA!</Link>
          </p>
        </div>
      </Div>
      <Footer />
    </>
  );
}
