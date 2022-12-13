import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html="<p>A página não foi encontrada <a href='/'>Clique aqui para voltar</a></p>"
    />
  );
};
